import {useState} from 'react'
import { FaSquareTwitter } from "react-icons/fa6";
import { FaWikipediaW } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiTelevisionBold } from "react-icons/pi";
import './index.css'

const MpListItem = props => {
    const {item}=props
    const [isMore,setMore] = useState(false)
    const getMore = () => {
        setMore({isMore:!isMore})
    }
    return(
        <div className='mpContainer'>
    <div className="mp">
        <div className="image">
            <img src={item.image} alt={item.name} className="personImage" />
        </div>
        <div className="details">
            <h1 className="name">{item.name}</h1>
            <button className="moreBtn" onClick={()=>getMore()}>{isMore ? item.party: 'More'}</button>
        </div>
        <div className='partySymbol'>
            <img src={item.symbol} alt={item.party} className='symbol'/>
        </div>  
    </div>
    <div className={isMore ? 'show':'hide'}>
            <div className='candidateSummary'>
                {item.summary}
            </div>
            <div className='links'>
               <a href="#" ><FaSquareTwitter className='linkIcon'/></a>
               <a href="#" ><FaFacebookSquare className='linkIcon'/></a>
               <a href={item.wiki} ><FaWikipediaW className='linkIcon1'/></a>
               <a href="#" ><FaInstagramSquare className='linkIcon'/></a>
               <a href="#" ><AiOutlineYoutube className='linkIcon'/></a>
               <a href="#" ><PiTelevisionBold className='linkIcon1'/></a>
            </div>
        </div>
    </div>
)
    }
    export default MpListItem