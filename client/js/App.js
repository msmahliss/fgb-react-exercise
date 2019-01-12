import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore } from "redux";

import Home from "./Home.js";
import CreatePost from "./CreatePost.js";
import ViewPost from "./ViewPost.js";
import { samplePosts } from "../data/data.js";

function postReducer(state, action) {
  const defaultState = {
      posts: samplePosts
  };

  state = state || defaultState;

  switch (action.type) {
    case "ADD_POST":
      return {
        posts: [...state.posts, action.post]
      }
    default:
      return state;
  }
}

const store = createStore(
   postReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Posts Home</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
        <li>
          <Link to="/post/1">View Post</Link>
        </li>
      </ul>

      <Route path="/" exact render={() => <Home store={store}></Home>}/>
      <Route path="/create" render={() => <CreatePost store={store}></CreatePost>}/>
      <Route path="/post/:id" render={({match}) => <ViewPost data={samplePosts} store={store} match={match}></ViewPost>}/>
    </div>
  </BrowserRouter>
  ,
  document.getElementById("root")
);