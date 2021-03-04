import React from "react";


const SearchBar = (props) =>{
     return <div class="row">
             <input className="form-control" placeholder = "search any movie" value  = {props.value}
               onChange = { (event) => props.setSearchValue(event.target.value) }
             
             ></input>
             
             </div>
}


export default SearchBar;