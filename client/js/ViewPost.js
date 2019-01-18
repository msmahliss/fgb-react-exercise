import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

class PostReplyDetail extends React.Component {
	render() {
		const reply = this.props.reply;
			

		return(
			<div>
				{this.props.index != 0 && <hr className="line-dotted" />}
				<p className="text-bold">{reply.username}:</p>
				<p>{reply.body}</p>
			</div>
		);
	}
}

class PostReplyForm extends React.Component {
	constructor(props) {
		super(props);

		const store = this.props.store;
		this.post = this.props.post;
		const postReplyId = this.post.replies.length + 1;

		this.newPostReply = {
			id: postReplyId,
			body: "",
			username: "AnonUser",
		};

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormElementChange = this.handleFormElementChange.bind(this);
	}

	handleFormSubmit(e) {
		e.preventDefault();

		this.post.replies = [...this.post.replies, this.newPostReply];

	  	this.props.store.dispatch({
	    	type: "EDIT_POST",
	    	id: this.post.id,
	    	post: this.post
	  	});

	  	this.props.history.push("/");
	}

	handleFormElementChange(e) {
		const el = e.target;
		this.newPostReply[el.name] = el.value;
	}

	render() {
		return(
			<form onSubmit={this.handleFormSubmit}>
				<div className="col-md-9">
			        <div className="form-group">
			        	<label>Reply Message*:</label>

						<textarea
							className="form-control"
							name="body"
							onChange={this.handleFormElementChange}
							required
						></textarea>
			        </div>

			        <div className="form-group">
			        	<label>Reply User:</label>

						<input
							className="form-control"
							type="text"
							name="username"
							placeholder="AnonUser"
							onChange={this.handleFormElementChange}
						></input>
			        </div>
		        </div>

		        <div className="col-md-3">
					<button type="submit" className="full-width">
						Post Reply
					</button>
				</div>
			</form>	
		);
	}
}

class PostDetail extends React.Component {
	render() {
		const store = this.props.store;
		let post = this.props.post;
		let history = this.props.history;

		const replies = post.replies.map((reply, index) =>
			<PostReplyDetail
				key={reply.id}
				index={index}
				reply={reply}
			></PostReplyDetail>
		);

		return (
			<div className="row post-border">
				<div className="col-md-12">
					<h3 className="text-bold">{post.title}</h3>

					<div className="row">
						<p className="col-md-2 no-margin-bottom">By: {post.username}</p>
						<p className="col-md-10">On: {post.createdTimestamp}</p>
					</div>

					<p>{post.body}</p>
				</div>

				<div className="col-md-12">
					<hr className="line-dotted" />
				</div>

				<div className="col-md-12">
					<p className="text-bold">Responses</p>

					<div className="indent-left">
						{replies.length > 0 ? replies : "No one has replied to this post. Be the first!"}
					</div>
				</div>

				<div className="col-md-12">
					<hr className="line-solid" />
				</div>

				<div className="col-md-12">
					<PostReplyForm post={post} store={store} history={history}></PostReplyForm>
				</div>

				<div className="col-md-12">
					<hr className="line-solid" />
				</div>

				<div className="col-md-12">
					<Link to="/">
						<button className="full-width link-unstyled">
							Back to Posts
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

class ViewPost extends React.Component {
	render() {
		const store = this.props.store;
		let history = this.props.history;

		const id = parseInt(this.props.match.params.id);
		const posts = store.getState().posts;

		let post = posts.filter(p => p.id == id);
		post = post[0];

		return (
			<PostDetail post={post} store={store} history={history}></PostDetail>
		);
	}
}

export default ViewPost;