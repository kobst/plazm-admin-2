import React, { useState } from 'react';
import Autocomplete from "react-google-autocomplete";



const GoogleAutoFill = ({setGoogleInfo}) => {

  
    return (
      <div>
    <Autocomplete
        style={{ width: "250px", padding: "20px 0" }}
        onPlaceSelected={(place) => {
             console.log(place);
             setGoogleInfo(place)
        }}
        options={{
            types: [],
            componentRestrictions: { country: "USA" },
            fields: ["name", "formatted_address", "international_phone_number", "place_id", "url", "rating", "website", "geometry", "business_status"]
        }}
/>;
      </div>
    );

}



export default GoogleAutoFill

 