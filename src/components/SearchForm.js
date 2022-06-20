import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
// import history from "../../utils/history";
// import Wrapper from "../../component/Login-Register/Wrapper";
// import RegisterForm from "../../component/Login-Register/Form-Components/Register-Form";
// import { getMessage } from "../../config";
// import ValueLoader from "../../utils/loader";
import noImage from '../assets/noImage.png'
import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";


import './styles.css'
import ExistingBusinessCard from "./ExistingBusinessCard";
import GoogleInfoCard from './GoogleInfoCard'
import SearchLocationInput from "../junked/FindBusiness";
import GoogleAutoFill from "./NewFindBusiness";
import MissingInfoPopUp from '../junked/MissingInfoPopUp'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import useStore from "../useStore";



import {
  callApi,
  addBusiness,
  updateBusiness,
  updateProfilePhoto
} from "../api/index";


const bucket = process.env.REACT_APP_BUCKET;

const _s3Client = new S3Client({
  accessKeyId: process.env.ACCESS_KEY, 
  secretAccessKey: process.env.SECRET_KEY,
})

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

const DoesNotExist = ({handleSubmit, onImageUploadChange, imagePreview}) => {


  return (
  <Box sx={{ border: '1px dashed grey' }}>
      <h3>business does not exist in db</h3>
    <div className="add-new-image-container-">
       <div className="image=uploader">
         <input type="file" id="file-input" name="ImageStyle" onChange={onImageUploadChange}/>
      </div>
      <div className="image-display">
       <img src={imagePreview} alt="" />
     </div>
    </div>

  <button type="submit" onClick={handleSubmit} maxWidth="183px" className="btnRegister"> Add It </button>
  </Box>
  )

}

const BusinessExists = ({handleSubmit, onImageUploadChange, imagePreview}) => {

  const [name, setName] = useState()
  const [address, setAddress] = useState()
  // const [imagePreview, setImagePreview] = useState()

  const existingBusinessInfo = useStore(state => state.existingBusinessInfo)

  useEffect(()=>{
    if (existingBusinessInfo){
      console.log("check existing Business " + existingBusinessInfo.company_name)
      setName(existingBusinessInfo.company_name)
      setAddress(existingBusinessInfo.address)
    }
  }, [existingBusinessInfo])


  return (
  <Box sx={{ border: '1px dashed grey' }}>
       <h3>business exist in db</h3>
       <h5>{name}</h5>
       <h5>{address}</h5>
      {existingBusinessInfo && <div className="image-display">
        <img src={existingBusinessInfo.default_image_url}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}/>
    </div> } 
    <div className="add-new-image-container-">
       <div className="image=uploader">
         <input type="file" id="file-input" name="ImageStyle" onChange={onImageUploadChange}/>
      </div>
      <div className="image-display">
       <img src={imagePreview} alt="" />
     </div>
    </div>

  <button type="submit" onClick={handleSubmit} maxWidth="183px" className="btnRegister"> Update </button>
  </Box>
  )

}


