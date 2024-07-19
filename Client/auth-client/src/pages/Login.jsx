import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import './Login.css'
function Login() {
    const [users, setUsers] = useState([])
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
            console.log(res.data)
        })
    }


    const handleLogin =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios
            .post('http://localhost:3001/login', { username, password })
            const token = response.data.token
            alert('Login successful')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/account')
            window.location.reload();
            localStorage.setItem('token', token)
            localStorage.setItem('username', "vishal")
        } catch (error) {
            console.log('Login Error', error)
        }
    }


  return (
    <div className='bunny' style={{ display: 'flex', height: '100vh', backgroundColor: 'rgb(218,219,241)' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ flex: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Welcome to our App
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6" align="center">
            Shankar Dhada MBBS Uha Uha
        </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{ flex: 1 }}>
        <Card style={{ minWidth: 300, padding: 16 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="Username"
                fullWidth
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                className="blackTextButton"
                style={{ marginTop: 16, color: 'black' }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Login