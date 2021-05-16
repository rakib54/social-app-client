import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'
import facebookLite from '../../images/facebook.png'

import useStyles from './Styles'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const dispatch = useDispatch()
    const history = useHistory()
    const location  = useLocation()

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT', })

        history.push('/auth')
        setUser(null)
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">FaceBook Lite</Typography>
                <img className={classes.image} src={facebookLite} alt="facebookLite" height="60" />
            </div>
            <Toolbar>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
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