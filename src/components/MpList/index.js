import { GoLocation } from "react-icons/go";
import MpListItem from "../MpListItem";
import './index.css'
import {useState} from 'react'
import ListContext from "../../context/ListContext";


const states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala" ,"madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal","Andaman and NicobarIslands","chandigarh","Lakshadweeep","Dadra and Nagar Haveli and Daman and Diu","Delhi","puducherry","Ladakh"]
const MpList = () => {
    const [state, setState] = useState()
    const [constituency, setconstituency] = useState()
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
                                        <select value={state} id="state" onSelect={e => setState(e.target.value)}>
                                            {states.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='inp'>
                                        <label htmlFor='constituency' className='selection'>constituency</label>
                                        <select value={constituency} id="constituency" onSelect={e => setconstituency(e.target.value)}>
                                            <option value="North Mumbai">North Mumbai</option>
                                            <option value="Maharastra">Maharashtra</option>
                                            <option value="Mumbai North-East">Mumbai North-East</option>
                                            <option value="Mumbai North-central">Mumbai North-central</option>
                                            <option value="Mumbai North-west">Mumbai North West</option>
                                            <option value="Mumbai South-central">Mumbai South-central</option>
                                            <option value="Mumbai South">Mumbai South</option>
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