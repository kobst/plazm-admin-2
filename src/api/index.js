export const callPlace = async (userSub) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/place-fetch/${userSub}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const body = await response.text();
    const val = JSON.parse(body);
    return val;
  };

  export const callApi = async (name) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/place/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const body = await response.text();
    return JSON.parse(body);
  };




  export const addBusiness = async (businessInfo, baseUrl) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: businessInfo.business_status,
        userAddress: businessInfo.formatted_address,
        telephone: businessInfo.international_phone_number,
        companyName: businessInfo.name,
        placeId: businessInfo.place_id,
        mapLink: businessInfo.url,
        rating: businessInfo.rating,
        website: businessInfo.website,
        latitude: businessInfo.geometry.location.lat(),
        longitude: businessInfo.geometry.location.lng(),
        file: baseUrl
      }),
    });
    const body = await response.text();
    return body;
  };

export const updateProfilePhoto = async (_id, baseUrl) => {
    console.log("update profile photo")
    const response = await fetch(`${process.env.REACT_APP_API_LOCAL}/api/profilePhoto`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
        file: baseUrl
      }),
    });
    const body = await response.text();
    return body;
  }


  export const updateBusiness = async (value, baseUrl, userSub) => {
    let _twitter
    let _instagram
    let _facebook
    let linkedin
    
    if (value.handles) {
      if (value.handles.twitter){
        _twitter = value.handles.twitter
      }
      if (value.handles.instagram){
        _instagram = value.handles.instagram
      }
      if (value.handles.facebook) {
        _facebook = value.handles.facebook
      }
    }
    console.log(value)
    console.log(value.genType)

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/place`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: value._id,
        status: value.status,
        userAddress: value.address,
        telephone: value.telephone,
        companyName: value.company_name,
        placeId: value.place_id,
        mapLink: value.url,
        type: value.type,
        rating: value.rating,
        website: value.web_site,
        userSub: userSub,
        latitude: value.latitude,
        longitude: value.longitude,
        city: value.city,
        postalCode: value.postalCode,
        stateProvince: value.stateProvince,
        twitter: _twitter,
        instagram: _instagram,
        facebook: _facebook,
        linkedin: linkedin,
        filterTags: value.filter_tags,
        file: baseUrl, 
        price: value.price,
        genType: value.genType,
        openingHours: value.hours,
      }),
    });
    const body = await response.text();
    return body;
  };