const SearchForm = () => {

    const [googleInfo, setGoogleInfo] = useState(null)
    const [businessExists, setBusinessExists] = useState(false)
    const [loc, setLoc] = useState()
    const [imagePreview, setImagePreview] = useState()
    const [existingImageUrl, setExistingImageUrl] = useState()

    const [imageFile, setImageFile] = useState()
    const [missingInfo, setMissingInfo] = useState()
    const [existingInfo, setExistingInfo] = useState(null)
    const [successMessage, setSuccessMessage] = useState()
    const [matchingBusinesses, setMatchingBusinesses] = useState([])

    const [showEdit, setShowEdit] = useState(false)
    const [showMissingInfo, setShowMissingInfo] = useState(false)

    const existingBusinessInfo = useStore(state => state.existingBusinessInfo)
    const setExistingBusinessInfo = useStore(state => state.setExistingBusinessInfo)    
    const setMatchingBusinessInfo = useStore(state => state.setMatchingBusinessInfo)   


    useEffect(()=> {
        if (googleInfo) {
          console.log("gggg")
            console.log("googleInfo" + JSON.stringify(googleInfo))
            checkBusinessExists(googleInfo.name)
        }

    }, [googleInfo])


    const checkBusinessExists = async (_name) => {
      let exists = false
      setBusinessExists(false)
      let matching = []
      setExistingInfo(null)
      const val = await callApi(_name);
      if (val.length !== 0) {
          console.log(" check business ")
          val.forEach(function(element) {
              let fullElementAddress = element.address
              let fullGoogleAddress = googleInfo.formatted_address
              let shortElementAddress = fullElementAddress.substring(0,5)
              let shortGoogleAddress = fullGoogleAddress.substring(0,5)
              matching.push(element)
              if (shortElementAddress === shortGoogleAddress){
                  console.log("Trueeee")
                  exists = true
                  setExistingInfo(element)
                  setExistingBusinessInfo(element)
                  setShowEdit(true)
                  setExistingImageUrl(element.default_image_url)
              } 
                
       
          })
      } 
      console.log("matching " + matching.length)
      setMatchingBusinesses(matching)
      setMatchingBusinessInfo(matching)
      setBusinessExists(exists)
      // return exists
    };
  

    function refreshPage() {
      window.location.reload(false);
    }


    const uploadUpdate = async (_imageUrl) => {
      if (!businessExists) {
        console.log("adding business")
        uploadBusinessPhoto(_imageUrl)
      } 
      
      if (existingInfo) {
        console.log("updating business")
        updateBusinessPhoto(_imageUrl)
      }
    }

    const uploadBusinessPhoto = async (_imageUrl) => {
      let result = await addBusiness(googleInfo, _imageUrl)
      if (result) {
          console.log(result)
          setSuccessMessage(googleInfo.name + " was added successfully")
          setGoogleInfo(null)
          setMissingInfo()
          setImagePreview()
      }
  }

  const updateBusinessPhoto = async (_imageUrl) => {
    console.log(_imageUrl)
    let result = await updateBusiness(existingInfo, _imageUrl, null)
    // let result = await updateProfilePhoto(existingInfo._id, _imageUrl)
    if (result) {
        console.log(result)
        setSuccessMessage(existingInfo.company_name + result["message"])
        setGoogleInfo(null)
        setMissingInfo()
        setImagePreview()
    }
  }

    const onImageUploadChange = (e) => {
        console.log("on image upload change" + (e.target.files))
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
    }

    const newUploadPhoto = async () => {
      const file = imageFile
      const newName = (googleInfo.name + googleInfo.place_id)
      const newNameClean = newName.replace(/\s+/g, '')
      const baseUrl = `https://${bucket}.s3.amazonaws.com/UserProfiles/${newNameClean}`;
      Storage.put(newNameClean, file, {
        resumable: true,
        contentType: file.type,
        customPrefix: {public:'UserProfiles/'},
        completeCallback: (event) => {
            console.log(`Successfully uploaded ${event.key}`);
            uploadUpdate(baseUrl)
        },
        progressCallback: (progress) => {
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
        errorCallback: (err) => {
            console.error('Unexpected error while uploading', err);
        }
})

    }



    const handleChange =(e) => {
        setGoogleInfo();
        setMissingInfo()
        setImagePreview()
        setSuccessMessage()
        setBusinessExists(false)
        setMatchingBusinesses([])
        setLoc(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageFile) {
            console.log(" no image file")
            setMissingInfo("image")
            setShowMissingInfo(true)
            return
        } if (!googleInfo) {
            console.log(" no business file")
            setMissingInfo("business")
            setShowMissingInfo(true)
            return
        }
        if (imageFile && googleInfo) {
          console.log("business info and media exist")
          // uploadPhoto()
          newUploadPhoto()
        }
      };





    return (<div className="basic-form">  

    <div className="input-block">
      <GoogleAutoFill setGoogleInfo={setGoogleInfo}/>
    {/* <SearchLocationInput className="search-input" id="location"  handleChange={handleChange} setGoogleInfo={setGoogleInfo} /> */}
      <button type="submit" onClick={refreshPage} maxWidth="183px" className="btnRegister"> refresh </button>
      
      <div style={{height: 120, width: 300, padding: 20}}>
        {googleInfo && <GoogleInfoCard {...googleInfo}/>} 
      </div>
      

    </div>
<span></span>
<ColoredLine color="red" />


{/* {existingInfo && <EditPopUp showEdit={businessExists} setShowEdit={setShowEdit} name={existingInfo.company_name} address={existingInfo.address} imageUrl={existingInfo.default_image_url}/>} */}

{successMessage && <h3>{successMessage}</h3>}


<span></span>
{/* {businessExists && <DoesNotExist handleSubmit={handleSubmit} onImageUploadChange={onImageUploadChange} imagePreview={imagePreview}/> } */}

<div className="center">
{/* {googleInfo && (existingInfo ? <><ExistingBusinessCard {...existingInfo} setShowEdit={setShowEdit}/> <BusinessExists handleSubmit={handleSubmit} onImageUploadChange={onImageUploadChange} imagePreview={imagePreview}/> </> : <DoesNotExist handleSubmit={handleSubmit} onImageUploadChange={onImageUploadChange} imagePreview={imagePreview}/>)} */}
{googleInfo && (existingBusinessInfo ? <BusinessExists handleSubmit={handleSubmit} onImageUploadChange={onImageUploadChange} imagePreview={imagePreview}/> : <DoesNotExist handleSubmit={handleSubmit} onImageUploadChange={onImageUploadChange} imagePreview={imagePreview}/>)}

</div>


{matchingBusinesses.length > 0 && <h3>  matching businessses</h3>}
<Stack>
{matchingBusinesses.length > 0 && <>{matchingBusinesses.map(function(matchingBus, index){
            return <ExistingBusinessCard name={matchingBus.company_name} address={matchingBus.address} id={matchingBus._id} key={matchingBus._id} default_image_url={matchingBus.default_image_url} index={index} />;
  })}
  </>
  }
</Stack>



</div>
)


}

export default SearchForm


{/* {existingInfo && <div className="image-display">
    <img src={existingInfo.default_image_url}  onError={(e) => (e.target.onerror = null, e.target.src = noImage)}/>
  </div>} */}


{/* <div>
  <h4> new image</h4>
  <div className="image=uploader">
       <input type="file" id="file-input" name="ImageStyle" onChange={onImageUploadChange}/>
  </div>
  <div className="image-display">
    <img src={imagePreview} alt="" />
  </div>
</div>


<button type="submit" onClick={handleSubmit} maxWidth="183px" className="btnRegister"> upload </button>
<span></span> */}