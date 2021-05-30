import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'
import facebookLite from '../../images/facebook.png'

import useStyles from './Styles'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user);

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT', })

        history.push('/auth')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = jwtDecode(token);
      
        if (decodedToken.exp * 1000 < new Date().getTime()) handleLogOut();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

  

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                {
                    user && <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">FaceBook Lite</Typography>

                }
                <img className={classes.image} src={facebookLite} alt="facebookLite" height="60" />
            </div>
            <Toolbar>
                {
                    user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6" >{user?.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={handleLogOut}>Logout</Button>
                        </div>
                    ) :
                        (
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )
                }
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;