export const API_KEY = process.env.REACT_APP_API_KEY;

export const requests ={
    feachTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
    fetchAnime:`/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHistoryMovies:`/discover/tv?api_key=${API_KEY}&with_genres=36`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
