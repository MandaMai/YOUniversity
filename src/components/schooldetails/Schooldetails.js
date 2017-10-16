import React, { Component } from 'react';
import { Grid, Col, Link } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Navigation from '../navigation/Navigation';

import './SchoolDetails.css';

// let college = {
//   "metadata": {
//       "total": 1,
//       "page": 0,
//       "per_page": 20
//   },
//   "results": [
//       {
//           "2015.student.demographics.women": 0.528,
//           "2015.aid.federal_loan_rate": 0.3763,
//           "2015.student.size": 9491,
//           "2015.aid.pell_grant_rate": 0.125,
//           "2015.completion.completion_rate_4yr_150nt": 0.9242,
//           "school.city": "Chestnut Hill",
//           "school.degrees_awarded.highest": 4,
//           "2015.student.retention_rate.four_year.full_time": 0.95,
//           "2015.cost.tuition.out_of_state": 49324,
//           "2015.aid.median_debt.completers.overall": 19000,
//           "2015.admissions.sat_scores.average.overall": 1380,
//           "2015.cost.net_price.private.by_income_level.0-30000": 11600,
//           "school.state": "MA",
//           "2015.admissions.admission_rate.overall": 0.2851,
//           "2015.academics.program_available.bachelors": true,
//           "2015.cost.tuition.in_state": 49324,
//           "2015.aid.loan_principal": 19000,
//           "2015.cost.net_price.private.by_income_level.48001-75000": 15140,
//           "2015.cost.net_price.private.by_income_level.110001-plus": 46134,
//           "school.name": "Boston College",
//           "2015.cost.net_price.private.by_income_level.30001-48000": 9937,
//           "school.state_fips": 25,
//           "2015.academics.program_available.assoc": false,
//           "2015.aid.median_debt.noncompleters": 8750,
//           "2015.cost.attendance.academic_year": 62968,
//           "school.ownership": 2,
//           "2015.student.demographics.men": 0.472,
//           "2015.student.demographics.median_family_income": 100535,
//           "2015.student.grad_students": 4558,
//           "school.school_url": "www.bc.edu",
//           "school.price_calculator_url": "https://npc.collegeboard.org/student/app/bc",
//           "2015.cost.net_price.private.by_income_level.75001-110000": 23514,
//           "school.degrees_awarded.predominant": 3,
//           "school.locale": 13,
//           "2015.cost.avg_net_price.overall": 33661,
//           "2015.cost.avg_net_price.private": 33661,
//           "2015.cost.avg_net_price.public": null,
//           "2015.cost.tuition.program_year": null,
//           "2015.completion.title_iv.completed_by.4yrs": null,
//           "2015.cost.net_price.public.by_income_level.0-30000": null,
//           "2015.cost.net_price.public.by_income_level.30001-48000": null,
//           "2015.cost.net_price.public.by_income_level.48001-75000": null,
//           "2015.cost.net_price.public.by_income_level.75001-110000": null,
//           "2015.cost.net_price.public.by_income_level.110001-plus": null
//       }
//   ]
// }


export class SchoolDetails extends Component {
  
    componentDidMount() {
        // let schoolid = this.props.params.id
        let schoolid = 236939
        if (this.props.params.id) {
          schoolid = this.props.params.id
        }
        this.props.renderSchooldetails(schoolid)
    }

  getCostValue(privateValue, publicValue) {
    if (privateValue) {
      return privateValue
    }
    else {
      return publicValue
    }
    
  }

