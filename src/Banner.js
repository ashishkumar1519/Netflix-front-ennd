import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./request";
import './banner.css'
const Banner = () => {
    const [movies, Setmovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            Setmovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
        }
        fetchData();
    }, []);

    function truncate(str,n) {
        return str?.length > n ? str.substring(0,n-1 ) + "..." : str;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: "100% 100% ",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            }}
        >
            <div className='banner_content'>
                <h1 className ="banner_title">{movies?.title || movies?.name || movies?.origginal_name} </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play </button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className = "banner_description" >
                {truncate(movies.overview, 150)}
                </h1>

            </div>
            <div className="banner_fadebottom">

            </div>
        </header>
    );
};

export default Banner;
