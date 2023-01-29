import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import GlobalState from '../Components/GlobalState';
import {store} from '../Store/Store'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let [data, setdata] = React.useState({})
    let {state}=GlobalState()
    let navigate=useNavigate();
    
    let akbar=useSelector((stor)=>{
return stor;
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
console.log(data)
        let url = 'https://fakse-store-api.herokuapp.com/api/v1/auth/login';
        axios.post(url, data).then((res) => {
            console.log(res.data)
            alert('Mubarik Ho');
            sessionStorage.setItem('token',res.data.access_token)
            store.dispatch({type:'login',val:true})
            navigate('/')
            
        })
    }


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setdata({ ...data, [name]: value });
    }




    return (

        <Container maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        type='email'
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <div  >

                        <Link sx={{ display: 'flex', justifyContent: 'center' }} href="Signup" variant="body2" >
                            {"Don't have an account? Sign Up"}
                        </Link>

                    </div>
                </Box>
            </Box>
        </Container>

    );
}