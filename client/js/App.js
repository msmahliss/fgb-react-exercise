import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from "./Home.js";
import { posts } from "../data/data.js";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Post Home</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
        <li>
          <Link to="/post/1">View Post</Link>
        </li>
      </ul>

      <Route path="/" exact render={() => <Home data={posts}></Home>}/>
    </div>
  </BrowserRouter>
  ,
  document.getElementById("root")
);