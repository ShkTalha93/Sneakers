import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, IconButton, TextField } from '@mui/material'
import { useSlector, useDispatch } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";
import { useSelector } from 'react-redux';
import { store } from '../Store/Store'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ProductDetail = () => {

    let navigate = useNavigate();
    const urlParams = useParams();
    const productId = urlParams.id;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    let [state, setState] = useState(1);


    const url = `https://fakse-store-api.herokuapp.com/api/v1/products/${productId}`

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setProduct(res.data)

            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const Loading = () => {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Loading.....</h1>
            </>
        )
    }

    let ShowProduct = () => {
        let akbar = useSelector((stor) => {
            return stor.loginUser;
        })


        function AddToCart() {

            if (!akbar) { alert('Please Login first...');navigate('/Login') }
            else {
                store.dispatch({
                    type: 'cart', val: {
                        id:Math.random(),
                        title: product.title,
                        price: product.price,
                        quantity:state,
                        totalprice:state*product.price,

                    }
                })
            }
        }

        return (
            <>

                <div className="col-md-6 " align="Center">
                    <h1> {product.title}</h1>

                </div  >
                <div style={{ display: 'flex' }} >
                    <div className="col-md-6" style={{ padding: "10px", justifyContent: 'space between' }}>
                        <img src={product.category.image} alt={product.title}
                            height="400px" width="600px">
                        </img>
                        <img src={product.images[0]} alt={product.title}
                            height="200px" width="180px" style={{ padding: '0 10px 0 0' }}

                        >
                        </img>
                        <img src={product.images[1]} alt={product.title}
                            height="200px" width="180px" style={{ padding: ' 0 20px' }}

                        >
                        </img>
                        <img src={product.images[2]} alt={product.title}
                            height="200px" width="180px" style={{ paddingLeft: '10px' }}>
                        </img>

                    </div  >


                    <div className="col-md-6" style={{ padding: "30px" }} >
                        <h2 className="text-uppercase text-black-50">
                            Product Category: {product.category.name}
                        </h2>


                        <h2 className="display-5" style={{ marginleft: "13px" }}>
                            Product Detail: ${product.description}
                        </h2>
                        <h3 >
                            Price:${product.price}
                        </h3>


                    </div>

                </div>
                <div style={{display:'flex',justifyContent:'center',margin:'20px auto',alignItems:'center'}}>
                    <AddIcon onClick={(()=>{setState(state+=1)})} />
                    <TextField
          id="outlined-number"
          label="Number"
                    value={state}/>
                    <RemoveIcon onClick={(()=>{if(state!=1)setState(state-=1)})} />
                </div>
                <div style={{ textAlign: 'center' }}>


                    <Button variant="contained" sx={{ backgroundColor: 'secondary.main' }}
                        onClick={(()=>{AddToCart()})}>ADD to Cart
                        <IconButton sx={{ color: 'white' }}>
                            <ShoppingCartIcon />

                        </IconButton>
                    </Button>

                </div>
            </>
        )
    }
    return (
        <>

            {product.id ? <ShowProduct /> : <Loading />}


        </>
    )
}
export default ProductDetail