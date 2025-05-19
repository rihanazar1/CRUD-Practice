import { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

const Users = () => {

    const [userData, setUserData] = useState([{
        image:"https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rihan",
        email: "rihan@mail.com",
        bio: "Hi i am rihan",
        age: 20
    },
    {
        image:"https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rihan",
        email: "rihan@mail.com",
        bio: "Hi i am rihan",
        age: 21
    }])

    const deleteHandler = (index) =>{
        setUserData(userData.filter((_, idx) => idx !== index));
    }

    const navigate = useNavigate()

  return (
    <>
    <Navbar/>
        <div className='mt-28 flex justify-center items-center'>
            {
                userData.map((userData, index) => {
                    return <div key={index} className='w-[14rem] h-[20rem] mr-7 bg-white border-2 border-gray-400 rounded-lg drop-shadow-lg'>

                            <div className='flex justify-center'>
                                <img className='w-28 h-28 rounded-full mt-6' src={userData.image} alt="" />
                            </div>

                            <div className='flex justify-center mt-3'>
                                <h2>{userData.name}</h2>
                            </div>

                            <div className='m-3'>
                                <h2>Email: {userData.email}</h2>
                                <h2>Age: {userData.age}</h2>
                                <h2>Bio: {userData.bio}</h2>
                            </div>
                            
                            <div className='flex justify-around '>
                                <button onClick={()=>navigate("/create")} className='bg-gradient-to-r from-green-500 to-green-500 pt-1 pb-1 pl-2 pr-2 rounded text-white font-semibold'>Edit</button>
                                <button onClick={() => deleteHandler(index)} className='bg-gradient-to-r from-red-500 to-pink-500 pt-1 pb-1 pl-2 pr-2 rounded text-white font-semibold'>Delete</button>
                            </div>
                        </div>
                })
            }
        </div>
    </>
  )
}

export default Users