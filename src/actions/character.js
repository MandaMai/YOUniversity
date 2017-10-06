import request from 'superagent';
import md5 from 'md5'

const baseUrl: string = 'http://gateway.marvel.com/v1/public/';

function generateCredentials(){
  let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  let timestamp = +new Date(); // same new Date().getTime()
  let hash = md5(`${timestamp}${privateKey}${publicKey}`);
  return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}

export function getCharacters(name = ""){
  let search = "";
  if(name){
    search = `&nameStartsWith=${name}`;
  }
  return dispatch => {
    request.get(`${baseUrl}characters${generateCredentials()}${search}`).end(
      (error, response) => {
        if(!error) {
          dispatch({ type: `GET_CHARACTERS`, characters: response.body.data.results});
        }
      }
    );
  };
}
