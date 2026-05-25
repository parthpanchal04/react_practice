import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div className='h-full flex gap-8 p-4 w-3/4 '>
            {props.users.map(function(elem, idx) {

                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
            })}
        </div>
    )
}

export default RightContent
