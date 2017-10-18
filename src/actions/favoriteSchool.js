import request from 'superagent';
// import md5 from 'md5'

//schoolList.id
const baseUrl: string = 'http://youniversity1.herokuapp.com/list/10/add';
this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
let listNum = this.currentUser.schoolList.id;

export function addFavorites(schoolData) {
  // console.log(`${baseUrl}${schoolData}`)
//   return dispatch => {
//     request.post(`${baseUrl}`).end(
//     (error,response)=> {
//       console.log(`Response is: ${JSON.stringify(response.body.schools)}`)
//       if(!error) {
//         dispatch({ type: `SET_FAVORITES`, schools: response.body.schools})
//       }
//     }
//   )
// }
return dispatch => {
  request.post(`${baseUrl}`)
    .set('Content-Type', 'application/json')
    .send(schoolData)
    .end(
      (error, response) => {
        console.log(`Favorite Item response is: ${JSON.stringify(response)}`)
        if(!error) {
          dispatch({ type: `SET_FAVORITES`, schools: response.body.schools})
          console.log(response.body.schools);
        }
      }
    )
}
}





// // actions
// import request from 'superagent';

// //added cors-anywhere to deal with the cors issues on your backend
// // const baseUrl = 'https://cors-anywhere.herokuapp.com/https://youniversity1.herokuapp.com/user';
// const baseUrl = 'https://youniversity1.herokuapp.com/user';

// export function postUser(dataToSend = {
//   "firstName": "Harry",
//   "lastName": "Potter",
//   "password": "potter",
//   "preferences": {
//     "cost": "$1000",
//     "location": "WA",
//     "major": "Education"
//   },
//   "username": "harrypotter@gmail.com"
// }) {

//   return dispatch => {
//     request.post(`${baseUrl}/create`)
//       .set('Content-Type', 'application/json')
//       .send(dataToSend)
//       .end(
//         (error, response) => {
//           console.log(`User Create response is: ${JSON.stringify(response)}`)
//           if(!error) {
//             localStorage.setItem("currentUser", JSON.stringify(response.body))
//             dispatch({ type: `POST_USER`, user: response.body });
//           }
//         }
//       )
//   }
// }
