// actions
import request from 'superagent';

//added cors-anywhere to deal with the cors issues on your backend
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://youniversity1.herokuapp.com/api/session/mine';
// const baseUrl = 'https://youniversity1.herokuapp.com/api/session/mine';

export function putLogin(userData) {
  // console.log("Info from form: " + userData)
  //turn text to json here

  return dispatch => {
    request.put(`${baseUrl}`)
      .set('Content-Type', 'application/json')
      .send(userData)
      .end(
        (error, response) => {
          // console.log(`Login response is: ${JSON.stringify(response)}`)
          if(!error) {
            localStorage.setItem("currentUser", JSON.stringify(response.body))
            // console.log(localStorage.getItem("currentUser"))
            dispatch({ type: 'PUT_LOGIN', user: response.body });
          }
        }
      )
  }
}



// reducer and container for amanda's app 

// link what's in the state to the container componenewt
