import React from 'react'
import Card from './components/Card'

const  App = () => {

  const jobOpenings = [
  {
    id: 1,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    brandName: "Google",
    datePosted: "2 days ago",
    jobPost: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India",
  },
  {
    id: 2,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    brandName: "Amazon",
    datePosted: "1 week ago",
    jobPost: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    brandName: "Microsoft",
    datePosted: "5 days ago",
    jobPost: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India",
  },
  {
    id: 4,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    brandName: "Apple",
    datePosted: "3 weeks ago",
    jobPost: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Pune, India",
  },
  {
    id: 5,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    brandName: "Netflix",
    datePosted: "6 days ago",
    jobPost: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote",
  },
  {
    id: 6,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    brandName: "IBM",
    datePosted: "4 weeks ago",
    jobPost: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Chennai, India",
  },
  {
    id: 7,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Meta-Logo.png",
    brandName: "Meta",
    datePosted: "1 day ago",
    jobPost: "React Native Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India",
  },
  {
    id: 8,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    brandName: "Tesla",
    datePosted: "2 weeks ago",
    jobPost: "Automation Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Delhi, India",
  },
  {
    id: 9,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/LinkedIn_icon_circle.svg",
    brandName: "LinkedIn",
    datePosted: "5 hours ago",
    jobPost: "Frontend Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$25/hr",
    location: "Remote",
  },
  {
    id: 10,
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    brandName: "Slack",
    datePosted: "2 months ago",
    jobPost: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Noida, India",
  },
];




  return (

    <div className='parent'> 
      {jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
                    <Card logo={elem.brandLogo} company={elem.brandName} date={elem.datePosted} post={elem.jobPost} tagOne={elem.tag1} tagTwo={elem.tag2} payy={elem.pay} locationn={elem.location}/>

        </div>
        

      })}

    </div>
  )
}

export default App
