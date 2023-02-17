import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Budget from './pages/budget/Budget';
import DataLowRisk from './pages/budget/DataLowRisk';
import DataModerateRisk from './pages/budget/DataModerateRisk';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/profile' element={<Profile/>}></Route>
          <Route exact path='/investment' element={<Budget/>}></Route>
          <Route exact path='/Low-Risk' element={<DataLowRisk/>}></Route>
          {/* <Route exact path='/Moderate-Risk' element={<DataMod />}></Route> */}
          <Route exact path='/Moderate-Risk' element={<DataModerateRisk />}></Route>
          <Route exact path='/High-Risk' element={<DataModerateRisk />}></Route>
          <Route exact path='/financial-goal-plan' element={<DataModerateRisk />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
