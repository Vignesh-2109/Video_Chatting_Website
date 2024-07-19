import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, TextField, Button, Grid, Typography, Divider } from '@mui/material';
import './SignUp.css';

function SignUp() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:3001/register')
        .then((res) => {
            // console.log(res.data)
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/register', { email, username, password })
        .then(() => {
            alert('Registration Successful')
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/login')
        })
        .catch((error) => {
            console.log('Unable to register user')
        })

    }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
    <Card className="signup-card">
        <CardContent className="signup-card-content">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className="signup-left">
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            Welcome to our platform!
                        </Typography>
                        <p>Some introductory text or image goes here.</p>
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={5}>
                    <div className="signup-right">
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                className="input-field"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                className="input-field"
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                className="input-field"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                className="submit-button"
                                fullWidth
                            >
                                Sign Up
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
</Grid>
  )
}

export default SignUp
