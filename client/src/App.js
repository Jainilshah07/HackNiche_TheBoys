import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Prediction from './components/Prediction';
import Beginner from './pages/BeginnersGuide/Beginner';
import Budget from './pages/budget/Budget';
import DataLowRisk from './pages/budget/DataLowRisk';
import DataModerateRisk from './pages/budget/DataModerateRisk';
import Stocks from './pages/dataofrisks/Stocks';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Main from './pages/portfolio/Main';
import Profile from './pages/profile/Profile';
import SIP from './pages/Sip/SIP';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/profile' element={<Profile />}></Route>
          <Route exact path='/investment' element={<Budget />}></Route>
          <Route exact path='/Low-Risk' element={<DataLowRisk />}></Route>
          <Route exact path='/Moderate-Risk' element={<DataModerateRisk />}></Route>
          <Route exact path='/High-Risk' element={<DataModerateRisk />}></Route>
          <Route exact path='/financial-goal-plan' element={<SIP />}></Route>
          <Route exact path='/portfolio' element={<Main />}></Route>
          <Route exact path='/stocks-data' element={<Stocks />}></Route>
          <Route exact path='/prediction' element={<Prediction />}></Route>
          <Route exact path='/beginner' element={<Beginner />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
