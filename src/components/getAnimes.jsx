import { useState, useEffect } from "react";
import axios from '../utils/utils';

function useGetAnimes() {
    const savedPage = parseInt(localStorage.getItem("page"));
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(savedPage || 1);
    const [total_page, setTotal_page] = useState(0); 
    const [hasMore, setHasMore] = useState(true); 
    async function fetchAnime(currentPage = 1) {
        try {
            setLoading(true);
            const response = await axios.get(`/top/anime?page=${currentPage}`);
            setAnimes(response.data.data);
            setHasMore(response.data.pagination.has_next_page);
            setTotal_page(response.data.pagination.last_visible_page);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAnime(page);  
        localStorage.setItem("page", page);
        return ()=>{
            setAnimes([])
        }
    }, [page]);  

    return { animes, hasMore, page, setPage, total_page, loading, error };
}

export default useGetAnimes;

