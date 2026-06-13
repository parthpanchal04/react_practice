import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

    setUserData(response.data)
    
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  
  if (userData.length > 0) {
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-45 w-48 overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      
      <div className='flex flex-wrap gap-4 p-4'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          onClick={() => {
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }} 
          className='bg-amber-500 text-black font-semibold rounded cursor-pointer active:scale-95 px-4 py-2'>
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          onClick={() =>  {
            setIndex(index+1)
            setUserData([])
          }} 
          className='bg-amber-500 text-black font-semibold rounded cursor-pointer active:scale-95 px-4 py-2'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
