const API_KEY = "fcbf910d0ef1175838837c1a769d4403";
const API_URl = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${API_URl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${API_URl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${API_URl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `${API_URl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${API_URl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${API_URl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${API_URl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${API_URl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
