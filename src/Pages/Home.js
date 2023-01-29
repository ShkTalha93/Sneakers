import { SettingsCellOutlined } from '@mui/icons-material';
import { Grid, Pagination } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ActionAreaCard from './Card';
// import Card from './Card';


export default function Home() {
    let [state,setstate]=useState([]);
    let [count,setcount]=useState(0);
    let url=`https://fakse-store-api.herokuapp.com/api/v1/products?limit=20&offset=${(count*20)}`;
    useEffect(()=>{
        axios.get(url).then((res)=>
       { 
        setstate(res.data)
    
       })
    
    } ,[count]);
    if (state==undefined|| state==[]){
        return <h1></h1>
    }
    return (
    <>
    
    <Grid container spacing={6} sx={{padding:'0 5%'}}>
    { state.map(obj=>
        <Grid item lg={3}  >
            <ActionAreaCard cardData={obj}/>
        </Grid>
     
    )
    }
    </Grid>
    <Pagination sx={{margin:'auto 35%'}}  onChange={((e,v)=>setcount(v-1))} count={10} variant="outlined" shape="rounded" />
  
    </>
  )
}
