import React, { useState, useEffect } from "react";
import styled from 'styled-components'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './styles.css'
import noImage from '../assets/noImage.png'



const styles = theme => ({
    Card: {
      width: 345,
      backgroundColor: 'purple',
      margin: 'auto'
    },
    Media: {
      height: 345,
      width: 345,
      objectFit: 'cover'
    }
  });


  const StyledCard= styled(Card)`
    height: 120px;
    width: 300px;
    border: 1px solid;
    font-size: 16px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
`;

const GoogleInfoCard = (businessInfo) => {

    return (
        <StyledCard>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {businessInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {businessInfo.formatted_address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {businessInfo.website}
            </Typography>
            {/* {businessInfo.types && businessInfo.types.map(function(name, index){
                    return <><br></br><Typography key={ index } variant="overline" color="text.secondary">{name}</Typography></>;
                  })} */}
          </CardContent>
        </StyledCard>
      );

}

export default GoogleInfoCard