import "./MovieList.css"
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Card from "../card/Card";

const MovieList = () => {

  const [movieList, setMovieList] = useState([])
  const { type } = useParams()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setMovieList(data.results)
      })
  }

  return (
    <div className="movie-list">
      <h2 className="list-title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list-card">
        {
          movieList.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))
        }
      </div>
    </div>
  );
}

export default MovieList;
