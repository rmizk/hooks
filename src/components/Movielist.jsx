import React from 'react'
import Moviecard from './Moviecard'
import { Link } from 'react-router-dom'



const Movielist = ({film,edit}) => {

    return (
        <div>
            <Link to={'/Addmovie'}> Add movie </Link>
                <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around"}}>
                {film.map((el,i)=>
                <Moviecard key={i} edit={edit} movie={el}/> 
                )}
                </div>
        </div>
    )
}

export default Movielist
