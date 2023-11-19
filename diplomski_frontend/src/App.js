import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LogInPage/LoginPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Registration from './Pages/RegistrationPage/Registration';
import Seminars from './Pages/SeminarsPage/Seminar';
import News from './Pages/NewsPage/News';
import Footer from './Components/Footer/Footer';
import { CardProvider } from './Contex/CardContex';
import CardDetail from './Pages/NewsPage/CardDetail';
import { ChakraProvider } from '@chakra-ui/react';
import Profil from './Pages/ProfilPage/Profil';
import AdminPanel from './Pages/AdminPage/AdminPanel';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme();
  const isAdminLogged = false;
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <div className='App'>
          <BrowserRouter>
            <CardProvider>
              <Navbar isLogged={false} />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/registration" element={<Registration />} />
                <Route exact path="/seminars" element={<Seminars />}></Route>
                <Route exact path='/news' element={<News />}></Route>
                <Route path="/card" element={<CardDetail />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </CardProvider>
          </BrowserRouter>

          {!isAdminLogged && <Footer />}
        </div >
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
