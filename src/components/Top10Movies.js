import React, { useState } from "react";
import Movie from "./Movie";

export default function Top10Movies(props) {
  let [ movies, setMovies ] = useState(props.movies)
  
  const search = (e) => {
    let term = e.target.value
    let result = term.toString().toLowerCase()
    
    setMovies(props.movies.filter( m => m.title.indexOf(result) !== -1))
    setMovies(props.movies.filter( m => m.plot.indexOf(result) !== -1))
  }
  return (
    <>
      <div className="d-inline-flex justify-content-between">
        <input type="search" className="form-control" placeholder="Search" onChange={search}/>
      </div>
      <div className="row mt-3 row-cols-3 g-3">
        {movies.map((m) => (
          <Movie key={m.title} movie={m} />
        ))}
      </div>
    </>
  );
}