  render() {

      const getDegree = {
        0: 'Non-Degree-Granting',
        1: 'Certificate',
        2: 'Associate',
        3: "Bachelor's",
        4: 'Graduate'
      }

      const getPredominant = {
        0: 'Not classified',
        1: 'Certificate-degree',
        2: "Associate's-degree",
        3: "Bachelor's-degree",
        4: 'Graduate-degree'
      }
    
      const getOwnership = {
        1: "Public",
        2: "Private Non-Profit",
        3: "Private For-Profit"
      }

      

      const getLocale = {
        11:"City: Large (population of 250,000 or more)",
        12:"City: Midsize (population of at least 100,000 but less than 250,000)",
        13:"City: Small (population less than 100,000)",
        21:"Suburb: Large (outside principal city, in urbanized area with population of 250,000 or more)",
        22:"Suburb: Midsize (outside principal city, in urbanized area with population of at least 100,000 but less than 250,000)",
        23:"Suburb: Small (outside principal city, in urbanized area with population less than 100,000)",
        31:"Town: Fringe (in urban cluster up to 10 miles from an urbanized area)",
        32:"Town: Distant (in urban cluster more than 10 miles and up to 35 miles from an urbanized area)",
        33:"Town: Remote (in urban cluster more than 35 miles from an urbanized area)",
        41:"Rural: Fringe (rural territory up to 5 miles from an urbanized area or up to 2.5 miles from an urban cluster)",
        42:"Rural: Distant (rural territory more than 5 miles but up to 25 miles from an urbanized area or more than 2.5 and up to 10 miles from an urban cluster)",
        43:"Rural: Remote (rural territory more than 25 miles from an urbanized area and more than 10 miles from an urban cluster)"
      }

      console.log(`this.props.schooldetails is ${JSON.stringify(this.props.schooldetails)}`)
      // if we have schooldetails data we are ready to render details page
      if(this.props.schooldetails.schooldetails){
        let college = this.props.schooldetails.schooldetails[0];
        let schoolURL = 'http://'+college["school.school_url"]
      
        return (

          <div>
            <Navigation />
            <div className="details-container">
              <Col sm={12} md={12} lg={12} className="details-title">
                <h1>{college["school.name"]}</h1>
              </Col>

              <Col sm={12} md={6} lg={6} className="details-summary details-card">
                <h2>School Summary</h2>
                <p>Website URL: <a href={schoolURL} target="_blank">{college["school.school_url"]}</a></p>
                <p>State:  {college["school.state"]}</p>
                <p>City:  {college["school.city"]}</p>
                <p>School size (Enrollement):  {college["2015.student.size"]}</p>
                <p>Highest Degree Offered:  {getDegree[college["school.degrees_awarded.highest"]]}</p>
                <p>Predominant Degree Offered:  {getPredominant[college["school.degrees_awarded.predominant"]]}</p>
                <p>Institution Type:  {getOwnership[college["school.ownership"]]}</p>
                <p>Locale Description:  {getLocale[college["school.locale"]]}</p>
              </Col>

              <Col sm={12} md={6} lg={6} className="student-data details-card">
                <h2>Student Data</h2>
                <p>Percentage Women: {Math.round((college["2015.student.demographics.women"])*100)}%</p>
                <p>Percentage Men: {Math.round((college["2015.student.demographics.men"])*100)}%</p>
                <p>Average SAT Score: {college["2015.admissions.sat_scores.average.overall"]}</p>
                <p>Acceptence Rate: {Math.round((college["2015.admissions.admission_rate.overall"])*100)}%</p>
                <p>Number of Grad Students: {college["2015.student.grad_students"]}</p>
                <p>Retention Rate: {Math.round((college["2015.student.retention_rate.four_year.full_time"])*100)}%</p>
                <p>Completion Rate: {Math.round((college["2015.completion.completion_rate_4yr_150nt"])*100)}%</p>
                <p>Median Family Income: ${college["2015.student.demographics.median_family_income"]}</p>
              </Col>

              <Col sm={12} md={6} lg={6} className="financial-data details-card">
                <h2>Financial Data</h2>
                <p>Tuition In-State: ${college["2015.cost.tuition.in_state"]}</p>
                <p>Tuition Out-of-State: ${college["2015.cost.tuition.out_of_state"]}</p>
                <p>Cost of Attendance: ${college["2015.cost.attendance.academic_year"]}</p>
                <p>Average Net Price: ${college["2015.cost.avg_net_price.overall"]}</p>
                <p>Average Debt Upon Completion: ${college["2015.aid.median_debt.completers.overall"]}</p>
                <p>Percentage of Students with Federal Loans: {Math.round((college["2015.aid.federal_loan_rate"])*100)}%</p>
                <p>Percentage of Students with Pell Grants: {Math.round((college["2015.aid.pell_grant_rate"])*100)}%</p>
              </Col>

              <Col sm={12} md={6} lg={6} className="financial-breakdown details-card">
                <h2>Net Price by Family Income</h2>
                <div className="table-container">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <td>Family Income Range</td>
                        <td>Net Price for Range</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$0 to $30000</td>
                        <td>${(college["2015.cost.net_price.public.by_income_level.0-30000"]) ? college["2015.cost.net_price.public.by_income_level.0-30000"] : college["2015.cost.net_price.private.by_income_level.0-30000"]}</td>
                      </tr>
                      <tr>
                        <td>$300001 to $48000</td>
                        <td>${(college["2015.cost.net_price.public.by_income_level.30001-48000"]) ? college["2015.cost.net_price.public.by_income_level.30001-48000"] : college["2015.cost.net_price.private.by_income_level.30001-48000"]}</td>
                      </tr>
                      <tr>
                        <td>$48001 to $75000</td>
                        <td>${(college["2015.cost.net_price.public.by_income_level.48001-75000"]) ? college["2015.cost.net_price.public.by_income_level.48001-75000"] : college["2015.cost.net_price.private.by_income_level.48001-75000"]}</td>
                      </tr>
                      <tr>
                        <td>$75000 to $110000</td>
                        <td>${(college["2015.cost.net_price.public.by_income_level.75001-110000"]) ? college["2015.cost.net_price.public.by_income_level.75001-110000"] : college["2015.cost.net_price.private.by_income_level.75001-110000"]}</td>
                      </tr>
                      <tr>
                        <td>More than $110000</td>
                        <td>${(college["2015.cost.net_price.public.by_income_level.110001-plus"]) ? college["2015.cost.net_price.public.by_income_level.110001-plus"] : college["2015.cost.net_price.private.by_income_level.110001-plus"]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </div>

          </div>
        );
      }

      //return for outside the if statement, when we are waiting for the data to arrive from api
      return (<div>loading...</div>)
  }
}

export default SchoolDetails;