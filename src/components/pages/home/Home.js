import "../home/Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MovieList from "../../movieList/MovieList";

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
  }, [])

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <Link to={`/movie/${movie.id}`} className="" key={movie.id}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
                </div>
                <div className="posterImage-overlay">
                  <div className="posterImage-title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage-runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage-rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage-description">{movie ? movie.overview : ""}</div>
                </div>
              </Link>
            ))
          }
        </Carousel>
        <MovieList />
      </div>
    </>
  );
}

export default Home;
