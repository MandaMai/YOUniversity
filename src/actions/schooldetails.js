import request from 'superagent';


const baseUrl: string = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?';
const fields: string = "&_fields=school.name,school.ownership,school.city,school.state,school.school_url,school.price_calculator_url,school.state_fips,school.locale,school.degrees_awarded.predominant,school.degrees_awarded.highest,2015.cost.avg_net_price.public,2015.cost.avg_net_price.private,2015.cost.avg_net_price.overall,2015.cost.tuition.in_state,2015.cost.tuition.out_of_state,2015.cost.tuition.program_year,2015.cost.attendance.academic_year,2015.student.size,2015.academics.program_available.bachelors,2015.academics.program_available.assoc,2015.admissions.admission_rate.overall,2015.aid.federal_loan_rate,2015.aid.loan_principal,2015.aid.pell_grant_rate,2015.aid.median_debt.completers.overall,2015.aid.median_debt.noncompleters,2015.student.retention_rate.four_year.full_time,2015.completion.completion_rate_4yr_150nt,2015.student.demographics.men,2015.student.demographics.women,2015.student.demographics.median_family_income,2015.student.grad_students,2015.completion.title_iv.completed_by.4yrs,2015.admissions.sat_scores.average.overall,2015.cost.net_price.private.by_income_level.0-30000,2015.cost.net_price.private.by_income_level.30001-48000,2015.cost.net_price.private.by_income_level.48001-75000,2015.cost.net_price.private.by_income_level.75001-110000,2015.cost.net_price.private.by_income_level.110001-plus,2015.cost.net_price.public.by_income_level.0-30000,2015.cost.net_price.public.by_income_level.30001-48000,2015.cost.net_price.public.by_income_level.48001-75000,2015.cost.net_price.public.by_income_level.75001-110000,2015.cost.net_price.public.by_income_level.110001-plus"

//create api call string
function generateCredentials(){
  let publicKey = process.env.REACT_APP_API_PUBLIC_KEY;
  let timestamp = +new Date(); // same new Date().getTime()

  return publicKey;
}


//actually doing the call
export function getSchooldetails(schoolID = ""){
  
  //inputs from API here
  
  let search = "id=" + schoolID;
  
  console.log(search);
  
  return dispatch => {
    request.get(`${baseUrl}${search}${fields}&api_key=${generateCredentials()}`).end(
      (error, response) => {
        console.log(`Response is: ${JSON.stringify(response.body.results)}`)
        if(!error) {
          dispatch({ type: `GET_SCHOOL_DETAILS`, schooldetails: response.body.results });
        }
      }
    );
  };
}
