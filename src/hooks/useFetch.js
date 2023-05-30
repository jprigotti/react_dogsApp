import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [nextImage, setNextImage] = useState(false);
    const getNextImage = () => setNextImage(!nextImage);


    const showFavoriteImage = (urlImage) => {
        console.log("url for fav Image: ", urlImage);
        setImage(urlImage);
      };


    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(url);
                setLoading(true);
                console.log("Loading...");
                if (!response.ok) throw new Error("Something went wrong!"); //Genera una Exception si la respuesta no es 200OK
                const data = await response.json();
                console.log("image url is: ", data[0].url);
                setImage(data[0].url);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false);
                console.log("Loaded...");
            }
        }

        fetchData();

    }, [nextImage]);

    return {
        image,
        loading,
        error,
        getNextImage,
        showFavoriteImage,
    };
};

export default useFetch;





