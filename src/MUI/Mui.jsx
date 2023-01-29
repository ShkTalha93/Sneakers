import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddCommentIcon from '@mui/icons-material/AddComment';

export default function Mui() {
  return (
    <>
    <AppBar sx={{display:'flex' ,justify:'center'}}>
      <Toolbar>
      <IconButton>
<AddCommentIcon />
      </IconButton>
    <Typography variant='h6'>
      Practice
    </Typography>
      </Toolbar>
      </AppBar>  
     
       
      
    </>
  )
}
