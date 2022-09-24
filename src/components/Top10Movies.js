import React, { useState } from "react";
import Movie from "./Movie";

export default function Top10Movies(props) {
  let [ movies, setMovies ] = useState(props.movies)
  let [ active, setActive ] = useState('rating')
  
  const search = (e) => {
    let term = e.target.value
    
    setMovies(props.movies.filter( m => m.title.toLowerCase().indexOf(term) !== -1))
    setMovies(props.movies.filter( m => m.plot.toLowerCase().indexOf(term) !== -1))
  }
  
  const sortByRating = (e) => {
    let sortedMovies = movies.sort((a, b) => b.rating - a.rating)  //descending sort
    setActive('rating')
    setMovies([...sortedMovies])
  }
  
  const sortByTitle = (e) => {
    let sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title)) //ascending sort
    setActive('title')
    setMovies([...sortedMovies])
  }
  
  const sortByYear = (e) => {
    let sortedMovies = movies.sort((a, b) => a.year - b.year) //ascending sort
    setActive('year')
    setMovies([...sortedMovies])
  }
  
  const sortByDate = (e) => {
    let sortedMovies = movies.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
    setActive('releaseDate')
    setMovies([...sortedMovies])
  }
  
  return (
    <>
      <div className="d-flex justify-content-between row">
        <input type="search" className="form-control col me-5" placeholder="Search" onChange={search}/>
        <div className="col ms-5">
        <strong>Sort By: </strong>
        <div className="btn-group">
          <button className={`btn btn-primary ${active === 'rating' ? 'active' : ''}`} onClick={ sortByRating }>Rating</button>
          <button className={`btn btn-primary ${active === 'title' ? 'active' : ''}`} onClick={ sortByTitle }>Title</button>
          <button className={`btn btn-primary ${active === 'year' ? 'active' : ''}`} onClick={ sortByYear }>Year</button>
          <button className={`btn btn-primary ${active === 'releaseDate' ? 'active' : ''}`} onClick={ sortByDate }>Release Date</button>
        </div>
        </div>
      </div>
      <div className="row mt-3 row-cols-3 g-3">
        {movies.map((m) => (
          <Movie key={m.title} movie={m} />
        ))}
      </div>
    </>
  );
}
