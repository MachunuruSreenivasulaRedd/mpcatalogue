import { GoLocation } from "react-icons/go";
import MpListItem from "../MpListItem";
import './index.css'

const MpList = () => {
    const mplist=[
        { 
            key:1,
            image:"https://www.lokatantra.in/uploads/candidates_images/Gopal-Shetty-251x300.jpg",
            name:"Gopal Chinnayya Shetty",
            wiki:"https://en.wikipedia.org/wiki/Gopal_Shetty",
            party:"BJP",
            symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/270px-Bharatiya_Janata_Party_logo.svg.png"

        },
        { 
            key:2,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Gajanan_Kirtikar.jpg/330px-Gajanan_Kirtikar.jpg",
            name:"Gajanan Chandrakant Kirtikar",
            wiki:"https://en.wikipedia.org/wiki/Gajanan_Kirtikar",
            party:"shivsena",
            symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/270px-Logo_of_Shiv_Sena.svg.png"
        },
        { 
            key:3,
            image:"https://res.cloudinary.com/dollmqugm/image/upload/v1710762693/siddiq_om77hg.png",
            name:"zeeshan Siddique",
            wiki:"https://en.wikipedia.org/wiki/Zeeshan_Siddique",
            party:"congress",
            symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/225px-Indian_National_Congress_hand_logo.svg.png"
        }
        
    ]
    return(
        <div className="listContainer">
            <div className="topContainer">
                <h1 className="slogan">Aapke Umeedwar</h1>
            </div>
            <hr className="line" />
            <div className="locationFilter">
                <p className="location"> <GoLocation className="locationIcon"/> Navi Mumbai Parliamentary Constitution</p>
            </div>
            <div className="candidatesList">
                {mplist.map(item=> (
                    <MpListItem key={item.id} item={item} />
                ))}
            </div>
            
        </div>
    )
}
export default MpList