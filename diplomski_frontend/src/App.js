import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LogInPage/LoginPage';
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
