import React, { Component } from "react";
import CreatePostForm from "./CreatePostForm.js";
import "../../css/index.css";

class CreatePost extends React.Component {
    render() {
        const store = this.props.store;
        let history = this.props.history;

        return (
            <div className="post-border">
                <h2 className="text-center">Create a new post</h2>

                <CreatePostForm
                    store={store} history={history}
                ></CreatePostForm>
            </div>
        );
    }
}

export default CreatePost;