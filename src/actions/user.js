import request from 'superagent';

const baseUrl = 'https://youniversity1.herokuapp.com/user';

export function postUser(dataToSend = {
  "firstName": "Harry",
  "lastName": "Potter",
  "password": "potter",
  "preferences": {
    "cost": "$1000",
    "location": "WA",
    "major": "Education"
  },
  "username": "harrypotter@gmail.com"
}) {

  return dispatch => {
    request.post(`${baseUrl}/create`)
      .set('Content-Type', 'application/json')
      .send(dataToSend)
      .end(
        (error, response) => {
          console.log(`User Create response is: ${JSON.stringify(response)}`)
          if(!error) {
            dispatch({ type: `POST_USER`, user: response.body });
          }
        }
      )
  }
}
