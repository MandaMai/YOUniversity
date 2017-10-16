// actions
import request from 'superagent';

//added cors-anywhere to deal with the cors issues on your backend
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://youniversity1.herokuapp.com/user';

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
            localStorage.setItem("currentUser", JSON.stringify(response.body))
            dispatch({ type: `POST_USER`, user: response.body });
          }
        }
      )
  }
}



// reducer and container for amanda's app 

// link what's in the state to the container componenewt
