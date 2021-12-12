import React from 'react'
import Moviecard from './Moviecard'


const Movielist = ({film}) => {





    return (
        <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around"}}>
            {film.map(el=>
            <Moviecard movie={el}/> 
             )}
            
        </div>
    )
}

export default Movielist
