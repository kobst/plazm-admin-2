import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './styles.css'
import noImage from '../assets/noImage.png'
import useStore from "../useStore";


import { useNavigate } from "react-router-dom";



const styles = theme => ({
    Card: {
      width: 345,
      backgroundColor: 'purple',
      margin: 'auto'
    },
    Media: {
      height: 150,
      width: 150,
      objectFit: 'cover'
    }
  });

const ExistingBusinessCard = ({name, address, id, default_image_url, index} ) => {

    const setExistingBusinessInfo = useStore(state => state.setExistingBusinessInfo)    
    const matchingBusinessInfo = useStore(state => state.matchingBusinessInfo)

    let navigate = useNavigate()
    
    const handleSelect = () => {
      setExistingBusinessInfo(matchingBusinessInfo[index])
      navigate(`/place/${id}`)

    }
    const setNewBusiness =() => {
        setExistingBusinessInfo(matchingBusinessInfo[index])
    }

    return (
        <Card sx={{
            width: 300,
            height: 500,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
             <CardActions>
             <Button size="small" variant="secondary" onClick={handleSelect}>Edit</Button>

            {/* <Button size="small" variant="secondary" onClick={setNewBusiness}>Edit</Button> */}
            {/* <Button size="small" variant="secondary">Edit</Button> */}
            

          {/* <Link to={`/place/${id}`}>Go TO DETAIL</Link> */}
          </CardActions>
          <CardMedia
            component="img"
            image={default_image_url}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}
            alt="existing"
            style={styles.media}
          />
          {/* <img src={businessInfo.default_image_url}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}/> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
            {businessInfo.type}
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
            {address}
            </Typography>
 
          </CardContent>

        </Card>
      );

}

export default ExistingBusinessCard