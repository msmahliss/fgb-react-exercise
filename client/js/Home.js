import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../css/index.css";

class PostItem extends React.Component {
  render() {
    const post = this.props.post;

    return (
      <div className="col-md-12 post-border">
        <Link to={"/post/" + post.id} className="link-unstyled">

        <div className="row">
          <div className="col-md-10">
              <p className="text-truncate">
                <strong>{post.title}</strong> {post.body}
              </p>

              <span className="post-item-username">Posted By: {post.username}</span>

              <span className="post-item-comments">{post.replies.length} Comment{ post.replies.length === 1 ? "" : "s" }</span>

              <span className="post-item-date post-item-update align-right">Last Update: {post.createdTimestamp}</span>
          </div>

          <div className="col-md-2">
            <span className="triangle-right align-right"></span>
          </div> 
        </div>        
        </Link>
      </div>        
    );
  }
}

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const store = this.props.store;
      const posts = store.getState().posts;
      const postItems = posts.map((item, index) =>
          <PostItem
            key={index}
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