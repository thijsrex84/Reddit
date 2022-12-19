import React, {useEffect, useState} from 'react';
import './App.css';
import {Routes ,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Subreddit from "./pages/Subreddit/Subreddit";
import axios from "axios";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
  <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/subreddit/r/:id" element={<Subreddit/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    </Routes>

    <footer className="outer-container footer">
      <div className="inner-container copyright">
        In opdracht van Novi Hogeschool @ 2022
      </div>
    </footer>
  </>
  );
}

export default App;




// endpoints: for titel is {.title}, for link is {.subreddit_name_prefixed}, for comments is {.num_comments}, for UPS is {.ups}