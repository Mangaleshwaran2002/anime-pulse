function LoadingEffect(){
    return(
        <>
        <div id="spinner-container" class="space-y-10">
            <div class="flex justify-center">
                <div class="w-20 h-20 border-10 border-blue-500
                            border-t-transparent rounded-full 
                            animate-spin">
                </div>
            </div>
        </div>
        </>
    )
}

export default LoadingEffect;