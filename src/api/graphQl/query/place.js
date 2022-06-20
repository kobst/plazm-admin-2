/*
@desc: getPlace query
*/
const getPlace = (obj) => {
  const graphQl = {
    query: `
          query SearchPlacesByUserId($id: ID!, $value: Int, $filters: filterInput, $ownerId:ID, $sideFilters: sideFilterInput, $search: String){
            searchPlacesByUserId(input: {id:$id, value:$value, filters:$filters, ownerId:$ownerId, sideFilters: $sideFilters, search: $search}) {
              message
              success
              totalPosts
              place {
                _id
                userSub
                hours_format {
                    StartDay
                    EndDay
                    Start
                    End
                }
                favorites
                additional_media
                filter_tags
                company_name
                location {
                  type
                  coordinates
                }
                address
                telephone
                handles {
                    twitter
                    facebook
                    instagram
                    linkedin
                }
                default_image_url
            }
            posts {
                postId
                totalLikes
                totalComments
                postDetails {
                    _id
                    data
                    title
                    eventSchedule {
                        start_time
                        end_time
                    }
                    businessLocation {
                      type
                      coordinates
                    }
                    list {
                      _id
                      name
                      image
                    }
                    taggedUsers {
                        list_ids
                        _id
                        name
                        blurb
                        photo
                        createdAt
                        updatedAt
                    }
                    taggedLists {
                      _id
                      name
                      description
                      items
                      type
                      photo
                      account_id
                      createdAt
                    }
                    ownerId {
                      _id
                      name
                      email
                      photo
                    }
                    likes {
                      name
                      _id
                    }
                    recurring
                    media
                    location {
                        type
                        coordinates
                    }
                    createdAt
                    updatedAt          
                }
                comments {
                    userId {
                      _id
                      name
                      }
                    body
                    replies {
                        userId {
                          _id
                          name
                          }
                    body
                    created_on
                }
                createdAt
                updatedAt
                }
            }
            }
          }`,
    variables: {
      id: obj.businessId,
      value: obj.value,
      filters: obj.filters,
      ownerId: obj.ownerId || null,
      sideFilters: obj.sideFilters || { likes: false, recent: true },
      search: obj?.search || "",
    },
  };
  return graphQl;
};

/*
@desc: searchAllPlaces query
*/
const searchAllPlaces = () => {
  const graphQl = {
    query: `
          query SearchAllPlaces{
            searchAllPlaces {
              message
              success
              place {
                _id
                company_name
                userSub
            }
            }
          }`,
  };
  return graphQl;
};

/*
@desc: homeSearch query
*/
const homeSearch = (obj) => {
  const graphQl = {
    query: `
          query HomeSearch($search: String, $value:Int, $filters: homeSearchFilterInput!, $longitude: Float!, $latitude: Float!){
            homeSearch(input: {search:$search, value:$value, filters:$filters, longitude:$longitude, latitude:$latitude}) {
              message
              success
              totalPlaces
              data {
                  _id
                  eventSchedule {
                    start_time
                    end_time
                  }
                  location {
                    type
                    coordinates
                  }
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
                  user {
                    name
                    photo
                  }
                  ownerId {
                    _id
                    name
                    photo
                  }
                  title
                  description
                  type
                  media
                  likes 
                  list {
                    _id
                    name
                  }
                  createdAt
                  updatedAt
                  data
                  listId {
                    _id
                    name
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
                    name
                  }
                  totalComments {
                    totalCount
                  }
                  hours_format {
                    Start
                    End
                    StartDay
                    EndDay
                  }
                  totalPosts {
                    totalPosts
                  }
                  filter_tags
                  company_name
                  default_image_url
                  status
                  favorites                  
                  
                  itemId {
                    _id
                    data
                    title
                    description
                    eventSchedule {
                      start_time
                      end_time
                    }
                    media
                    taggedUsers {
                      name
                      photo
                    }
                    taggedLists {
                      _id
                      name
                    }
                    ownerId {
                      photo
                      name
                    }
                    likes
                    createdAt
                  }
                  userId {
                    name
                    photo
                  }
                  body
                }             
            }
          }`,
    variables: {
      search: obj.search,
      value: obj.value,
      filters: obj.filters,
      longitude: parseFloat(obj.longitude),
      latitude: parseFloat(obj.latitude),
    },
  };
  return graphQl;
};
export { getPlace, searchAllPlaces, homeSearch };
