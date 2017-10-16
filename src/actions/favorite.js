import request from 'superagent';
// import md5 from 'md5'


const baseUrl: string = 'http://youniversity1.herokuapp.com/user';




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
