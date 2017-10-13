import React, { Component } from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel, HelpBlock, Link } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Navigation from '../navigation/Navigation';

import './Schooldetails.css';

let college = {
    "metadata": {
        "total": 1,
        "page": 0,
        "per_page": 20
    },
    "results": [
        {
            "2015.student.demographics.women": 0.528,
            "2015.cost.net_price.private.by_income_level.0-48000": 10551,
            "2015.aid.federal_loan_rate": 0.3763,
            "2015.student.size": 9491,
            "2015.aid.pell_grant_rate": 0.125,
            "2015.completion.completion_rate_4yr_150nt": 0.9242,
            "school.city": "Chestnut Hill",
            "school.degrees_awarded.highest": 4,
            "2015.student.retention_rate.four_year.full_time": 0.95,
            "2015.cost.tuition.out_of_state": 49324,
            "2015.aid.median_debt.completers.overall": 19000,
            "2015.admissions.sat_scores.average.overall": 1380,
            "school.state": "MA",
            "2015.admissions.admission_rate.overall": 0.2851,
            "2015.academics.program_available.bachelors": true,
            "2015.cost.tuition.in_state": 49324,
            "2015.aid.loan_principal": 19000,
            "2015.cost.net_price.private.by_income_level.48001-75000": 15140,
            "2015.cost.net_price.private.by_income_level.110001-plus": 46134,
            "school.name": "Boston College",
            "school.state_fips": 25,
            "2015.academics.program_available.assoc": false,
            "2015.aid.median_debt.noncompleters": 8750,
            "2015.cost.attendance.academic_year": 62968,
            "2015.student.demographics.men": 0.472,
            "2015.student.demographics.median_family_income": 100535,
            "2015.student.grad_students": 4558,
            "school.school_url": "www.bc.edu",
            "school.price_calculator_url": "https://npc.collegeboard.org/student/app/bc",
            "2015.cost.net_price.private.by_income_level.75001-110000": 23514,
            "school.degrees_awarded.predominant": 3,
            "school.locale": 13,
            "2015.cost.avg_net_price.overall": 33661,
            "2015.cost.avg_net_price.private": 33661,
            "2015.cost.avg_net_price.public": null,
            "2015.cost.tuition.program_year": null,
            "2015.completion.title_iv.completed_by.4yrs": null,
            "2015.cost.net_price.public.by_income_level.0-48000": null,
            "2015.cost.net_price.public.by_income_level.48001-75000": null,
            "2015.cost.net_price.public.by_income_level.75001-110000": null,
            "2015.cost.net_price.public.by_income_level.110001-plus": null
        }
    ]
}

console.log(college.results[0]["school.name"])

class SchoolDetails extends Component {

  render() {
    return (

      <div>
        <Navigation />

        <div className="details-title">
          <h1>{college.results[0]["school.name"]}</h1>
        </div>

        <div className="details-summary details-card">
          <h2>School Summary</h2>
          <p>Website URL:  {college.results[0]["school.school_url"]}</p>
          <p>State:  {college.results[0]["school.state"]}</p>
          <p>City:  {college.results[0]["school.city"]}</p>
        </div>
        
      </div>
    );
  }
}

export default SchoolDetails;