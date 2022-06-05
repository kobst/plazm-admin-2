import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import noImage from '../assets/noImage.png'

import {
    callApi,
    addBusiness,
    updateBusiness,
  } from "../api/index";

const EditPopUp = ({showEdit, setShowEdit, name, address, imageUrl, }) => {
    
    const [imagePreview, setImagePreview] = useState()
    const [existingImageUrl, setExistingImageUrl] = useState()

    const [imageFile, setImageFile] = useState()
    



    const saveData = async () => {

    }

    const onImageUploadChange = (e) => {
        console.log("on image upload change" + (e.target.files))
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
    }

    const updateBusinessPhoto = async (_imageUrl) => {
        // let result = await updateBusiness(existingInfo, _imageUrl, null)
        // if (result) {
        //     console.log(result)
        //     console.log(name + " was updated successfully")
        // }
      }


    return (<Popup
    open={showEdit}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={setShowEdit(false)}> &times; </button>
        <div className="header"> {name} </div>
        <div className="content">{address}</div>
        <div className="image=uploader">
            <input type="file" id="file-input" name="ImageStyle" onChange={onImageUploadChange}/>
        </div>
        <div className="image-display">
            <img src={imagePreview} alt="" />
        </div>
        <div className="image-display">
             <img src={imageUrl}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}/>
        </div>
        <div className="actions">
        <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            upload
          </button>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
              setShowEdit(false)
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);
        }

export default EditPopUp