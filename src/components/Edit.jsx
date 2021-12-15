import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react/cjs/react.development';
import Rating from './Rating';


const Edit = ({edit,old}) => {
    console.log(edit)

    const [title, settitle] = useState(old.title)
    const [desc, setdesc] = useState(old.desc)
  
    const [poster, setposter] = useState(old.poster)
    const [rating, setrating] = useState(old.rating)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRating = (x)=> setrating(x)

    const handlesubmit  = (e)=> {
        e.preventDefault();
        const movieedit = {
            id: Math.random(),
            title,
            poster,
            desc,
            rating
            
            
        }
        edit(old.id,movieedit)
        handleClose()
    }



    return (
        <div>
            <form onSubmit={handlesubmit}>
            <Button variant="primary" onClick={handleShow} > Edit </Button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title> Edit </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <input type="text"  value={title} onChange={(e)=>settitle(e.target.value)} />
                        <br />
                        <input type="text"  value={desc} onChange={(e)=>setdesc(e.target.value)} />
                        <br />
                        <input type="url" placeholder="New Movie Poster URL" required value={poster} onChange={(e)=>setposter(e.target.value)} />
                        <br />
                        <Rating handleRating={handleRating} rating={rating} />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} > Close </Button>
                    <Button variant="primary" type="submit"   onClick={handlesubmit} > Save </Button>
                    </Modal.Footer>
                    </Modal>
            </form>
            
        </div>
    )
}

export default Edit
