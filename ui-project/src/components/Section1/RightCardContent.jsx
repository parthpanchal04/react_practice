import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div >
           
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full font-semibold h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
                <div>
                    <p className='text-shadow-2xs leading-normal text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem quibusdam eveniet voluptates alias ullam.</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-500 text-white font-medium  px-5 py-2 rounded-full '>{props.tag}</button>
                        <button className='bg-blue-500 text-white font-medium  px-2 py-2 rounded-full '><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
