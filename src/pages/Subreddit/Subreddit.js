import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Subreddit.css'


function Subreddit() {
    const { id } = useParams();
    const [childReddit, setChildReddit] = useState({})

    useEffect(()=>{
    async function fetchSub() {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
            setChildReddit(response.data.data)

        } catch (e) {
            console.error(e);
        }
    }


    fetchSub();
    },[])
    console.log(childReddit)
    return (        <div>
            <div className="top-half header">
                <h1>{childReddit.title}</h1>
                <h4>Subreddit Specifications</h4>
            </div>
            <h3 className="beschrijving">Title</h3>
            <p className="beschrijving">{childReddit.title}</p>
            <h3 className="beschrijving">Description</h3>
            <p className="beschrijving">{childReddit.public_description}</p>
            <h3 className="beschrijving">Number of subscribers</h3>
            <p className="beschrijving">{childReddit.subscribers}</p>
            <Link to= {"/"}><p  className="back-link">Take me back</p></Link>
        </div>






    )
}

export default Subreddit;