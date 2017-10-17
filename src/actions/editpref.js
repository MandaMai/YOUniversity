// actions
import request from 'superagent';

//added cors-anywhere to deal with the cors issues on your backend
const baseUrl = 'https://youniversity1.herokuapp.com/user';

export function putUser(dataToSend = {
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
    request.put(`${baseUrl}`)
      .set('Content-Type', 'application/json')
      .send(dataToSend)
      .end(
        (error, response) => {
          console.log(`User Edit response is: ${JSON.stringify(response)}`)
          if(!error) {
            localStorage.setItem("currentUser", JSON.stringify(response.body))
            dispatch({ type: `PUT_USER`, user: response.body });
          }
        }
      )
  }
}



// reducer and container for amanda's app 

// link what's in the state to the container componenent
