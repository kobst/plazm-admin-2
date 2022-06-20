/*
@desc: findPostComments query
*/
const findPostComments = (id) => {
  const graphQl = {
    query: `
            query GetComment($id: ID!){
                getComment(input: {id:$id}) {
                message
                success
                post {
                  totalReplies
                  comment {
                    _id
                    itemId 
                    userId {
                        _id
                        name
                        email
                        phoneNumber
                        userSub
                        photo
                        lockProfile
                        }
                      taggedUsers {
                          _id
                          name
                          email
                        }
                      body
                      likes {
                        _id
                        name
                        email
                        phoneNumber
                        userSub
                        photo
                        lockProfile
                      }
                      replies {
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
      id: id,
    },
  };
  return graphQl;
};

/*
@desc: findCommentReplies query
*/
const findCommentReplies = (id) => {
  const graphQl = {
    query: `
          query GetReplies($id: ID!){
            getReplies(input: {id:$id}) {
              message
              success
              postId
              commentId
              replies {
                        userId {
                          _id
                          name
                          photo
                          }
                          taggedUsers {
                            _id
                            name
                            email
                          }
                    body
                    created_on
                }
            }
          }`,
    variables: {
      id: id,
    },
  };
  return graphQl;
};
export { findPostComments ,findCommentReplies};
