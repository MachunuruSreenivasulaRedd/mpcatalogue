import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import MpList from './components/MpList';
import ListContext from './context/ListContext'
import { Component } from 'react';

const List=[
{ 
  key:1,
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Shri_Piyush_Goyal_Minister_of_Commerce_and_Industry_addressing_a_press_conference_%284%29.jpg/330px-Shri_Piyush_Goyal_Minister_of_Commerce_and_Industry_addressing_a_press_conference_%284%29.jpg",
  name:"Piyush vedprakash Goyal",
  wiki:"https://en.wikipedia.org/wiki/Piyush_Goyal",
  party:"BJP",
  youtube:"",
  X:"",
  symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/270px-Bharatiya_Janata_Party_logo.svg.png",
  summary:"Piyush Vedprakash Goyal (born 13 June 1964) is an Indian politician and chartered accountant serving as a cabinet minister in the Government of India, having portfolios such as Minister of Textiles, Minister of Commerce and Industry and Minister of Consumer Affairs, Food and Public Distribution. He was elevated to the Cabinet Minister position on 3 September 2017 from Maharashtra"
},
{ 
  key:2,
  image:"https://www.lokatantra.in/uploads/candidates_images/K8HXP7uA.jpg",
  name:"Gajanan Chandrakant Kirtikar",
  wiki:"https://en.wikipedia.org/wiki/Gajanan_Kirtikar",
  party:"shivsena",
  youtube:"",
  X:"",
  symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/270px-Logo_of_Shiv_Sena.svg.png",
  summary:'Gajanan Kirtikar is Leader of Shivsena and a Member of Parliament (MP) from Mumbai North West (Lok Sabha constituency) in Mumbai, Maharashtra, India.[1] He has been a Member of Legislative Assembly from Malad assembly constituency in Mumbai from 1990 to 2009'
},
{ 
  key:3,
  image:"https://res.cloudinary.com/dollmqugm/image/upload/v1710762693/siddiq_om77hg.png",
  name:"zeeshan Siddique",
  wiki:"https://en.wikipedia.org/wiki/Zeeshan_Siddique",
  party:"congress",
  youtube:"",
  X:"",
  symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/225px-Indian_National_Congress_hand_logo.svg.png",
  summary:'Zeeshan Baba Siddique (born 3 October 1992) is an Indian politician from the Indian National Congress. He is currently a Member of the Legislative Assembly in Maharashtra Legislative Assembly.[1] & President of Mumbai Youth Congress.'
},
{ 
  key:4,
  image:"https://media.istockphoto.com/id/1200971027/vector/vector-illustration-of-indian-political-leader.jpg?s=612x612&w=0&k=20&c=BcuGix1OLdLi0Y89PlF8Nl5tvOACWkXfnDnsb-AKc8I=",
  name:"zeeshan Siddique",
  wiki:"https://en.wikipedia.org/wiki/Zeeshan_Siddique",
  party:"RP1",
  youtube:"",
  X:"",
  symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/225px-Indian_National_Congress_hand_logo.svg.png",
  summary:'Zeeshan Baba Siddique (born 3 October 1992) is an Indian politician from the Indian National Congress. He is currently a Member of the Legislative Assembly in Maharashtra Legislative Assembly.[1] & President of Mumbai Youth Congress.'
},
{ 
  key:5,
  image:"https://media.istockphoto.com/id/1200971027/vector/vector-illustration-of-indian-political-leader.jpg?s=612x612&w=0&k=20&c=BcuGix1OLdLi0Y89PlF8Nl5tvOACWkXfnDnsb-AKc8I=",
  name:"zeeshan Siddique",
  wiki:"https://en.wikipedia.org/wiki/Zeeshan_Siddique",
  party:"RP1",
  youtube:"",
  X:"",
  symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/225px-Indian_National_Congress_hand_logo.svg.png",
  summary:'Zeeshan Baba Siddique (born 3 October 1992) is an Indian politician from the Indian National Congress. He is currently a Member of the Legislative Assembly in Maharashtra Legislative Assembly.[1] & President of Mumbai Youth Congress.'
}

]

class App extends Component {
  state ={mpList:List}

  onAddCandidate = data => {
    const {mpList}=this.state
    this.setState({mpList:[...mpList,data]})
    console.log(data)
  }
  render(){
    const {mpList}=this.state
  return(
    <ListContext.Provider value={{mpList,onAddCandidate:this.onAddCandidate}}>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Admin/>}/>
      <Route exact path="/mplist" element={<MpList/>}/>
    </Routes>
    </BrowserRouter>
    </ListContext.Provider>
  )
  }
}

export default App;
