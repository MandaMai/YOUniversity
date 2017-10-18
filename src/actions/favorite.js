import request from 'superagent';
// import md5 from 'md5'


const baseUrl: string = 'http://youniversity1.herokuapp.com/user';
// const addURL: string = 'http://youniversity1.herokuapp.com/list/10/add';

// export function addFavorites(schoolData) {
//   console.log(`${addUrl}${schoolData}`)
//   return dispatch => {
//     request.post(`${addUrl}${schoolData}`).end(
//     (error,response)=> {
//       console.log(`Response is: ${JSON.stringify(response.body.schools)}`)
//       if(!error) {
//         dispatch({ type: `SET_FAVORITES`, schools: response.body.schools})
//       }
//     }
//   )
// }


//actually doing the call
export function getFavorites(){
  return dispatch => {
    request.get(`${baseUrl}`).end(
      (error, response) => {
        console.log(`Response is: ${JSON.stringify(response.body.schools)}`)
        if(!error) {
          dispatch({ type: `GET_FAVORITES`, schools: response.body.schools });
        }
      }
    );
  };
}
