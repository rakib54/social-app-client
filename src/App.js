import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import facebookLite from '../src/images/facebook.png'
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './Style.js'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { getPosts } from './Action/Posts'

function App() {

  const classes = useStyles()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">FaceBook Lite</Typography>
        <img className={classes.image} src={facebookLite} alt="facebookLite" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
