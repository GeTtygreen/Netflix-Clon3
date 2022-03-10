import React, {useEffect, useState} from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //  snippet of code that runs based on a specific condition/varaible
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      return requests;
      // https://api.themoviedb.org/3
    }
    fetchData();
    // if [],run once and dont run again
  }, [fetchUrl]);

  const opts= {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google/youtube/player_parameters
     autoplay:1,
    },
  };
  // movie trailer function 
  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name || "")
      .then((url) => {

        const urlParams = new URLSearchParams( new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error))
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* {container with several row_posters} */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}

            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}

            alt={movie.name}
          />
        ))}
      </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
