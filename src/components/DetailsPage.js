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



import {
  callApi,
  addBusiness,
  updateBusiness,
  updateProfilePhoto
} from "../api/index";


const bucket = process.env.REACT_APP_BUCKET;


const DetailsPage = () => {

    const existingBusinessInfo = useStore(state => state.existingBusinessInfo)

    const [values, setValues] = useState()
    const [tags, setTags] = useState([])

    useEffect(()=> {
        let _tags = existingBusinessInfo.filter_tags
        
        setValues(existingBusinessInfo)
    }, [])

//     const uploadUpdate = async (_imageUrl) => {
//         if (!businessExists) {
//           console.log("adding business")
//           uploadBusinessPhoto(_imageUrl)
//         } 
        
//         if (existingInfo) {
//           console.log("updating business")
//           updateBusinessPhoto(_imageUrl)
//         }
//       }
  
//       const uploadBusinessPhoto = async (_imageUrl) => {
//         let result = await addBusiness(googleInfo, _imageUrl)
//         if (result) {
//             console.log(result)
//             setSuccessMessage(googleInfo.name + " was added successfully")
//             setGoogleInfo(null)
//             setMissingInfo()
//             setImagePreview()
//         }
//     }
  
//     const updateBusinessPhoto = async (_imageUrl) => {
//       console.log(_imageUrl)
//       let result = await updateBusiness(existingInfo, _imageUrl, null)
//       // let result = await updateProfilePhoto(existingInfo._id, _imageUrl)
//       if (result) {
//           console.log(result)
//           setSuccessMessage(existingInfo.company_name + result["message"])
//           setGoogleInfo(null)
//           setMissingInfo()
//           setImagePreview()
//       }
//     }
  
//       const onImageUploadChange = (e) => {
//           console.log("on image upload change" + (e.target.files))
//           setImagePreview(URL.createObjectURL(e.target.files[0]))
//           setImageFile(e.target.files[0])
//       }
  
//       const newUploadPhoto = async () => {
//         const file = imageFile
//         const newName = (googleInfo.name + googleInfo.place_id)
//         const newNameClean = newName.replace(/\s+/g, '')
//         const baseUrl = `https://${bucket}.s3.amazonaws.com/UserProfiles/${newNameClean}`;
//         Storage.put(newNameClean, file, {
//           resumable: true,
//           contentType: file.type,
//           customPrefix: {public:'UserProfiles/'},
//           completeCallback: (event) => {
//               console.log(`Successfully uploaded ${event.key}`);
//               uploadUpdate(baseUrl)
//           },
//           progressCallback: (progress) => {
//               console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
//           },
//           errorCallback: (err) => {
//               console.error('Unexpected error while uploading', err);
//           }
//   })
  
//       }
  
  
//       const handleSubmit = async (e) => {
//           e.preventDefault();
//           if (!imageFile) {
//               console.log(" no image file")
//               setMissingInfo("image")
//               setShowMissingInfo(true)
//               return
//           } if (!googleInfo) {
//               console.log(" no business file")
//               setMissingInfo("business")
//               setShowMissingInfo(true)
//               return
//           }
//           if (imageFile && googleInfo) {
//             console.log("business info and media exist")
//             // uploadPhoto()
//             newUploadPhoto()
//           }
//         };
  
  
const handleSubmit = async () => {



}


const handleChange = async () => {

}

const handleBlur = async () => {
    
}



    return(

            
        <div>
            <h3>Details</h3>
            <h2>{existingBusinessInfo.company_name}</h2>
            <h2>{existingBusinessInfo.address}</h2>
 
     <Formik
       initialValues={{ 
           company_name: existingBusinessInfo.company_name, 
           address: existingBusinessInfo.address,
           web_site: existingBusinessInfo.web_site,
           telephone: existingBusinessInfo.telephone,
           hours: existingBusinessInfo.hours,
           filter_tags: '',
           price: '',
           rating: '',
           type: '',
           genType: ''
        }}
        onSubmit={async (values) => {
                // handle submit
          }}
     >

         <form onSubmit={handleSubmit}>
            <input
             name="company_name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.company_name}
           />
            <input
             name="web_site"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.web_site}
           />
            <input
             name="address"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.address}
           />
           <input
             name="telephone"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.telephone}
           />
           
           <input
             name="rating"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.rating}
           />
           <input
             name="type"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.type}
           />
           
           <input
             name="genType"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.genType}
           />
            <input
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={existingBusinessInfo.price}
           />
           {/* {errors.password && touched.password && errors.password} */}
           <button type="submit">
             Submit
           </button>
         </form>
     </Formik>
   </div>
  

    )
}

export default DetailsPage