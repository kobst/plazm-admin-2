/* graphQL function used in the project*/
export const graphQlEndPoint = async (graphQl) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( graphQl ),
      }
    );
    const body = await response.json();
    return body;
  };