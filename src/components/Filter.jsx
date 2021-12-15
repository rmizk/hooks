import React from 'react'
import Rating from './Rating'
// import { Link } from 'react-router-dom'


export const Filter = ({text,handletext,rating,handleRating}) => {
    return (
        <div>
            {/* <Link to={'/Movielist'}> Movie List </Link> */}
            <h1>Our Movie App</h1>
            <div>
            <input type="text" placeholder="Search a Movie" value={text} onChange={handletext} />
            <Rating rating={rating} handleRating={handleRating}/>


            </div>
            
        </div>
    )
}
