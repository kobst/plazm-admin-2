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


const StyledItem= styled.div`
height: 200px;
width: 90vw;
border: 1px solid;
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 10px;
font-size: 16px;
background: rgb(255, 255, 255);
box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
`;

const PhotoDiv = styled.div`
    grid-row: 1 / span 2;
    height: 90px;
    width: auto;
`

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

const ExistingBusinessRow = (businessInfo) => {

    const [imagePreview, setImagePreview] = useState()
    const [imageFile, setImageFile] = useState()

    const onImageUploadChange = (e) => {
        console.log("on image upload change" + (e.target.files))
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
    }

    return (
      <StyledItem>
        <div className="header"> {businessInfo.company_name} </div>
        <div className="content">{businessInfo.address}</div>

        <PhotoDiv>
            <div className="image=uploader">
                <input type="file" id="file-input" name="ImageStyle" onChange={onImageUploadChange}/>
            </div>
             <div style={styles.media}>
                <img src={imagePreview} alt="" />
            </div>
        </PhotoDiv>

        <PhotoDiv>
            <div style={styles.media}>
                <img src={businessInfo.default_image_url}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}/>
            </div>
        </PhotoDiv>
      </StyledItem>
      );

}

export default ExistingBusinessRow