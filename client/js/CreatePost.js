import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CreatePostForm extends React.Component {
	constructor(props) {
		super(props);

		const store = this.props.store;
		const postId = store.getState().posts.length + 1;

		this.newPost = {
			id: postId,
			title : "",
			body: "",
			username: "AnonUser",
			replies: [],
			createdTimestamp: new Date().toLocaleString()
		};

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormElementChange = this.handleFormElementChange.bind(this);
	}

	handleFormSubmit(e) {
		e.preventDefault();

	  	this.props.store.dispatch({
	    	type: "ADD_POST",
	    	post: this.newPost
	  	});
	}

	handleFormElementChange(e) {
		const el = e.target;
		if (el.value == "") {
			console.log(`enter a value for ${el.name}`);
		}
		this.newPost[el.name] = el.value;
		console.log(this.newPost[el.name]);
	}
	
	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
		        <div className="form-group">
		            <label>Title
			            <input
			                type="text"
			                name="title"
			                onChange ={this.handleFormElementChange}
			            />
		             </label>
		        </div>

		        <div>
		        	<label>Message
						<textarea
							name="body"
							onChange ={this.handleFormElementChange}
						></textarea>
					</label>
		        </div>

		        <div>
		        	<label>User
						<input
							type="text"
							name="username"
							onChange ={this.handleFormElementChange}
						/>
					</label>
		        </div>

		        <button>
		        	<Link to="/">Cancel</Link>
		        </button>

				<input type="submit" value="Create Post" />
			</form>
		);
	}
}

class CreatePost extends React.Component {
	render() {
		const store = this.props.store;

		return (
			<div className="post-border">
				<h2>Create a new post</h2>

				<CreatePostForm
					store={store}
				></CreatePostForm>
			</div>
		);
	}
}

export default CreatePost;