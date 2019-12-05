import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import AboutUs from './components/infopages/AboutUs';
import InsuranceDetails from './components/insurance/InsuranceDetails';
import ItemPage from "./components/item/ItemPage";
import ContactDetails from './components/infopages/ContactDetails';
import ProfilePage from "./components/profile/ProfilePage";



function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  
  const loggedInRouter = (
            <Router>
                <Topbar onLogout={() => Auth.logout()} />
                <div className="container mt-5">
                    <Switch>
                        <Route path="/insurance">
                            <InsuranceDetails/>
                        </Route>

                        <Route path="/infopages">
                            <AboutUs/>
                        </Route>

                        <Route path="/infopages">
                            <ContactDetails/>
                        </Route>

                        <Route path="/item">
                            <ItemPage/>
                        </Route>

                        <Route path="/">
                          <HomePage/>
                        </Route>
                    </Switch>
                </div>
                <Navbar onLogout={() => Auth.logout()} />
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
