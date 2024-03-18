import React, {useState } from 'react'
import { Navigate } from 'react-router-dom'
import './index.css'

const  Admin = () => {
    const [isUserActive,setUserActive]= useState(false)
    const userSetter = () => {
        setUserActive({isUserActive:!isUserActive})
    }
    return (
        <div>
        {isUserActive? <Navigate to="/mplist" /> :<div className='adminContainer'>
            <div className='vectorSection'>
                <img src="https://res.cloudinary.com/dollmqugm/image/upload/v1710762905/vecteezy_cloud-computing-modern-flat-concept-for-web-banner-design_5879539_roxi5z.jpg" className='vector' alt="vectorimage" / >
                    </div>
        <h1 className='salutation'> Welcome to Admin Panel..!</h1>
        <div className='UpdatesContainer'>
            <button className='addBtn' type="button">Add Candidate</button>
            <button className='updateBtn' type="button">Update Candidate</button>
            <button className='delBtn' type="button">remove candidate</button>
            <button className='userBtn' type="button" onClick={()=>userSetter()}>Go to User View</button>
        </div>
      </div>
        }
        </div>
    )
  }
 export default Admin