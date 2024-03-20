import { GoLocation } from "react-icons/go";
import MpListItem from "../MpListItem";
import './index.css'
import ListContext from "../../context/ListContext";

const MpList = () => (
        <ListContext.Consumer>
            {value => {
                const {mpList}=value
                console.log(mpList)
        return(
        <div className="listContainer">
            <div className="topContainer">
                <h1 className="slogan">Bharatpol</h1>
            </div>
            <hr className="line" />
            <div className="locationFilter">
                <p className="location"> <GoLocation className="locationIcon"/> Navi Mumbai Parliamentary Constitution</p>
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

export default MpList