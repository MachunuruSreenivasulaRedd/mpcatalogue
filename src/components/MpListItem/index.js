import {useState} from 'react'
import './index.css'

const MpListItem = props => {
    const {item}=props
    const [isMore,setMore] = useState(false)
    const getMore = () => {
        setMore({isMore:!isMore})
    }
    return(
    <div className="mp">
        <div className="image">
            <img src={item.image} alt={item.name} className="personImage" />
        </div>
        <div className="details">
            <h1 className="name">{item.name}</h1>
            <button className="moreBtn" onClick={()=>getMore()}>More</button>
        </div>
        <div className='partySymbol'>
            <img src={item.symbol} alt={item.party} className='symbol'/>
        </div>
    </div>
)
    }
    export default MpListItem