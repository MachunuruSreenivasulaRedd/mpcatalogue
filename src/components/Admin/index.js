import React, {useState } from 'react'
import { Navigate } from 'react-router-dom'
import './index.css'
import ListContext from '../../context/ListContext'

const  Admin = () => {
    const [isUserActive,setUserActive]= useState(false)
    const [isAdd,setCandidate]=useState(false)
    const [constituency,setconstituency]=useState()
    const [name,setName]=useState("")
    const [party,setparty]=useState("")
    const [wiki,setwiki]=useState("")
    const [about,setAbout]=useState("")
    const [symbol,setsymbol]=useState("")
    const [image,setimage]=useState()
    const [youtube,setTube]=useState("")
    const [X,setX]=useState("")
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
            <form className='addFormContainer' onSubmit={()=>onAddCandidate({key,name,party,wiki,about,youtube,X,symbol,image})}>
                <h1 className='addHeading'>
                    Add Candidate Details
                </h1>
                <div className='input'>
                    <label htmlFor='constituency' className='selection'>select constituency</label>
                    <select value={constituency} id="constituency" onSelect={e=> setconstituency(e.target.value)}>
                        <option value="North Mumbai">North Mumbai</option>
                        <option value="Maharastra">Maharashtra</option>
                        <option value="Mumbai North-East">Mumbai North-East</option>
                        <option value="Mumbai North-central">Mumbai North-central</option>
                        <option value="Mumbai North-west">Mumbai North West</option>
                        <option value="Mumbai South-central">Mumbai South-central</option>
                        <option value="Mumbai South">Mumbai South</option>
                    </select>
                </div>
                <div className='input'>
                    <label htmlFor='name' className='name'>Candidate Name</label>
                    <input type="text" id="name" value={name} onChange={e=> setName(e.target.value)} placeholder='Enter Candidate Name'/>
                </div>
                <div className='input'>
                    <label htmlFor='photo' className='photo'>Upload Photo</label>
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
                    <label htmlFor='summary' className='summary'>About</label>
                    <input type="text" id="summary" placeholder='Give Summary of Candidate' value={about} onChange={e=> setAbout(e.target.value)}/>
                </div>
                <div className='input'>
                    <label htmlFor='youtube' className='link'>Enter Youtube Link</label>
                    <input type="text" id="youtube" placeholder='Enter Youtube Link' value={youtube} onChange={e=> setTube(e.target.value)}/>
                </div>
                <div className='input'>
                    <label htmlFor='x' className='link'>Enter X Link</label>
                    <input type="text" id="X" placeholder='Enter X Link' value={X} onChange={e=> setX(e.target.value)}/>
                </div>
                <button className='addCanBtn' type="submit" onClick={()=>onAddCandidate({key,name,party,wiki,about,youtube,X,symbol,image})}>Add</button>
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