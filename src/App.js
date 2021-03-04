

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieTitles from "./components/MoviesTitles"
import MoviesList from "./components/MoviesList"
import SearchBar from "./components/SearchBar"
import React, {useState, useEffect}  from "react"
import AddToFavorits from './components/AddToFavourits';
import RemoveFavourits from "./components/RemoveFavourits"

function App() {
  require('dotenv').config();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue ] = useState('avengers')
  const [addFavourits,setaddFavourits] = useState([])



const getMovieResponse = async (searchValue) =>{
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_SECRET_KEY}`;

      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search){

        setMovies(responseJson.Search)
      }
     
}

useEffect(() =>{
    getMovieResponse(searchValue);
},[searchValue])

  
const handleFavoriteList = (movies) =>{
  const newFavouriteList = [...addFavourits,movies];
  setaddFavourits(newFavouriteList)
  
}

const RemoveFavouritMovie = (movie) =>{
  const newFavouriteList = addFavourits.filter((addFavourits) => addFavourits.imdbID !== movie.imdbID);

setaddFavourits(newFavouriteList)
}

  return (
   <div className = "container-fluid movie-app">
   
    
     <div className = "row mt-2 d-flex align-items-center pt-3 pb-3 mr-3">
       <MovieTitles heading = "Movies" />
       <SearchBar searchValue = {searchValue} setSearchValue = {setSearchValue} />
     </div>
   
     <div className = "row">
      
     <MoviesList movies = {movies} addFavouritMovie = {handleFavoriteList} FavouritComponents = { AddToFavorits} />
     </div>


     <div className = "row mt-2 d-flex align-items-center pt-3 pb-3 mr-3">
       <MovieTitles heading = "Favourits" />
      
     </div>

     <div className = "row">
      
      <MoviesList movies = {addFavourits} addFavouritMovie = {RemoveFavouritMovie} FavouritComponents = { RemoveFavourits} />
      </div>


     

     
    
    </div>
  );
}

export default App;
