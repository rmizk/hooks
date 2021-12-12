import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Moviecard = ({movie}) => {
    return (
        <div className="movieapp">
            
            <Card style={{ hight: '10rem' , width: '15rem' }}>
            <Card.Img height='400px' variant="top" src={movie.poster} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text style={{ color:'grey' }} >{movie.desc}</Card.Text>


            <Card.Title> <Rating rating={movie.rating}/> </Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
            



            {/* <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt="" />
            <h4>{movie.rating}</h4> */}

            
            
        </div>
    )
}

export default Moviecard
