import React, { useState } from 'react';
import Autocomplete from "react-google-autocomplete";



const GoogleAutoFill = ({setGoogleInfo}) => {

    const [value, setValue] = useState(null);
    const handleChange = (val) => {
        console.log(val)
        setGoogleInfo(val)
    

    }
  
    return (
      <div>
    <Autocomplete
        style={{ width: "250px", padding: "20px 0" }}
        apiKey={process.env.REACT_APP_GOOGLE_API_STRING}
        onPlaceSelected={(place) => {
             console.log(place);
             setGoogleInfo(place)
        }}
        options={{
            types: [],
            fields: ["name", "formatted_address", "international_phone_number", "place_id", "url", "rating", "website", "geometry", "business_status"]
        }}
/>;
      </div>
    );

}



export default GoogleAutoFill

 