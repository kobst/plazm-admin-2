/*
@desc: fetch events for a particular graphQL query
*/
const fetchEvent = (values) => {
  const graphQl = {
    query: `
        query GetEventsForTheDay($id: ID, $day: String, $date:Date){
            getEventsForTheDay(input: {id:$id, day:$day, date:$date}) {
            message
            success
            event {
                _id
                totalComments
                likes {
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
                eventSchedule {
                    start_time
                    end_time
                }
                location {
                    type
                    coordinates
                }
                user {
                  _id
                  name
                  email
                  phoneNumber
                  photo
                }
                title
                description
                type
                recurring
                media
                createdAt
                updatedAt
            }
          }
        }`,
    variables: {
      id: values.id,
      day: values.day,
      date: values.date,
    },
  };
  return graphQl;
};

/*
@desc: fetch events for a week graphQL query
*/
const fetchEventForAWeek = (values) => {
  const graphQl = {
    query: `
      query GetEventsForTheWeek($id: ID, $date:Date, $userId: ID){
        getEventsForTheWeek(input: {id:$id, date:$date, userId:$userId}) {
          message
          success
          event {
              _id
              totalComments
              likes {
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
              eventSchedule {
                  start_time
                  end_time
              }
              location {
                  type
                  coordinates
              }
              user {
                _id
              }
              list {
                _id
                name
                image
              }
              title
              description
              type
              recurring
              media
              createdAt
              updatedAt
          }
        }
      }`,
    variables: {
      id: values.id,
      date: values.date,
      userId: values.userId,
    },
  };
  return graphQl;
};
export { fetchEvent, fetchEventForAWeek };
