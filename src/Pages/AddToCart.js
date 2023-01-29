import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {store} from '../Store/Store'
function AddToCart() {
let [state,setstate]=useState([]);
useEffect(()=>{
  if(localStorage.getItem('Cart'))
  {
    setstate(JSON.parse(localStorage.getItem('Cart')))
  }
},[])
  function deletedata(id)
  {
    setstate(state=state.filter((f)=>f.id!==id))
    localStorage.setItem('Cart',JSON.stringify(state))
  }
  return (
   <>



    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Totol Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {
          state.map((val)=>{
            return <TableRow>
              <TableCell >{val.title}</TableCell>
              <TableCell align="right">{val.price}</TableCell>
              <TableCell align="right">{val.quantity}</TableCell>
              <TableCell align="right">{val.totalprice}</TableCell>
              <TableCell align="right"><IconButton onClick={(()=>{deletedata(val.id)})}><CloseIcon/></IconButton></TableCell>
            </TableRow>
          })
         }
        </TableBody>
      </Table>
    </TableContainer>

   </>
  )
}

export default AddToCart