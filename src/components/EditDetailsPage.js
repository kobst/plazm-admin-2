import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
// import history from "../../utils/history";
// import Wrapper from "../../component/Login-Register/Wrapper";
// import RegisterForm from "../../component/Login-Register/Form-Components/Register-Form";
// import { getMessage } from "../../config";
// import ValueLoader from "../../utils/loader";
import noImage from '../assets/noImage.png'
import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";
import { Formik } from 'formik'

import './styles.css'

import useStore from "../useStore";

// import { WithContext as ReactTags } from 'react-tag-input';

//https://www.npmjs.com/package/react-tag-input


import {
    callApi,
    addBusiness,
    updateBusiness,
    updateProfilePhoto
  } from "../api/index";
import { Button } from "@mui/material";
  

const bucket = process.env.REACT_APP_BUCKET;

const EditDetailsPage = (businessInfo) => {

    const existingBusinessInfo = useStore(state => state.existingBusinessInfo)

    const [values, setValues] = useState(existingBusinessInfo)
    const [originalValues, setOriginalValues] = useState(existingBusinessInfo)
    const [tags, setTags] = useState([])
    const [editable, setEditable] = useState(false)
    const [imagePreview, setImagePreview] = useState()
    const [imageFile, setImageFile] = useState()
    const [changedImage, setChangedImage] = useState(false)


  
    const updateBusinessPhoto = async (_imageUrl) => {
    
      let result = await updateBusiness(values, _imageUrl, null)
      // let result = await updateProfilePhoto(existingInfo._id, _imageUrl)
      if (result) {
          console.log(result)
        //   setSuccessMessage(values.company_name + result["message"])
          setImagePreview()
      }
    }
  
      const onImageUploadChange = (e) => {
          console.log("on image upload change" + (e.target.files))
          setChangedImage(true)
          setImagePreview(URL.createObjectURL(e.target.files[0]))
          setImageFile(e.target.files[0])
      }
  
      const newUploadPhoto = async () => {
        const file = imageFile
        const newName = (values.company_name)
        const newNameClean = newName.replace(/\s+/g, '')
        const baseUrl = `https://${bucket}.s3.amazonaws.com/UserProfiles/${newNameClean}`;
        Storage.put(newNameClean, file, {
          resumable: true,
          contentType: file.type,
          customPrefix: {public:'UserProfiles/'},
          completeCallback: (event) => {
              console.log(`Successfully uploaded ${event.key}`);
            //   uploadUpdate(baseUrl)
              updateBusinessPhoto(baseUrl)
  
          },
          progressCallback: (progress) => {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
          errorCallback: (err) => {
              console.error('Unexpected error while uploading', err);
          }
  })
  
      }
  


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values.default_image_url)
        if (changedImage) {
            newUploadPhoto()
            console.log("no change")
        } else {
            console.log("changed")
            let result = await updateBusiness(values, values.default_image_url, null)
            // let result = await updateProfilePhoto(existingInfo._id, _imageUrl)
            if (result) {
                console.log(result)
              //   setSuccessMessage(values.company_name + result["message"])
                setImagePreview()
            }
        }

      };



    useEffect(()=> {
        console.log(businessInfo)
        let _tags = existingBusinessInfo.filter_tags
        let array = []
        let length = _tags.length
        if (_tags && length > 0) {
            _tags.forEach(tg=> {
                console.log(tg) 
                array.push(tg)
            })
        }
        setTags(array)
        console.log(array)
        console.log(_tags)
        // setValues(existingBusinessInfo)
    }, [])



const handleEdit = () => {
    console.log("edit")
    setEditable(true)
}

const handleRevert = () => {
    console.log("revert")
    setValues(originalValues)
}
    return (
        <div>
            <h2>Details</h2>
     
        <Button onClick={handleEdit}> EDIT </Button>
        <Button onClick={handleRevert}> REVERT </Button>

    <div className="image-display">
        <img src={values.default_image_url}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}/>
    </div> 
    <div className="add-new-image-container-">
       <div className="image=uploader">
         <input type="file" id="file-input" name="ImageStyle" onChange={onImageUploadChange}/>
      </div>
      <div className="image-display">
       <img src={imagePreview} alt="" />
     </div>
    </div>
        {/* <button type="submit" onClick={handleSubmitPhoto} maxWidth="183px" className="btnRegister"> Update </button> */}
        <br></br>
        <form onSubmit={handleSubmit}>
        <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={values.company_name}
            onChange={handleChange}
            disabled={editable}
          />
          <button>Edit</button>
          <br />
          <h3>Address</h3>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <h3>homepage</h3>
          <input
            type="text"
            name="website"
            value={values.web_site}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <h3>telephone</h3>
          <input
            type="text"
            name="telephone"
            value={values.telephone}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <h3>Rating</h3>
          <input
            type="text"
            name="rating"
            value={values.rating}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <h3>Type</h3>
          <input
            type="text"
            name="type"
            value={values.type}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <h3>GenType</h3>
          <input
            type="text"
            name="genType"
            value={values.genType}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <h3>Price Level</h3>
          <input
            type="text"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          <button>Edit</button>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

    )
}

export default EditDetailsPage