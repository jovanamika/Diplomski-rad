import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LogInPage/LoginPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Registration from './Pages/RegistrationPage/Registration';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/registration" element={<Registration/>}/>
        </Routes>
    </BrowserRouter>
    <Footer/>
</div>
  );
}

export default App;
