import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {

  console.log(props.company);
  
    return (
        <div className='card'>

        <div>
          <div className='top'>
          <img src={props.logo} alt="Brand Logo" />
          <button>Save <Bookmark size={12}/></button>
        </div>

        <div className='center'>
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tagOne}</h4>
            <h4>{props.tagTwo}</h4>
          </div>
        </div>
        </div>

        <div className='bottom'>
          <div>
            <h3>{props.payy}</h3>
            <p>{props.locationn}</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
    )
}

export default Card