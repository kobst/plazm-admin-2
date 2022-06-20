/*
@desc: create post graphQL mutation
@params: business, data, media, taggedUsers, taggedLists, ownerId
*/
const createPost = (values) => {
  const graphQl = {
    query: `
          mutation CreatePost($business: ID, $data:String, $media:[String], $taggedUsers:[ID], $taggedLists: [ID], $ownerId: ID, $listId: ID){
              createPost(input: {business:$business, data:$data, media:$media, taggedUsers:$taggedUsers, taggedLists:$taggedLists, ownerId:$ownerId, listId:$listId }) {
              message
              success
              totalPosts
              post {
                _id
                data
                list {
                  _id
                  name
                  image
                }
                business {
                  _id
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
              likes
              media
              createdAt
              updatedAt   
              }
            }
          }`,
    variables: {
      business: values.business,
      data: values.data,
      media: values.media ? [].concat(values.media) : [],
      taggedUsers: values.taggedUsers,
      taggedLists: values.taggedLists,
      ownerId: values.ownerId,
      listId: values.listId,
    },
  };
  return graphQl;
};

/*
@desc: add like to a post
@params: postId, userId
*/
const addLikeToPost = (values) => {
  const graphQl = {
    query: `
          mutation AddLikeToPost($id: ID!, $userId:ID!){
            addLikeToPost(input: {id:$id, userId:$userId}) {
              message
              success
              like {
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
    variables: {
      id: values.postId,
      userId: values.userId,
    },
  };
  return graphQl;
};

/*
@desc: delete post graphQL mutation
@params: id
*/
const deletePost = (id) => {
  const graphQl = {
    query: `
          mutation DeletePost($id: ID!){
            deletePost(input: {id:$id}) {
              message
              success
            }
          }`,
    variables: {
      id: id,
    },
  };
  return graphQl;
};

/*
@desc: update post graphQL mutation
@params: business, data, media, taggedUsers, taggedLists, ownerId
*/
const updatePost = (values) => {
  const graphQl = {
    query: `
          mutation UpdatePost($business: ID, $data:String, $media:[String], $taggedUsers:[ID], $taggedLists: [ID], $ownerId: ID, $listId: ID, $_id: ID){
            updatePost(input: {business:$business, data:$data, media:$media, taggedUsers:$taggedUsers, taggedLists:$taggedLists, ownerId:$ownerId, listId:$listId, _id:$_id }) {
              message
              success
              post {
                _id
                data
                taggedUsers {
                  _id
                  name
                }
                taggedLists {
                  _id
                  name
                }
                media
                createdAt
              }
            }
          }`,
    variables: {
      business: values.business,
      data: values.data,
      media: values.media ? [].concat(values.media) : [],
      taggedUsers: values.taggedUsers,
      taggedLists: values.taggedLists,
      ownerId: values.ownerId,
      listId: values.listId,
      _id: values._id,
    },
  };
  return graphQl;
};

export { createPost, addLikeToPost, updatePost, deletePost };
