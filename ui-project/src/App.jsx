import react from 'react'
import Section2 from './components/Section2/Section2'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img:'https://img.magnific.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?semt=ais_hybrid&w=740&q=80',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/09/12-Benefits-of-Online-Learning-for-Working-Professionals.jpg.optimal.jpg',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://kcm.edu.in/blogs/wp-content/uploads/2025/05/customer-service-handsome-man-grey-suit-with-computer-headset-taking-down-notes-1024x667.jpg',
      intro:'',
      tag:'Underbanked'
    },
  ]


  return (
   <div>
    <Section1 users={users}/>
    <Section2 />
   </div>
  )
}

export default App