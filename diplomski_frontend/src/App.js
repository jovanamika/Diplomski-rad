import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LogInPage/LoginPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Registration from './Pages/RegistrationPage/Registration';
import Seminar from './Pages/SeminarsPage/Seminar';
import News from './Pages/NewsPage/News';
import Footer from './Components/Footer/Footer';
import { CardProvider } from './Contex/CardContex';
import CardDetail from './Pages/NewsPage/CardDetail';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CardProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/seminars" element={<Seminar/>}></Route>
            <Route exact path='/news' element={<News />}></Route>
            <Route path="/card" element={<CardDetail/>} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
