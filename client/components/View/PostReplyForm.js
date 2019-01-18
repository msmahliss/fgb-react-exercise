import React, { Component } from "react";
import "../../css/index.css";

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

export default PostReplyForm;