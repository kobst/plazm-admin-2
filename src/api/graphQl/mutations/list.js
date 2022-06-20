/*
@desc: add list
@params: name, description, media, ownerId
*/
const CreateList = (values) => {
  const graphQl = {
    query: `
            mutation CreateList($name: String, $description:String, $media:[media], $ownerId: ID){
                createList(input: {name:$name, description:$description, media:$media, ownerId:$ownerId}) {
                message
                success
                list {
                    _id
                    name
                    description
                    ownerId
                    posts
                    likes
                    subscribers
                    media {
                      image
                      thumbnail
                    }
                  }
              }
            }`,
    variables: {
      name: values.title,
      description: values.description,
      media: values.media,
      ownerId: values.ownerId,
    },
  };
  return graphQl;
};

/*
@desc: add post to a list
@params: name, description, media, ownerId
*/
const addPostToList = (values) => {
  const graphQl = {
    query: `
          mutation addPostToList($listId: ID!, $postId:ID! ){
            addPostToList(input: {listId:$listId, postId:$postId}) {
              message
              success
              list {
                  _id
                  name
                  description
                  ownerId
                  posts
                  likes
                  subscribers
                  media {
                    image
                    thumbnail
                  }
                }
            }
          }`,
    variables: {
      listId: values.listId,
      postId: values.postId,
    },
  };
  return graphQl;
};

/*
@desc: add event to a list
@params: name, description, media, ownerId
*/
const addEventToList = (values) => {
  const graphQl = {
    query: `
          mutation addEventToList($listId: ID!, $eventId:ID! ){
            addEventToList(input: {listId:$listId, eventId:$eventId}) {
              message
              success
              list {
                  _id
                  name
                  description
                  ownerId
                  posts
                  likes
                  subscribers
                  media {
                    image
                    thumbnail
                  }
                }
            }
          }`,
    variables: {
      listId: values.listId,
      eventId: values.eventId,
    },
  };
  return graphQl;
};

/*
@desc: delete list
@params: userId, listId
*/
const DeleteList = (values) => {
  const graphQl = {
    query: `
            mutation DeleteUserList($listId: ID!, $userId:ID!){
              deleteUserList(input: {listId:$listId, userId:$userId}) {
                message
                success
                list {
                    _id
                    name
                    description
                    ownerId {
                      name
                    }
                    posts
                    subscribers
                    media {
                      image
                      thumbnail
                    }
                  }
              }
            }`,
    variables: {
      listId: values.listId,
      userId: values.userId,
    },
  };
  return graphQl;
};

/*
@desc: to subscribe to a list
@params: userId, listId
*/
const SubscribeToAList = (values) => {
  const graphQl = {
    query: `
            mutation SubscribeToAList($listId: ID!, $userId:ID!){
              subscribeToAList(input: {listId:$listId, userId:$userId}) {
                message
                success
              }
            }`,
    variables: {
      listId: values.listId,
      userId: values.userId,
    },
  };
  return graphQl;
};

/*
@desc: to unSubscribe to a list
@params: userId, listId
*/
const UnsubscribeToAList = (values) => {
  const graphQl = {
    query: `
            mutation UnSubscribeToAList($listId: ID!, $userId:ID!){
              unSubscribeToAList(input: {listId:$listId, userId:$userId}) {
                message
                success
              }
            }`,
    variables: {
      listId: values.listId,
      userId: values.userId,
    },
  };
  return graphQl;
};

/*
@desc: delete post to a list
@params: postId, listId
*/
const DeletePostFromAList = (values) => {
  const graphQl = {
    query: `
          mutation deletePostFromAList($listId: ID!, $postId:ID! ){
            deletePostFromAList(input: {listId:$listId, postId:$postId}) {
              message
              success
              list {
                  _id
                  name
                  description
                  ownerId
                  posts
                  likes
                  subscribers
                  media {
                    image
                    thumbnail
                  }
                }
            }
          }`,
    variables: {
      listId: values.listId,
      postId: values.postId,
    },
  };
  return graphQl;
};
export {
  CreateList,
  addPostToList,
  addEventToList,
  DeleteList,
  UnsubscribeToAList,
  SubscribeToAList,
  DeletePostFromAList,
};
