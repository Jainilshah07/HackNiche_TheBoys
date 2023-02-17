import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Home /> } ></Route> */}
          <Route exact path='/login' element={<Login />} ></Route>
          {/* <Route exact path='/login' element={<Home />} ></Route> */}
          {/* <Route exact path='/register' element={<Register />} ></Route>
          <Route exact path='/collections' element={<Collection />} ></Route>
          <Route exact path='/funds' element={<Funds />} ></Route>
          <Route exact path='/kyc' element={<Kyc />} ></Route>
          <Route exact path='/order' element={<Order />} ></Route>
          <Route exact path='/begineer-guide' element={<Beginner />} ></Route>
          <Route exact path='/portfolio' element={<Portfolio />} ></Route>
          <Route exact path='/about-us' element={<About />} ></Route>
          <Route exact path='/book' element={<Book />} ></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
