import React from "react";
import { connect } from "react-redux";
import { getPosts } from "./actions/posts";

import { PostCard } from "./components/post/postCard";
import { Button } from "./components/button/button";
import "./App.css";

class App extends React.Component {

	render() {

		const { isLoading, posts } = this.props;

		return isLoading ? (
			<Button handleClick={this.props.getPosts}>Get posts!/</Button>
		) : (
			<>
				<Button handleClick={this.props.getPosts}>Get posts!/</Button>
				<div className="posts-wrapper">{posts.map((item) => (
					<PostCard key={item.id} title={item.title} body={item.body}/>
				))}</div>
			</>
		)
	}
}

const mapStateToProps = ({isLoading, posts}) => ({ isLoading, posts });

const mapDispatchToProps = {
	getPosts
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(App);