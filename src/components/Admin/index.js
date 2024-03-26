import React, {useState } from 'react'
import { Navigate } from 'react-router-dom'
import './index.css'
import ListContext from '../../context/ListContext'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const stateConstituency = [{"id":"1","name":"Andhra Pradesh", "constituencies":"25"},{"id":"2","name":"Arunachal Pradesh", "constituencies":"2"},{"id":"3","name":"Assam", "constituencies":"14"},{"id":"4","name":"Bihar", "constituencies":"40"},{"id":"5","name":"Chattisgarh", "constituencies":"11"},{"id":"6","name":"Goa", "constituencies":"2"},{"id":"7","name":"Gujarat", "constituencies":"26"},{"id":"8","name":"Haryana", "constituencies":"10"},{"id":"9","name":"Himachal Pradesh", "constituencies":"4"},{"id":"10","name":"Jharkhand", "constituencies":"14"},{"id":"11","name":"Karanataka", "constituencies":"28"},{"id":"12","name":"Kerala", "constituencies":"20"},{"id":"13","name":"Madhya Pradesh", "constituencies":"29"},{"id":"14","name":"Maharashtra", "constituencies":"48"},{"id":"15","name":"Manipur", "constituencies":"2"},
{"id":"16","name":"Meghalaya", "constituencies":"2"},{"id":"17","name":"Mizoram", "constituencies":"1"},{"id":"18","name":"Nagaland", "constituencies":"1"},{"id":"19","name":"Odisha", "constituencies":"21"},{"id":"20","name":"Punjab", "constituencies":"13"},{"id":"21","name":"Rajasthan", "constituencies":"25"},{"id":"22","name":"Sikkim", "constituencies":"1"},{"id":"23","name":"Tamilnadu", "constituencies":"39"},{"id":"24","name":"Telangana", "constituencies":"17"},{"id":"25","name":"Tripura", "constituencies":"2"},{"id":"26","name":"Uttar Pradesh", "constituencies":"80"},{"id":"27","name":"Uttarakhand", "constituencies":"5"},{"id":"28","name":"West Bengal", "constituencies":"42"},{"id":"29","name":"Andamon and Nicobar Islands", "constituencies":"1"},{"id":"30","name":"Chandigarh", "constituencies":"1"},{"id":"31","name":"Dadra and Nagar Haveli and Daman and Diu", "constituencies":"1"},
{"id":"32","name":"Lakshadweep", "constituencies":"1"},{"id":"33","name":"Delhi", "constituencies":"7"},{"id":"34","name":"Puducherry", "constituencies":"1"},]
const constituencies=["North Mumbai","Mumbai North-East","Mumbai-North-Central","Mumbai-North-West","Mumbai-South-Central","Mumbai South"]
const states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala" ,"madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal","Andaman and NicobarIslands","chandigarh","Lakshadweeep","Dadra and Nagar Haveli and Daman and Diu","Delhi","puducherry","Ladakh"]
function Admin() {
    const [isUserActive, setUserActive] = useState(false)
    const [isAdd, setCandidate] = useState(false)
    const [constituency, setconstituency] = useState()
    const [state, setState] = useState()
    const [name, setName] = useState("")
    const [party, setparty] = useState("")
    const [wiki, setwiki] = useState("")
    const [about, setAbout] = useState("")
    const [symbol, setsymbol] = useState("")
    const [image, setimage] = useState()
    const [youtube, setTube] = useState("")
    const [X, setX] = useState("")
    const [instagram, setinsta] = useState("")
    const [showList,setList]= useState(true)
    const [filteredList,setFilteredList]=useState([])
    const [showmenu,setMenu]=useState(true)
    const [showStates,setShowStates]=useState(false)
    const addCandidate = () => {
        setCandidate(!isAdd)
        setList(false)
    }
    const userSetter = () => {
        setUserActive({ isUserActive: !isUserActive })
    }
    const listCandidates = () => {
        setList(!showList)
    }
    const toggleMenubar = () => {
        setMenu(!showmenu)
    }
    const showStatesList = () => {
        setShowStates(!showStates)
    }
    return (
        <ListContext.Consumer>
            {value => {
                const { mpList, onAddCandidate } = value
                const search=`${state}`
                const getCandidates = () => {
                    const list = mpList.filter(item => item.summary.includes(search))
                    if(list.length> 0){
                    setFilteredList([...filteredList, list])
                    }
                    else{
                        setFilteredList([])
                    }
                }
                const key = mpList.length
                return (
                    <div>
                        {isUserActive ? <Navigate to="/mplist" /> : <div className='adminContainer'>
                            <div className={showmenu ? 'menuContainer':'hideMenuContainer'}>
                                <div className='navHeader'>
                            <h1 className='salutation'>BharatPol</h1>
                            <button type="button" className='closeMenu' onClick={()=>toggleMenubar()}><GiHamburgerMenu /></button>
                            </div>
                            <div className='UpdatesContainer'>
                                <button className={showList? 'listActiveBtn':'listInactiveBtn'} type="button" onClick={()=> listCandidates()}>list of Candidates</button>
                                <button className='addBtn' type="button" onClick={() => addCandidate()}>Add Candidate</button>
                                <button className='userBtn' type="button" onClick={() => userSetter()}>Go to User View</button>
                            </div>
                            </div>
                            <div className={showList ? 'showList':'hideList'} >
                            
                                <div className='headerContainer'>
                                <button type="button" className={showmenu ? 'hideMenu': 'showMenu'} onClick={()=>toggleMenubar()}><GiHamburgerMenu /></button>
                                <h1 className='highLighter'>LOK SABHA <br/>Candidates List</h1>
                                <div className='selectors'>
                            <div className='input'>
                                        <select value={state} id="stateName" onChange={e => setState(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="stateHeader">Select State</option>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='input'>
                                    
                                        <select id="constituencyName" onChange={e => setconstituency(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="constituencyHeader">Select Constituency</option>
                                            {constituencies.map(item => (
                                            <option value={constituency}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button  className='goBtn' type="button" onClick={e=> getCandidates(e)}>Go </button>
                                    <button onClick={()=>showStatesList()} type="button" className='showstatebtn'>States</button>
                                    <p><span className='spanner'>State:</span> {state}<br/> <span className='spanner'>Constituency:</span> {constituency}</p>
                                    </div>
                                    </div>
                                    <div className={showStates ? 'showStates': 'hideStates'}>
                                        <div className='sectionStates'>
                                            <div className="stateName">State/Union Territory</div>
                                            <div className='noconstituencies'>Number of Constituencies</div>
                                    </div>
                                    {stateConstituency.map(item => (
                                        <Link to="/${item.id}" style={{"text-decoration": "none"}}>
                                            <div className='state'>
                                            <p id='stateUTName'>{item.name}</p>
                                            <p className='noConstituencies'>{item.constituencies}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    </div>
                                    <div className='sections'>
                                        <div className='section'>Member</div>
                                        <div className='section'>Party</div>
                                        <div className='section1'>Votes</div>
                                        <div className='section2'>Details</div>
                                    </div>
                                    {filteredList.length > 0 &&
                                <div className='contentContainer'>
                              
                                    {filteredList[0].map(item=> (
                                       <div id="itemSection">
                                        <div className='member'>
                                            <img src={item.image} alt={item.name} className='candidateImage' />
                                            <p className='canName'>{item.name}</p>
                                        </div>
                                        <div className='PartyNames'>{item.party}</div>
                                        <div className='votes'>1000</div>
                                        <div className='details'>{item.summary}</div></div>
                                    ))}
                                
                                </div>
            }
                                
                                </div>
                            <div className={isAdd ? 'showForm' : 'hideForm'}>
                                <form className='addFormContainer' onSubmit={() => onAddCandidate({ key, name, party, wiki, about, youtube, X, symbol, image })}>
                                    <h1 className='addHeading'>
                                        Add Candidate Details
                                    </h1>
                                    <div className='input'>
                                        <label htmlFor="states" className='selection'>Select State</label>
                                        <select value={state} id="state" onChange={e => setState(e.target.value)}>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='constituency' className='selection'>select constituency</label>
                                        <select value={constituency} id="constituency" onChange={e => setconstituency(e.target.value)}>
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
                                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Candidate Name' />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='photo' className='photo'>Upload Photo</label>
                                        <input type="file" id="photo" value={image} placeholder='upload Image' onClick={e => setimage(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='party' className='party'>Party</label>
                                        <input type="text" id="party" placeholder='Enter Party Name' value={party} onChange={e => setparty(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='wikilink' className='link'>Enter Wiki Link</label>
                                        <input type="text" id="wikilink" placeholder='Enter Wiki Link' value={wiki} onChange={e => setwiki(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='Partylink' className='link'>Logo Link</label>
                                        <input type="text" id="partylink" placeholder='Enter Party Link' value={symbol} onChange={e => setsymbol(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='summary' className='summary'>About</label>
                                        <input type="text" id="summary" placeholder='Give Summary of Candidate' value={about} onChange={e => setAbout(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='youtube' className='link'>Enter Youtube Link</label>
                                        <input type="text" id="youtube" placeholder='Enter Youtube Link' value={youtube} onChange={e => setTube(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='instagram' className='link'>Enter Instagram Link</label>
                                        <input type="text" id="instagram" placeholder='Enter Instagram Link' value={instagram} onChange={e => setinsta(e.target.value)} />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='x' className='link'>Enter X Link</label>
                                        <input type="text" id="X" placeholder='Enter X Link' value={X} onChange={e => setX(e.target.value)} />
                                    </div>
                                    <button className='addCanBtn' type="submit" onClick={() => onAddCandidate({ key, name, party, wiki, about, youtube, X, symbol, image })}>Add</button>
                                </form>
                            </div>
                        </div>}
                    </div>
                )
            } }
        </ListContext.Consumer>
    )

}
 export default Admin