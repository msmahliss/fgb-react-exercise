import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem.js";
import "../../css/index.css";

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const store = this.props.store;
      const posts = store.getState().posts;
      const postItems = posts.map((item, index) =>
          <PostItem
            key={item.id}
            post={item}
          />
      );
      return (
        <div>
          <h2 className="text-center">The Message Board</h2>
          
          <div className="row">
            {postItems.length > 0 ? postItems : "There are currently no posts."}
          </div>

          <div className="text-center">
            <Link to="/create">
              <button className="post-btn post-create-btn">
                Create New Post
              </button>
            </Link>
          </div>
        </div>
      );        
    }
}

export default Home;