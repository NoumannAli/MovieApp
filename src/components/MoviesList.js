import React from "react";


function MoviesList(props){

    const FavouritComponents = props.FavouritComponents;
    
    return(
        <>
            {props.movies.map((movie,index ) => 
            <div className = "d-flex m-2 justifu-content-start img-container">

                <img src = {movie.Poster} ></img>
                <div onClick = {() => props.addFavouritMovie(movie)} className = "overlay d-flex justify-content-center align-items-center">
                    <FavouritComponents/>
                </div>
            </div>)}
        </>
    )
       
    

}



export default MoviesList