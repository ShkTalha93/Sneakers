import * as React from 'react';
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


export default function Signup() {
    let [state,setstate]=React.useState({})
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)

axios.post('https://fakse-store-api.herokuapp.com/api/v1/users/is-available',{email:state.email}).then((res)=>{
    if(res.data.isAvailable===true)
    {
        alert('User with this email already exist\nTry with another email')
    }
    else
    {
        let url='https://fakse-store-api.herokuapp.com/api/v1/users';
        axios.post(url,state).then((res)=>{
            alert('Mubarik Ho')
        })
    }
})
    };


    const handleChange=(e)=>
    {
        let name=e.target.name
        let value= e.target.value
        setstate({...state,[name]:value});
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
                <Typography  variant="h5">
                    Sign up
                </Typography>
                <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                autoComplete="family-name"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            type='email'
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handleChange}
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="role"
                                label="role"
                                type="role"
                                onChange={handleChange}
                                id="role"
                                autoComplete="new-role"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="avatar"
                                label="avatar"
                                type="avatar"
                                value={'https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg'}
                                onClick={handleChange}
                                id="avatar"
                                hidden
                            />
                        </Grid>
                        
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="Login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    );
}