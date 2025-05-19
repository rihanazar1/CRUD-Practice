import React, { useState } from 'react'
import Navbar from './Navbar'

const CreateUsers = () => {

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [bio, setBio] = useState("")

  const onSubmitHandler = (e) =>{
    e.preventDefault()

    setImage("")
    setName("")
    setEmail("")
    setAge("")
    setBio("")
  }


  return (
    <>
      <Navbar/>
    <div className='mt-[10rem] flex justify-center '>
      <div className='h-[23rem] w-[20rem] border border-gray-300 shadow-lg rounded-2xl'>
        <form onSubmit={(ev)=>onSubmitHandler(ev)} className='flex flex-col items-center gap-y-4'>
        <h2 className='font-bold font-mono text-xl mt-2'>Add User</h2>
        <div className='w-full flex justify-center'>
            <input 
              className='border border-gray-400 rounded w-[15rem] p-1'
              type="text" 
              value={image}
              onChange={(eventObject)=>{
                setImage(eventObject.target.value)
              }}
              required
              placeholder='Enter Image URL'
            />
        </div>

        <div className='w-full flex justify-center'>
          <input 
          className='border border-gray-400 rounded w-[15rem] p-1'
          type="text" 
          value={name}
          onChange={(eventObject)=>{
            setName(eventObject.target.value) 
            console.log(eventObject.target.value)
          }}
          required 
          placeholder='Enter your name'
          />
        </div>

       <div className='w-full flex justify-center'>
          <input 
          className='border border-gray-400 rounded w-[15rem] p-1'
          type="text" 
          value={email}
          onChange={(eventObject)=>{
            setEmail(eventObject.target.value) 
            console.log(eventObject.target.value)
          }}
          required 
          placeholder='Enter your email'
          />
        </div>

       <div className='w-full flex justify-center'>
          <input 
          className='border border-gray-400 rounded w-[15rem] p-1'
          type="number" 
          value={age}
          onChange={(eventObject)=>{
            setAge(eventObject.target.value) 
            console.log(eventObject.target.value)
          }}
          required 
          placeholder='Enter your age'
          />
        </div>

       <div className='w-full flex justify-center'>
          <input 
          className='border border-gray-400 rounded w-[15rem] p-1'
          type="text" 
          value={bio}
          onChange={(eventObject)=>{
            setBio(eventObject.target.value) 
            console.log(eventObject.target.value)
          }}
          required 
          placeholder='Enter your bio'
          />
        </div>
        <button className='bg-gradient-to-r from-blue-600 to-cyan-300 p-2 w-[12rem] rounded-lg font-semibold text-[20px]'>Submit</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default CreateUsers