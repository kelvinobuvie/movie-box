import {useEffect} from "react";

// d5a3fa95

const API_URL = 'http://www.omdbapi.com?apikey=d5a3fa95'

const Movies = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <h1>App</h1>
    )
}

export default Movies