import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Details from './Details';
// import { useState } from 'react/cjs/react.development';
import Edit from './Edit';
import Rating from './Rating';

const Moviecard = ({movie,edit}) => {


    // const [film, setfilm] = useState(movie)

    // const handleedit = (e) => setfilm(e.target.value)

    
    return (
        <div className="movieapp">
            
            <Card style={{ hight: '10rem' , width: '15rem' }}>
            <Card.Img height='400px' variant="top" src={movie.poster} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>

            {/* <Card.Text style={{ color:'grey' }} >{movie.desc}</Card.Text> */}

            <Card.Title> <Rating rating={movie.rating}/> </Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>

            {/* <Details moviedetail={movie} /> */}

            <Link to={`/Details/${movie.id}`}> details </Link>

            <br />

            <Edit old={movie} edit={edit}/>
            <br />
            </Card>

            {/* <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt="" />
            <h4>{movie.rating}</h4> */}

        </div>
    )
}

export default Moviecard
