import React, { useEffect, useState } from 'react';
import axios from '../utils/utils';
import LoadingEffect from "./LoadingEffect";
import { motion } from 'motion/react';

const AnimeDetail = (props) => {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const anime_id=props.id
    async function fetchAnime(id = 1) {
        try {
            console.log("id",id)
            setLoading(true);
            const response = await axios.get(`/anime/${id}`);
            console.info(response.data.data);
            setAnime(response.data.data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAnime(anime_id);  // Fetch anime data for the current page
        return ()=>{
            setAnime([]);
        }
    }, [anime_id]);
    return (
        <>
        {loading && <LoadingEffect />}
        {error && <p className="text-red-500">Error loading animes. Please try again later.</p>}
        <motion.div
        initial={{
            opacity:0.3,
            scale:0.5
        }}
        animate={{
            opacity:1,
            scale:1
        }}
        transition={{
            duration:0.5
        }}
        className='flex items-center justify-center min-h-screen overflow-hidden px-5 py-5' key={anime.mal_id}>
            <div className='flex flex-col sm:flex-row gap-2 w-full '>
            <div className=' w-full sm:w-1/4 sm:h-1/2 mx-3'>
            <img src={anime.images?.webp?.large_image_url || anime.images?.webp?.image_url} alt={anime.title} className='rounded-md' key={anime.mal_id} />
            </div>
            <div className='w-1/2 h-1/2  px-3 py-5 '>
            <dl class="sm:divide-y-2 dark:divide-gray-200 text-sm">
                <div class="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 sm:py-5 py-3">
                <dt class="font-bold dark:text-gray-200">id :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2">{anime.mal_id ||''}</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 sm:py-5 py-3">
                <dt class="font-bold dark:text-gray-200">Title :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2">{anime.title_english ||anime.title  ||''}</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-bold dark:text-gray-200">Score :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2">{anime.score ||''}</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-bold dark:text-gray-200">Episodes :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2">{anime.episodes ||''}</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-bold dark:text-gray-200">Rating :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2">{anime.rating	 ||''}</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-bold dark:text-gray-200">Popularity :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2">{anime.popularity	 ||''}</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-bold dark:text-gray-200 ">Synopsis :</dt>
                <dd class="dark:text-gray-300 sm:col-span-2 overflow-hidden text-ellipsis hover:text-clip">{anime.synopsis||''}</dd>
                </div>
                </dl>
            </div>
            </div>
            
            
        </motion.div>
        </>
      );
};

export default AnimeDetail;
