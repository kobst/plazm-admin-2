/*
@desc: getAllLists query
*/
const getAllLists = () => {
  const graphQl = {
    query: `
            query GetLists{
                getLists {
                message
                success
                list {
                    _id
                    name
                    description
                    type
                    photo
                    account_id
                    items
                    createdAt
                    updatedAt
                  }
                }
            }`,
  };
  return graphQl;
};

/*
@desc: getUserLists query
*/
const getUserLists = (ownerId) => {
  const graphQl = {
    query: `
          query GetUserLists($id: ID!){
            getUserLists(input: {id: $id}) {
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
                    image_type
                  }
                  createdAt
                  updatedAt
                }
              }
          }`,
    variables: {
      id: ownerId,
    },
  };
  return graphQl;
};

/*
@desc: getUserSubscribedLists query
*/
const getUserSubscribedLists = (obj) => {
  const graphQl = {
    query: `
          query GetUserSubscribedLists($id: ID!, $value: Int, $limit: Int){
            getUserSubscribedLists (input: {id: $id, value:$value, limit: $limit}){
              message
              success
              totalLists
              list {
                  _id
                  isPublic
                  ownerId
                  subscribers {
                    _id
                    name
                    photo
                    
                  }
                  name
                  description
                  type
                  media {
                    image
                    image_type
                  }
                  createdAt
                  updatedAt
                }
              }
          }`,
    variables: {
      id: obj.id,
      value: obj.value,
      limit: obj?.limit || 15,
    },
  };
  return graphQl;
};


/*
@desc: getUserSubscribedLists query
*/


const filterUserLists = (obj) => {
  const graphQl = {
    query: `
          query FetchUserLists($input: userFetchInput!){
            fetchUserLists(input: $input){
              message
              success
              totalLists
              type
              list {
                  _id
                  isPublic
                  ownerId
                  subscribers {
                    _id
                    name
                    photo
                    
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
    variables:{
      input : {
        id: obj.id,
        page: obj.page || 1,
        limit: obj?.limit || 12,
        created: obj.created || false,
        subscribed: obj?.subscribed || false,
      }
    },
  };
  return graphQl;
};

/*
@desc: getUserCreatedAndFollowedLists query
*/
const getUserCreatedAndFollowedLists = (obj) => {
  const graphQl = {
    query: `
          query GetUserCreatedAndFollowedLists($id: ID!, $value: Int, $limit: Int){
            getUserCreatedAndFollowedLists (input: {id: $id, value:$value, limit: $limit}){
              message
              success
              totalLists
              list {
                  _id
                  isPublic
                  ownerId
                  subscribers {
                    _id
                    name
                    photo
                  }
                  name
                  description
                  type
                  media {
                    image
                    image_type
                  }
                  createdAt
                  updatedAt
                }
              }
          }`,
    variables: {
      id: obj.id,
      value: obj.value,
      limit: obj?.limit || 15,
    },
  };
  return graphQl;
};
/*
@desc: getListDetails query
*/
const GetListDetails = (obj) => {
  const graphQl = {
    query: `
          query GetListDetails($id: ID!, $value: Int){
            getListDetails (input: {id: $id, value:$value}){
              message
              success
              totalLists 
              listDetails {
                _id
                isPublic
                name
                description
                ownerId {
                  _id
                  name
                }
                media {
                  image
                  image_type
                }
                updatedAt
              }
              data {
                _id
                data
                title
                eventSchedule {
                    start_time
                    end_time
                }
                business {
                  _id
                  company_name
                  favorites
                  filter_tags
                  default_image_url
                  location {
                    type
                    coordinates
                  }
                  hours_format {
                    StartDay
                    EndDay
                    Start
                    End 
                  }
                }
                businessLocation {
                  type
                  coordinates
                }
                likes
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
                totalPosts {
                  totalPosts
                }
                media
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
    },
  };
  return graphQl;
};

/*
@desc: getMostTrendingLists query
*/
const getMostTrendingLists = (value) => {
  const graphQl = {
    query: `
          query FetchMostTrendingLists($value: Int){
            fetchMostTrendingLists(input: {value: $value}) {
              message
              success
              totalLists
              list {
                _id
                name
                description
                isPublic
                media {
                  image
                  image_type
                }
                ownerId {
                  _id
                  name
                }
                subscribers {
                _id
                name
                photo
                }
                updatedAt
                }
              }
          }`,
    variables: {
      value: value,
    },
  };
  return graphQl;
};

/*
@desc: getMostPopularLists query
*/
const getMostPopularLists = (value) => {
  const graphQl = {
    query: `
          query FetchMostPopularLists($value: Int){
            fetchMostPopularLists(input: {value: $value}) {
              message
              success
              totalLists
              list {
                _id
                name
                description
                isPublic
                media {
                  image
                  image_type
                }
                ownerId {
                  _id
                  name
                }
                subscribers {
                  _id
                  name
                  photo
                }
                updatedAt
              }
            }
          }`,
    variables: {
      value: value,
    },
  };
  return graphQl;
};

/*
@desc: SearchLists query
*/
const SearchLists = (obj) => {
  const graphQl = {
    query: `
          query ListSearch($value: Int, $search: String, $userId: String, $subscriberId: String){
            listSearch(input: {value: $value, search: $search, userId: $userId, subscriberId: $subscriberId}) {
              message
              success
              totalLists
              list {
                _id
                name
                description
                isPublic
                media {
                  image
                }
                ownerId
                subscribers {
                  _id
                  name
                  photo
                }
                updatedAt
              }
            }
          }`,
    variables: {
      value: obj.value,
      search: obj.search,
      userId: obj.userId,
      subscriberId: obj.subscriberId,
    },
  };
  return graphQl;
};

export {
  getAllLists,
  getUserLists,
  getUserSubscribedLists,
  filterUserLists,
  getUserCreatedAndFollowedLists,
  GetListDetails,
  getMostTrendingLists,
  getMostPopularLists,
  SearchLists,
};
