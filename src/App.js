import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App({ posts, dispatch }) {

	const [postTitle, setPostTitle] = useState("");
	const [postId, setPostId] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		setPostId(postId+1);
		dispatch({
			type: "ADD_POST",
			payload: {
				id: postId,
				title: postTitle
			}
		});
		setPostTitle("");
	};

	// useEffect(() => {
	// 	const url = "https://jsonplaceholder.typicode.com/posts";
	// 	fetch(url).then(response => response.json()).then(json => dispatch({ type: "LOAD_POSTS", payload: json }));
	// }, []);
	  

	return (
		<div className="App">
			<button type="button" onClick={() => dispatch({type: "RESET", payload: {}})}>Reset</button>
			<form onSubmit={handleSubmit} >
				<input type="text" onChange={ (e) => setPostTitle(e.target.value) } value={postTitle} required />
				<input type="submit" value="Submit Post" />
			</form>
			<ul>
				{posts.map(post => <li key={post.id}>{post.title}</li> )}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { posts: state.postsReducer.posts };
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
