import React from 'react';
import Post from '../Post/Post';
import useStyles from './Styles.js'
import {useSelector} from 'react-redux'


const Posts = () => {
    const posts = useSelector((state) =>state.posts);
    const classes = useStyles()

    console.log(posts);
    return (
        <div>
            <h1>Hello</h1>
            <Post></Post>
            <Post></Post>
        </div>
    );
};

export default Posts;