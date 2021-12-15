import React from 'react'
// import { Modal, Button } from 'react-bootstrap';
// import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';



const Details = (props) => {

    const detailss = props.detail.find((el) => el.id == props.match.params.id)

    console.log(detailss)
    console.log(props)

    // const [desc, setdesc] = useState("")



    // const [show, setShow] = useState(false); 
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <div>
            <Link to='/'> Home </Link>

            <div style={{ flexWrap:"wrap", justifyContent:"space-around"}} >
            <h1>{detailss.title}</h1>
            
            <h4 style={{color: 'grey'}}>{detailss.desc}</h4>

            <iframe width="560" height="315" src={detailss.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            

           

            {/* <form >
                
            <Button variant="primary" onClick={handleShow} > View Details </Button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title> Movie Details </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        
                        <input type="text"  value={desc} onChange={(e)=>setdesc(e.target.value)} />
                        <p> {old.desc} </p>
                        

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} > Close </Button>
                    
                    </Modal.Footer>
                    </Modal>
            </form>  */}

            
        </div>
    )
}

export default Details
