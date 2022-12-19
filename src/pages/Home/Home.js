import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, NavLink} from "react-router-dom";
import Redditlogo from "../../assets/logo.png"

function Home(props) {
const [endpoint,setEndpoint] = useState(`https://www.reddit.com/hot.json?limit=15`)
const [posts,setPosts]=useState([])




useEffect(()=>{
    async function fetchData(){
        try {
            const result = await axios.get(endpoint)
            setPosts(result.data.data.children)
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }
    fetchData()
    },[])



    return (
        <>
            <body className="outer-container">
            <header className="outer-container header">
            <div className="inner-container ">
                <nav className="inner-container navbar">
                    <ul className="nav-list">
                        <li className="nav-link"><NavLink to={"/"}>Hottest Posts</NavLink></li>
                        <a href="https://www.reddit.com"><li>Reddit</li></a>
                        <li><NavLink to={"/Subreddit/r/memes"}>Memes</NavLink></li>
                    </ul>
                </nav>

            <div className="inner-container logo-title">
                <img className="reddit-logo" src={Redditlogo} alt="logo image"/>
            </div>
                <h1 className="reddit-title">Reddit</h1>

            </div>
            </header>
            {Object.keys(posts).length > 0 &&
                <>
                    <div className="outer-container bottom-half">
                        <div className="inner-container hottest-title">
                        <h2 className="inner-container hottest-posts">Hottest Posts</h2>
                        <h4 className="inner-container reddit-right-now">on Reddit right now</h4>
                        </div>
                        <div className="inner-container tile-container">

                            <>
                                <ul className="tiles-list">{posts.map((reddit)=>{
                                    return (
                                        <>
                                        <article className="reddit-tile">
                                        <a className="hot-reddit-link" href={"https://www.reddit.com/"+ reddit.data.id}><h3 key={reddit.data.title}>{reddit.data.title}</h3></a>



                                        <div className="subreddit-link">
                                        <Link key={reddit.data.subreddit_name_prefixed} to={"/Subreddit/" + reddit.data.subreddit_name_prefixed}>{reddit.data.subreddit_name_prefixed}</Link>
                                        <p className="commentups" key={reddit.data.num_comments}>Comments {reddit.data.num_comments}</p><p className="commentups" key={reddit.data.ups}>Ups {reddit.data.ups}</p>
                                        </div>
                                        </article>
                                        </>
                                )})}
                                </ul>
                            </>

                    </div>
                    </div>
                </>}



            </body>
        </>
    );
}

export default Home;



