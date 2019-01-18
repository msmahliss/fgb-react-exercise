import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../css/index.css";

class CreatePostForm extends React.Component {
	constructor(props) {
		super(props);

		const store = this.props.store;
		const postId = store.getState().posts.length + 1; //not robust; works only because posts list will only grow

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

	  	this.props.history.push("/");
	}

	handleFormElementChange(e) {
		const el = e.target;
		this.newPost[el.name] = el.value;
	}
	
	render() {
		return (
				<form onSubmit={this.handleFormSubmit} id="create-post-form">
			        <div className="form-group form-group-create-post col-md-12">
			            <label className="text-bold">Title*</label>

			            <input
			            	className="form-control"
			                type="text"
			                name="title"
			                onChange={this.handleFormElementChange}
			                required
			            ></input>		             
			        </div>

			        <div className="form-group form-group-create-post col-md-12">
						<label className="text-bold">Message*</label>
						<textarea
							className="form-control"
							name="body"
							onChange={this.handleFormElementChange}
							required
						></textarea>
			        </div>

			        <div className="form-group form-group-create-post col-md-12">
						<label className="text-bold">User</label>

						<input
							className="form-control"
							type="text"
							name="username"
							onChange={this.handleFormElementChange}
						></input>
			        </div>

			        <div className="form-group form-group-create-post col-md-12">
				        <Link to="/" className="link-unstyled">
					        <button type="button" className="post-btn">
					        	Cancel
					        </button>
					    </Link>

				        <button type="submit" className="post-btn">Create Post</button>
					</div>
				</form>
		);
	}
}

export default CreatePostForm;