import React, { useState, useEffect } from "react";
import axios from "./axios";
import './row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailorUrl, setTrailorUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    console.log(movie)
    if (trailorUrl) {
      setTrailorUrl("");
    }
    else {
      movieTrailer (movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailorUrl(urlParams.get("v"))
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>
      {/* container - >poster */}
      <div className='row_posters'>
        {movies.map((movie) => (
          <img key={movie.id} 
          onClick={() => { handleClick(movie) }}
           className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
           src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.id} />
        ))}
      </div>
      {trailorUrl && <YouTube videoId={trailorUrl} opts={opts} />}
    </div>
  );
}

export default Row;
