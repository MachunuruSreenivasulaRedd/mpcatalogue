import { GoLocation } from "react-icons/go";
import MpListItem from "../MpListItem";
import './index.css'
import Popup from 'reactjs-popup'
import {useState} from 'react'
import ListContext from "../../context/ListContext";
import { BsFillFilterCircleFill } from "react-icons/bs"

const stateConstituency = [{id:1,"name":"Andhra Pradesh", "constituencies":"25"},{"id":2,"name":"Arunachal Pradesh", "constituencies":"2"},{"id":3,"name":"Assam", "constituencies":"14"},{"id":4,"name":"Bihar", "constituencies":"40"},{"id":5,"name":"Chattisgarh", "constituencies":"11"},{"id":6,"name":"Goa", "constituencies":"2"},{"id":7,"name":"Gujarat", "constituencies":"26"},{"id":8,"name":"Haryana", "constituencies":"10"},{"id":9,"name":"Himachal Pradesh", "constituencies":"4"},{"id":10,"name":"Jharkhand", "constituencies":"14"},{"id":11,"name":"Karanataka", "constituencies":"28"},{"id":12,"name":"Kerala", "constituencies":"20"},{"id":13,"name":"Madhya Pradesh", "constituencies":"29"},{"id":14,"name":"Maharashtra", "constituencies":"48"},{"id":15,"name":"Manipur", "constituencies":"2"},
{"id":16,"name":"Meghalaya", "constituencies":"2"},{"id":17,"name":"Mizoram", "constituencies":"1"},{"id":18,"name":"Nagaland", "constituencies":"1"},{"id":19,"name":"Odisha", "constituencies":"21"},{"id":20,"name":"Punjab", "constituencies":"13"},{"id":21,"name":"Rajasthan", "constituencies":"25"},{"id":22,"name":"Sikkim", "constituencies":"1"},{"id":23,"name":"Tamilnadu", "constituencies":"39"},{"id":24,"name":"Telangana", "constituencies":"17"},{"id":25,"name":"Tripura", "constituencies":"2"},{"id":26,"name":"Uttar Pradesh", "constituencies":"80"},{"id":27,"name":"Uttarakhand", "constituencies":"5"},{"id":28,"name":"West Bengal", "constituencies":"42"},{"id":29,"name":"Andamon and Nicobar Islands", "constituencies":"1"},{"id":30,"name":"Chandigarh", "constituencies":"1"},{"id":31,"name":"Dadra and Nagar Haveli and Daman and Diu", "constituencies":"1"},
{"id":32,"name":"Lakshadweep", "constituencies":"1"},{"id":33,"name":"Delhi", "constituencies":"7"},{"id":34,"name":"Puducherry", "constituencies":"1"},]
const states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala" ,"madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal","Andaman and NicobarIslands","chandigarh","Lakshadweeep","Dadra and Nagar Haveli and Daman and Diu","Delhi","puducherry","Ladakh"]
const MpList = props => {
    const {stateWiseDetails,data} = props
    const [state, setState] = useState()
    const [filteredConstituency,setFilteredConstituencies]=useState([])
    const [constituency, setconstituency] = useState()
    const [showStates,setShowStates]=useState(false)
    const [showCandidates,setShowCandidates]=useState()
    const changeState = stateName => {
        setState(stateName)
        const constituencyid = stateWiseDetails.filter(item =>item.name===stateName)
        const {id} =constituencyid[0]
        const {de} = data[id-1]
        setFilteredConstituencies([...de])
        console.log(de);
        
    }
    const overlayStyle ={
        borderRadius:"8px"
    }

    const getCandidates = () => {
        if(constituency){
        setShowCandidates(true)
    }
}
   
    return(
        <ListContext.Consumer>
            {value => {
                const {mpList}=value
                console.log(mpList)
        return(
        <div className="listContainer">
            <div className="topContainer">
                <h1 className="slogan">BharatPol</h1>
                <div className="lg-options">
                <div className='input1'>
                                        <label htmlFor="states" className='selection'>State</label>
                                        <select value={state} id="state1" onChange={e => changeState(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="stateHeader">Select State</option>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='input1'>
                                        <label htmlFor='constituency' className='selection'>constituency</label>
                                        <select value={constituency} id="constituency1" onChange={e => setconstituency(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="constituencyHeader">Select Constituency</option>
                                            {filteredConstituency.map(item => (
                                            <option value={Object.keys(item)}>{Object.keys(item)}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button className="gobtn" onClick={()=>getCandidates()}>Go</button>
                                    </div>
                <Popup overlayStyles={overlayStyle} trigger={<button type="button" className="filterIcon"><BsFillFilterCircleFill/></button>} position="bottom" >
                <div className='input1'>
                                        <label htmlFor="states" className='selection'>State</label>
                                        <select value={state} id="state1" onChange={e => changeState(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="stateHeader">Select State</option>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='input1'>
                                        <label htmlFor='constituency' className='selection'>constituency</label>
                                        <select value={constituency} id="constituency1" onChange={e => setconstituency(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="constituencyHeader">Select Constituency</option>
                                            {filteredConstituency.map(item => (
                                            <option value={Object.keys(item)}>{Object.keys(item)}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button className="gobtn" onClick={()=>getCandidates()}>Go</button>
                                    </Popup>
            </div>
            
            {/* <button type="button" className="getStateBtn" onClick={()=>setShowStates(!showStates)}>States details</button> */}
            <hr className="line" />
            <div className="locationFilter">
                <h4 className={showCandidates? 'showSal':'hideSal'}>Welcome  to the <span className="constituencyHighlight">{constituency}</span> constituency! Know your candidates</h4>
                <p className="location"> <GoLocation className="locationIcon"/> {constituency} constitution</p>
            </div>
            <div className={showCandidates? 'candidatesList':'hideList'}>
                {mpList.map(item=> (
                    <MpListItem key={item.key} item={item} />
                ))}
            </div>
            {/* <div className={showStates ? 'showStates':'hideStates'}>
            <div className='statsContainer'>
                                            <div className='firstCard'>
                                                <h1>28</h1>
                                                <p className='highlight'>Total States</p>
                                            </div>
                                            <div className='secondCard'>
                                            <h1>6</h1>
                                                <p className='highlight'>Total UT's</p>
                                            </div>
                                            
                                            <div className='thirdCard'>
                                            <h1>34</h1>
                                                <p className='highlight'>Total states and UT</p>
                                            </div>
                                            </div>
                                            <table className='sectionStates'>
                                            <tbody>
                                            <tr>
                                            <th>State/Union Territory</th>
                                            <th className='noconstituencies'>Number of Constituencies</th>
                                        
                                            </tr>
                                    {stateConstituency.map(item => (
                                        
                                            <tr>
                                            <td ><button  key={item.id} className='stateColumn'>{item.name}</button></td>
                                            <td ><button  key={item.id}>{item.constituencies}</button></td>
                                            </tr>
                                            
                                
                                    ))}
                                    <tr><td>Total Constituencies</td>
                                    <td className='tot'>543</td>
                                    <td></td>
                                    </tr>
                                    </tbody>
                                    </table>
            </div> */}
        </div>
        )
   }}
     </ListContext.Consumer>
    )
}

export default MpList