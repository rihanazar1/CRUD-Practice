import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUsers = () => {

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [bio, setBio] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  const fetchPreviousData = () => {
    axios.get("http://127.0.0.1:5000/user/showusers")
    .then((res) => {
      const user = res.data.showUser.find(u => u._id === id)
        if (user) {
          setImage(user.image)
          setName(user.name)
          setEmail(user.email)
          setAge(user.age)
          setBio(user.bio)
        }
    })
  }

  useEffect(() => {
    fetchPreviousData()
  }, [id])
  

  const onSubmitHandler = (e) =>{
    e.preventDefault()

    axios.put(`http://127.0.0.1:5000/user/update/${id}`, { image, name, email, age, bio })
    .then(() => navigate('/'))
    .catch(err => console.log(err))

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
        <h2 className='font-bold font-mono text-xl mt-2'>Update User</h2>
        <div className='w-full flex justify-center'>
            <input 
              className='border border-gray-400 rounded w-[15rem] p-1'
              type="text" 
              value={image}
              onChange={(eventObject)=>{
                setImage(eventObject.target.value)
              }}
              required
              placeholder='Enter Updated Image'
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
          placeholder='Enter Updated Name'
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
          placeholder='Enter Updated Email'
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
          placeholder='Enter Updated Age'
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
          placeholder='Enter Updated Bio'
          />
        </div>
        <button className='bg-gradient-to-r from-blue-600 to-cyan-300 p-2 w-[12rem] rounded-lg font-semibold text-[20px]'>Done!</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default UpdateUsers