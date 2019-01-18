import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostDetail from "./PostDetail.js";
import "../../css/index.css";

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