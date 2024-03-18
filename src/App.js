import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import MpList from './components/MpList';

const  App = () => (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Admin/>}/>
      <Route exact path="/mplist" element={<MpList/>}/>
    </Routes>
    </BrowserRouter>
  )

export default App;
