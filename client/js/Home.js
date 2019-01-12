import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PostItem extends React.Component {
  render() {
    const post = this.props.post;

    return (
      <div className="col-md-12 post-border">
        <Link to={"/post/" + post.id} className="link-unstyled">
          <p className="">
            <strong>{post.title}</strong> {post.body}
          </p>

          <div className="post-data">
            <p>Posted By: {post.username}</p>

            <p>{post.replies.length} Comment{ post.replies.length === 1 ? "" : "s" }</p>

            <p>Last Update: {post.createdTimestamp}</p>
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
          <h2>The Message Board</h2>
          
          <div className="row">
            {postItems.length > 0 ? postItems : "There are currently no posts."}
          </div>

          <button>
            <Link to="/create">Create New Post</Link>
          </button>
        </div>
      );        
    }
}

export default Home;