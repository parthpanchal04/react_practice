import React from 'react'
import { ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'


const RightCard = (props) => {
    return (
        <div className='h-full w-60 overflow-hidden relative rounded-2xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="img" />
            <RightCardContent id={props.id} tag={props.tag}/>

        </div>
    )
}

export default RightCard

