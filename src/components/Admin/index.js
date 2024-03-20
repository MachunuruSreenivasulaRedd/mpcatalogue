import React, {useState } from 'react'
import { Navigate } from 'react-router-dom'
import './index.css'
import ListContext from '../../context/ListContext'

const  Admin = () => {
    const [isUserActive,setUserActive]= useState(false)
    const [isAdd,setCandidate]=useState(false)
    const [name,setName]=useState("")
    const [party,setparty]=useState("")
    const [wiki,setwiki]=useState("")
    const [summary,setsummary]=useState("")
    const [symbol,setsymbol]=useState("")
    const [image,setimage]=useState()
    const addCandidate = () => {
        setCandidate(!isAdd)
    }
    const userSetter = () => {
        setUserActive({isUserActive:!isUserActive})
    }
    return(
    <ListContext.Consumer>
            {value => {
                const {mpList,onAddCandidate}=value
                const key=mpList.length
    return (
        <div>
        {isUserActive? <Navigate to="/mplist" /> :<div className='adminContainer'>
            <div className='vectorSection'>
                <img src="https://res.cloudinary.com/dollmqugm/image/upload/v1710762905/vecteezy_cloud-computing-modern-flat-concept-for-web-banner-design_5879539_roxi5z.jpg" className='vector' alt="vectorimage" / >
                    </div>
        <h1 className='salutation'> Welcome to Admin Panel..!</h1>
        <div className='UpdatesContainer'>
            <button className='addBtn' type="button" onClick={()=>addCandidate()}>Add Candidate</button>
            <button className='updateBtn' type="button">Update Candidate</button>
            <button className='delBtn' type="button">remove candidate</button>
            <button className='userBtn' type="button" onClick={()=>userSetter()}>Go to User View</button>
        </div>
        <div className={isAdd?'showForm':'hideForm'}>
            <form className='addFormContainer' onSubmit={()=>onAddCandidate({key,name,party,wiki,summary,symbol,image})}>
                <h1 className='addHeading'>
                    Add Candidate Details
                </h1>
                <div className='input'>
                    <label htmlFor='name' className='name'>Name of Candidate</label>
                    <input type="text" id="name" value={name} onChange={e=> setName(e.target.value)} placeholder='Enter Candidate Name'/>
                </div>
                <div className='input'>
                    <label htmlFor='photo' className='photo'>Upload Image</label>
                    <input type="file" id="photo" value={image} placeholder='upload Image' onClick={e=> setimage(e.target.value)}/>
                </div>
                <div className='input'>
                    <label htmlFor='party' className='party'>Party</label>
                    <input type="text" id="party" placeholder='Enter Party Name' value={party} onChange={e=> setparty(e.target.value)}/>
                </div>
                <div className='input'>
                    <label htmlFor='wikilink' className='link'>Enter Wiki Link</label>
                    <input type="text" id="wikilink" placeholder='Enter Wiki Link' value={wiki} onChange={e=> setwiki(e.target.value)}/>
                </div>
                <div className='input'>
                    <label htmlFor='Partylink' className='link'>Logo url</label>
                    <input type="text" id="partylink" placeholder='Enter Party Link' value={symbol} onChange={e=> setsymbol(e.target.value)}/>
                </div>
                <div className='input'>
                    <label htmlFor='summary' className='summary'>Summary</label>
                    <input type="text" id="summary" placeholder='Give Summary of Candidate' value={summary} onChange={e=> setsummary(e.target.value)}/>
                </div>
                
                <button className='addCanBtn' type="submit" onClick={()=>onAddCandidate({key,name,party,wiki,summary,symbol,image})}>Add</button>
            </form>
        </div>
      </div>
        }
        </div>
    )
            }}
            </ListContext.Consumer>
    )

  }
 export default Admin