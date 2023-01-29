import * as React from 'react';
import Card from '@mui/material/Card';
import {Link,useNavigate} from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';

export default function ActionAreaCard({ cardData }) {
    let navigate = useNavigate();
    
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardData.category.image}
                    alt="Loading"
                />
                <CardContent>
                    <Typography variant="body1" component="div">
                        {cardData.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 'bold',textAlign:'center' }} >
                        {`$${cardData.price}`}

                    </Typography>
                </CardContent>
                <CardActions>
                     {/* <Link to={`/product/${cardData.id}`}>Product Details</Link> */}
                     <Button variant='contained' sx={{ backgroundColor: 'secondary.main', margin: 'auto' }} onClick={()=>navigate(`/productdetail/${cardData.id}`)}>
                        View Detail
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
