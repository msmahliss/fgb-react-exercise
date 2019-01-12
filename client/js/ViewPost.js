import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PostReplyDetail extends React.Component {
	render() {
		const reply = this.props.reply;

		return(
			<div>
				<p className="text-bold">{reply.username}:</p>
				<p>{reply.body}</p>
			</div>
		);
	}
}

class PostReplyForm extends React.Component {
	render() {
		return(
			<form>
		        <div className="form-group">
		        	<label>Reply Message:</label>

					<textarea
						className="form-control"
						name="postBody"
						required
					></textarea>
		        </div>

		        <div className="form-group">
		        	<label>Reply User:</label>

					<input
						className="form-control"
						type="text"
						name="username"
						placeholder="Serenely"
					></input>
		        </div>

				<button>
					Post Reply
				</button>
			</form>	
		);
	}
}

class PostDetail extends React.Component {
	render() {
		const post = this.props.post;

		const replies = post.replies.map((reply, index) =>
			<PostReplyDetail
				key={index}
				reply={reply}
			></PostReplyDetail>
		);

		return (
			<div className="row post-border">
				<div>
					<h3>{post.title}</h3>

					<div className="row">
						<p className="col-md-6">By: {post.username}</p>
						<p className="col-md-6">On: {post.createdTimestamp}</p>
					</div>

					<p>{post.body}</p>
				</div>

				<div className="col-md-12">
					<p className="text-bold">Responses</p>

					<div className="indent-left">
						{replies.length > 0 ? replies : "No one has replied to this post. Be the first!"}
					</div>
				</div>

				<div className="col-md-12">
					<PostReplyForm></PostReplyForm>
				</div>

				<button>
					<Link to="/">Back to Posts</Link>
				</button>
			</div>
		);
	}
}

class ViewPost extends React.Component {
	render() {
		const store = this.props.store;

		const id = parseInt(this.props.match.params.id);
		const posts = store.getState().posts;

		let post = posts.filter(p => p.id == id);
		post = post[0];

		return (
			<PostDetail post={post}></PostDetail>
		);
	}
}

export default ViewPost;