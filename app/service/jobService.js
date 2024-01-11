import { useState, useEffect } from "react";
import axios from "axios";
// export default JobService;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
   
    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log('Error is >> ' + error)
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const refresh = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refresh }
};

export default useFetch;