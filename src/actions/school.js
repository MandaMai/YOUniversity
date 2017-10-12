import request from 'superagent';
// import md5 from 'md5'

const baseUrl: string = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?';
const fields: string = "&_fields=id,school.name,2015.cost.avg_net_price.public,2015.cost.tuition.in_state,2015.cost.tuition.out_of_state,2015.cost.tuition.program_year,school.state_fips,school.locale,school.degrees_awarded.predominant,school.degrees_awarded.highest,2015.cost.attendance.academic_year,2015.student.size,2015.academics.program_available.bachelors,2015.academics.program_available.assoc,2015.admissions.admission_rate.overall"
const sortItems: string = "&sort=2015.cost.avg_net_price.public:desc";
const perPage: string = "&_per_page=100";
//create api call string
function generateCredentials(){
  let publicKey = process.env.REACT_APP_API_PUBLIC_KEY;
  let timestamp = +new Date(); // same new Date().getTime()

  return publicKey;
}

//actually doing the call
export function getSchools(stateFilter = "",programFilter = "", costFilter = ""){
  let search = "";
  let stateSearch = "";
  let programSearch = "";
  let costSearch = "";

  //will need one of these for each filter
  if(stateFilter){
  stateSearch = "school.state="+ stateFilter;
    //will need to comma parse these out
  }
  if(programFilter){
  programSearch = "&2015.academics.program.degree."+programFilter+"=1";
    //will need to comma parse these out
  }
  if(costFilter){
  costSearch = "&2015.cost.avg_net_price.public__range=0.."+ costFilter;
  }
  search=stateSearch+programSearch+costSearch;
  console.log(search);
  alert(`${baseUrl}${search}${fields}${sortItems}${perPage}&api_key=${generateCredentials()}`);
  
  return dispatch => {
    request.get(`${baseUrl}${search}${fields}${sortItems}${perPage}&api_key=${generateCredentials()}`).end(
      (error, response) => {
        console.log(`Response is: ${JSON.stringify(response.body.results)}`)
        if(!error) {
          dispatch({ type: `GET_SCHOOLS`, schools: response.body.results });
        }
      }
    );
  };
}
