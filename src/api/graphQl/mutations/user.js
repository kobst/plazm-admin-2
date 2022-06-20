/*
@desc: add place graphQL mutation
@params: name, email, phoneNumber, userSub
*/
const AddUser = (values) => {
  const graphQl = {
    query: `
          mutation AddUser($name:String, $email:String, $phoneNumber:String, $userSub:String){
            addUser(input: { name:$name, email:$email, phoneNumber:$phoneNumber, userSub:$userSub}) {
              message
              success
              user {
                  name
                  email
                  phoneNumber
                  userSub
              }
            }
          }`,
    variables: {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      userSub: values.userSub,
    },
  };
  return graphQl;
};

/*
@desc: update user profile graphQL mutation
@params: name, email, phoneNumber, userSub
*/
const updateUserProfile = (values) => {
  const graphQl = {
    query: `
          mutation UpdateProfile($name:String, $email:String, $phoneNumber:String, $userSub:String, $photo:String, $lockProfile:Int){
            updateProfile(input: { name:$name, email:$email, phoneNumber:$phoneNumber, userSub:$userSub, photo:$photo, lockProfile:$lockProfile}) {
              message
              success
              user {
                  name
                  email
                  phoneNumber
                  userSub
                  lockProfile
                  photo 
              }
            }
          }`,
    variables: {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      userSub: values.userSub,
      photo: values.photo? values.photo:"",
      lockProfile: values.lockProfile
    },
  };
  return graphQl;
};

/*
@desc: update user profile graphQL mutation
@params: name, email, phoneNumber, userSub
*/
const getSelectedUser = (search) => {
  const graphQl = {
    query: `
          mutation GetSelectedUser($search:String){
            getSelectedUser(input: { search: $search}) {
              message
              success
              user {
                  _id
                  name
                  email
                  phoneNumber
                  userSub
                  lockProfile
                  photo 
              }
            }
          }`,
    variables: {
      search: search
    },
  };
  return graphQl;
};

/*
@desc: to add favorites to a business
@params: businessId, userId
*/
const addFavoriteBusiness = (obj) => {
  const graphQl = {
    query: `
          mutation AddFavoriteBusiness($userId:ID!, $businessId:ID!){
            addFavoriteBusiness(input: { userId: $userId, businessId: $businessId }) {
              message
              success
              user {
                userId
                businessId
              }
            }
          }`,
    variables: {
      userId: obj.userId,
      businessId: obj.businessId
    },
  };
  return graphQl;
};


/*
@desc: to remove favorites to a business
@params: businessId, userId
*/
const removeFavoriteBusiness = (obj) => {
  const graphQl = {
    query: `
          mutation RemoveFavoriteBusiness($userId:ID!, $businessId:ID!){
            removeFavoriteBusiness(input: { userId: $userId, businessId: $businessId }) {
              message
              success
              user {
                userId
                businessId
              }
            }
          }`,
    variables: {
      userId: obj.userId,
      businessId: obj.businessId
    },
  };
  return graphQl;
};
export { AddUser, updateUserProfile, getSelectedUser, addFavoriteBusiness, removeFavoriteBusiness };
