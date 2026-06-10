import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
    
  }

  const deleteTask = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex items-start lg:w-1/2 flex-col gap-5 p-10'>

        <h1 className='text-2xl font-bold'>Add notes</h1>

        <input
          type="text" 
          placeholder='Enter notes heading' 
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />

        <textarea 
          type="text" 
          placeholder='Enter details'
          className='px-5 py-2 w-full font-medium h-30 border-2 rounded flex items-start flex-row outline-none'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />

        <button className='bg-white text-black font-medium outline-none w-full px-5 py-2 rounded'>Add note</button>

        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-2xl font-bold'>Your Notes</h1>
          <div className='flex flex-wrap gap-6 h-full mt-5 overflow-auto'>
            {task.map(function(elem, idx) {

              return <div key={idx} className="h-50 w-38 flex flex-col justify-between relative items-start bg-cover bg-center rounded-xl pt-8 px-4 pb-4 text-black bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]" >
                <div>
                  <h3 className='leading-tight text-2xl font-bold'>{elem.title}</h3>
                  <p className='text-gray-700'>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteTask(idx)
                }} 
                className='w-full bg-amber-300 px-2 rounded cursor-pointer active:scale-95'>delete</button>
              </div>
            })}
            
          </div>
        </div>

      </div>
      
      
    
  )
}

export default App
