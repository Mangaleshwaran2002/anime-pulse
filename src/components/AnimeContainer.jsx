import { Link } from "react-router-dom";
import getAnimes from "./getAnimes";
import LoadingEffect from "./LoadingEffect";
import { motion } from "motion/react";


function AnimeContainer() {
    const { animes, hasMore, page, setPage, total_page, loading, error } = getAnimes();

    const handleNext = () => {
        if (hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
            <motion.div 
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration: 1
            }}
            className="flex flex-col gap-5 overflow-x-hidden scrollbar-hide h-screen">
                <h1 className="text-3xl font-bold text-center my-5">Animes</h1>
                <div className="flex flex-wrap justify-center gap-5 ">
                <div className="flex w-full justify-center gap-5 my-5">
                    <button 
                        disabled={page == 1} 
                        onClick={handlePrevious} 
                        className=" bg-transparent p-2 text-black dark:text-white disabled:invisible rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <h2 className="text-sm/8 font-medium tracking-widest">{page}/{total_page}</h2>
                    <button 
                        disabled={!hasMore} 
                        onClick={handleNext} 
                        className="bg-transparent p-2 text-black dark:text-white disabled:invisible rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                    {loading && <LoadingEffect />}
                    {error && <p className="text-red-500">Error loading animes. Please try again later.</p>}
                    {animes.map((anime, index) => (
                    <motion.div key={index}
                    initial={{
                        opacity:0.5,
                        scale:1
                    }}
                    whileInView={{
                        opacity:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    transition={{
                        duration:0.8
                    }}
                    className="flex flex-wrap rounded-lg">
                        <Link to={`/anime/${anime.mal_id}`} id={anime.mal_id}>
                            <div className="group relative rounded-lg ">
                                <div className="h-[350px] sm:h-[450px] w-[270px] sm:w-[350px] ">
                                <img src={anime.images?.webp.large_image_url} 
                                     alt={anime.title} 
                                     className="h-full w-full min-w-20 transition-all duration-300 ease-in-out rounded-md group-hover:opacity-80" />
                                
                                </div>
                                <div className="absolute bg-gray-800 right-0 bottom-0 w-full translate-x-full group-hover:translate-x-0 transform  p-4 opacity-80 transition-all duration-500 ease-in group-hover:opacity-100 invisible group-hover:visible rounded-b-md ">
                                <div class="flow-root">
                                    <dl class="-my-3 text-sm">

                                        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-200">Title</dt>
                                        <dd class="text-gray-300 sm:col-span-2">{anime.title_english || anime.title}</dd>
                                        </div>

                                        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-200">Episodes</dt>
                                        <dd class="text-gray-300 sm:col-span-2">{anime.episodes}</dd>
                                        </div>
                                        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-200">Rating</dt>
                                        <dd class="text-gray-300 sm:col-span-2">{anime.rating}</dd>
                                        </div>

                                    </dl>
                                </div>

                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    ))}
                </div>

                <div className="flex w-full justify-center gap-5 my-5">
                    <button 
                        disabled={page == 1} 
                        onClick={handlePrevious} 
                        className=" bg-transparent p-2 text-black dark:text-white disabled:invisible rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <h2 className="text-sm/8 font-medium tracking-widest">{page}/{total_page}</h2>
                    <button 
                        disabled={!hasMore} 
                        onClick={handleNext} 
                        className="bg-transparent p-2 text-black dark:text-white disabled:invisible rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </>
    );
}

export default AnimeContainer;
