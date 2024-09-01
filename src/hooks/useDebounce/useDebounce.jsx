import {useEffect, useRef, useState} from 'react';

function useDebounce(search, searchingFunction, delay = 300) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // const abortControllerRef = useRef(null);

    useEffect(() => {
        if (!search) {
            setData(null);
            return;
        }

        // abortControllerRef.current = new AbortController();
        // const { signal } = abortControllerRef.current;

        const searchTimerBeforeFetch = setTimeout(() => {
            try {
                const searchData = searchingFunction({ search });
                setData(searchData);
            } catch (e) {
                if (e.name === "AbortError") {
                    console.log("Request was aborted");
                } else {
                    console.error("Error fetching data:", e);
                    setError(e);
                }
            }
        }, delay);

        return () => {
            // abortControllerRef.current.abort();
            clearTimeout(searchTimerBeforeFetch);
        };
    }, [search, searchingFunction, delay]);

    return { data, error };
}

export { useDebounce };
