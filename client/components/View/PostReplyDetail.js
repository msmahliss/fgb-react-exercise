import React, { Component } from "react";
import "../../css/index.css";

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

export default PostReplyDetail;