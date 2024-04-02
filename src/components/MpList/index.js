import { GoLocation } from "react-icons/go";
import MpListItem from "../MpListItem";
import './index.css'
import {useState} from 'react'
import ListContext from "../../context/ListContext";


const states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala" ,"madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal","Andaman and NicobarIslands","chandigarh","Lakshadweeep","Dadra and Nagar Haveli and Daman and Diu","Delhi","puducherry","Ladakh"]
const MpList = props => {
    const {stateWiseDetails,data} = props
    const [state, setState] = useState()
    const [filteredConstituency,setFilteredConstituencies]=useState([])
    const [constituency, setconstituency] = useState()
    const changeState = stateName => {
        setState(stateName)
        const constituencyid = stateWiseDetails.filter(item =>item.name===stateName)
        const {id} =constituencyid[0]
        const {de} = data[id-1]
        setFilteredConstituencies([...de])
        console.log(de);
        
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
                <div className='inp'>
                                        <label htmlFor="states" className='selection'>State</label>
                                        <select value={state} id="state" onChange={e => changeState(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="stateHeader">Select State</option>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='inp'>
                                        <label htmlFor='constituency' className='selection'>constituency</label>
                                        <select value={constituency} id="constituency" onChange={e => setconstituency(e.target.value)}>
                                        <option selected="selected" disabled="disabled" id="constituencyHeader">Select Constituency</option>
                                            {filteredConstituency.map(item => (
                                            <option value={constituency}>{Object.keys(item)}</option>
                                            ))}
                                        </select>
                                    </div>
            </div>
            <hr className="line" />
            <div className="locationFilter">
                <p className="location"> <GoLocation className="locationIcon"/> NorthMumbai Parliamentary Constitution</p>
            </div>
            <div className="candidatesList">
                {mpList.map(item=> (
                    <MpListItem key={item.key} item={item} />
                ))}
            </div>
        </div>
        )
   }}
     </ListContext.Consumer>
    )
}

export default MpList