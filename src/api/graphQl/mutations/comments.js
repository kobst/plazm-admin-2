/*
@desc: add comment to a post graphQL mutation
@params: itemId, userId, body, created_on
*/
const AddComment = (values) => {
    const graphQl = {
      query: `
            mutation CreateComment($itemId:ID, $userId:ID, $body:String, $created_on:Date){
                createComment(input: { itemId:$itemId, userId:$userId, body:$body, created_on:$created_on}) {
                message
                success
                post {
                    _id
                    userId {
                      _id
                      list_ids
                      name
                      blurb
                      photo
                      createdAt
                      updatedAt
                      }
                    itemId {
                      _id
                    }
                    body
                    replies {
                        userId {
                            _id
                            list_ids
                            name
                            blurb
                            photo
                            createdAt
                            updatedAt
                            }
                    body
                    created_on
                    }
                    createdAt
                    updatedAt
                }
              }
            }`,
      variables: {
        itemId: values.itemId,
        userId: values.userId,
        body: values.body,
        created_on: values.created_on,
      },
    };
    return graphQl;
  };

/*
@desc: add comment to a post graphQL mutation
@params: _id, userId, body
*/
const CreateReply = (values) => {
  const graphQl = {
    query: `
          mutation CreateReply($_id:ID!, $userId:ID!, $body:String!){
            createReply(input: { _id:$_id, userId:$userId, body:$body}) {
              message
              success
              reply {
                _id
                userId {
                  _id
                  name
                  photo
                }
                body
                created_on
              }
            }
          }`,
    variables: {
      _id: values._id,
      userId: values.userId,
      body: values.body,
    },
  };
  return graphQl;
};

/*
@desc: add comment to a post graphQL mutation
@params: commentId, userId
*/
const AddLikeToComment = (values) => {
  const graphQl = {
    query: `
          mutation AddLikeToComment($id:ID!, $userId:ID!){
            addLikeToComment(input: { id:$id, userId:$userId}) {
              message
              success
              postId
              commentId
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
      id: values.id,
      userId: values.userId
    },
  };
  return graphQl;
};
  export { AddComment, CreateReply, AddLikeToComment };