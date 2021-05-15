import React from 'react';
import Post from '../Post/Post';
import useStyles from './Styles.js'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles()

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> :
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post.id} items xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>

    );
};

export default Posts;