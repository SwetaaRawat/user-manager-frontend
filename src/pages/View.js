import React,{useState, useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import "./View.css";

export const View = () => {
    const [contact, setContact] = useState({});

    const{id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setContact({...resp.data[0]}));
    }, [id])

  return (
    <div style={{marginTop: "150px"}}>
        <div className='card'>
            <div className='card-header'>
                <p>Contact Details</p>
            </div>
            <div className='container'>
                <strong>ID: </strong>
                <span>{id}</span>
                <br/>
                <br/>
                <strong>Name: </strong>
                <span>{contact.name}</span>
                <br/>
                <br/>
                <strong>Email: </strong>
                <span>{contact.email}</span>
                <br/>
                <br/>
                <br/>
                <strong>Contact Number: </strong>
                <span>{contact.contact}</span>
                <br/>
                <br/>
                <Link to="/">
                <button className='btn btn-edit'>Go Back</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
