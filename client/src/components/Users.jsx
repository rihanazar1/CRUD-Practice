import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Users = () => {

    const [userData, setUserData] = useState([])

    const fetchUsers = () =>{
        axios.get("http://127.0.0.1:5000/user/showusers")

        .then((res) =>{
            setUserData(res.data.showUser)
            console.log(res)
        })
        .catch((err) =>{
            console.log(err.response?.data)
        })
    }

    useEffect(() => {
        fetchUsers()
    },[])
    

    // const deleteHandler = (index) =>{
    //     setUserData(userData.filter((_, idx) => idx !== index));
    // }

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/user/delete/${id}`);
            setUserData(userData.filter(user => user._id !== id));
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

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
                                <button onClick={()=>navigate(`/update/${userData._id}`)} className='bg-gradient-to-r from-green-500 to-green-500 pt-1 pb-1 pl-2 pr-2 rounded text-white font-semibold'>Edit</button>
                                <button onClick={() => deleteHandler(userData._id)} className='bg-gradient-to-r from-red-500 to-pink-500 pt-1 pb-1 pl-2 pr-2 rounded text-white font-semibold'>Delete</button>
                            </div>
                        </div>
                })
            }
        </div>
    </>
  )
}

export default Users