import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostReplyDetail from "./PostReplyDetail.js";
import PostReplyForm from "./PostReplyForm.js";
import "../../css/index.css";

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

export default PostDetail;