import React from 'react';
import { Avatar, Button, Paper, Container, Typography, Grid } from '@material-ui/core'
import useStyles from './Style'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Input from './Input'
import { useState } from 'react';

import GoogleLogin from 'react-google-login';
import Icon from './Icon'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Auth = () => {
    
    const [isSignUp, setIsSignUp] = useState(true)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword((showPass) => !showPass)

    const switchMode = () => {
        setIsSignUp((toggle) => !toggle)
        handleShowPassword(false)
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId
        console.log(res);
        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            history.push('/')
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () => {

    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOpenIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                    <Input name="firstName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} />}
                    </Grid>


                    <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="527945956094-ubr9f3vb1c4u6k62v98qgu0f34ivcsg0.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Sign in with Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"

                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an Account? Sign In' : "Don't have an Account? sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;