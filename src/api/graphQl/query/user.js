/*
@desc: getUser query
*/
const getUser = (userSub, value, limit = 15) => {
  const graphQl = {
    query: `
          query GetUser($userSub: String, $value: Int, $limit: Int){
            getUser: getUser(input: {userSub:$userSub}) {
              message
              success
              user {
                  name
                  email
                  userSub
                  phoneNumber
                  photo 
                  lockProfile
                  _id
                  favorites
                  listFollowed
              }
            }
            userCreateAndFollowList: getUserSubCreatedAndFollowedLists(input: {userSub: $userSub, value: $value, limit: $limit}) {
              message
              success
              totalLists
              list {
                _id
                isPublic
                ownerId
                subscribers {
                    name
                    photo
                    _id
                }
                name
                description
                type
                media {
                  image
                }
                createdAt
                updatedAt
              }
            }
          }`,
    variables: {
      userSub: userSub,
      value: value,
      limit: limit,
    },
  };
  return graphQl;
};
/*
@desc: getAllUser query
*/
const getAllUsers = () => {
  const graphQl = {
    query: `
        query GetAllUser{
          getAllUser {
            message
            success
            user {
                name
                email
                userSub
                phoneNumber
                photo 
                lockProfile
                _id
            }
          }
        }`,
  };
  return graphQl;
};

/*
@desc: getUserFavoritesBusiness query
*/
const getUserFavorites = ({ id, value, filters, longitude, latitude }) => {
  const graphQl = {
    query: `
          query GetFavorites($id: ID!, $value: Int, $filters:homeSearchFilterInput!,$latitude: Float!,$longitude: Float!){
            getFavorites(input: {id:$id, value:$value, filters:$filters, latitude:$latitude, longitude:$longitude}) {
              message
              success
              totalPlaces 
              data {
                _id
                data
                businessLocation {
                  type
                  coordinates
                }
                business {
                  _id
                  company_name
                  favorites
                  filter_tags
                  hours_format {
                    Start
                    End
                    StartDay
                    EndDay
                  }
                  default_image_url
                }
                taggedUsers {
                  _id
                  name
                }
                taggedLists {
                  _id
                  name
                }
                ownerId {
                  _id
                  name
                  photo
                }
                listId {
                  _id
                  name
                  media {
                    image
                  }
                }
                title
                description
                type
                eventSchedule {
                  start_time
                  end_time
                }
                user {
                  name
                  photo
                }
                likes
                media
                location {
                  type
                  coordinates
                }
                totalPosts {
                  totalPosts
                }
                totalComments{
                  totalCount
                }
                createdAt
              }
              }
          }`,
    variables: {
      id: id,
      value: value,
      filters: filters,
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude),
    },
  };
  return graphQl;
};

/*
@desc: GetMyFeedData query
*/
const GetMyFeedData = (obj) => {
  const graphQl = {
    query: `
          query GetMyFeedData($id: ID!, $value: Int, $filters: homeSearchFilterInput!,  $longitude: Float!, $latitude: Float!, $search: String){
            getMyFeedData (input: {id: $id, value:$value, filters:$filters,longitude:$longitude, latitude:$latitude, search: $search}){
              message
              success
              totalPlaces 
              data {
                _id
                data
                businessLocation {
                  type
                  coordinates
                }
                business {
                  _id
                  company_name
                  favorites
                  filter_tags
                  hours_format {
                    Start
                    End
                    StartDay
                    EndDay
                  }
                  default_image_url
                }
                taggedUsers {
                  _id
                  name
                }
                taggedLists {
                  _id
                  name
                }
                ownerId {
                  _id
                  name
                  photo
                }
                listId {
                  _id
                  name
                  media {
                    image
                  }
                }
                title
                description
                type
                eventSchedule {
                  start_time
                  end_time
                }
                recurring
                user {
                  name
                  photo
                }
                likes
                media
                location {
                  type
                  coordinates
                }
                totalPosts {
                  totalPosts
                }
                totalComments{
                  totalCount
                }
                createdAt
              }
              }
          }`,
    variables: {
      id: obj.id,
      value: obj.value,
      search: obj.search,
      filters: obj.filters,
      latitude: parseFloat(obj.latitude),
      longitude: parseFloat(obj.longitude),
    },
  };
  return graphQl;
};

/*
@desc: getUserProfileData query
*/
const GetUserProfileData = (id) => {
  const graphQl = {
    query: `
          query GetUserProfileData($id: ID!){
            getUserProfileData(input: {id:$id}) {
              success
              message
              findTotalPostByUser
              listCreatedByUser
              user {
                name
                photo
                listFollowed
              }
            }
          }`,
    variables: {
      id: id,
    },
  };
  return graphQl;
};
export {
  getUser,
  getAllUsers,
  getUserFavorites,
  GetMyFeedData,
  GetUserProfileData,
};
