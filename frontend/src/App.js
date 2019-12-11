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
import ItemPage from "./components/item/ItemPage";
import AboutUs from './components/infopages/AboutUs';
import ContactDetails from './components/infopages/ContactDetails';
import InsurancePage from './components/insurance/InsurancePage';

import UserApi from "./api/UserApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);
  
  const loggedInRouter = (
            <Router>
                <Topbar onLogout={() => Auth.logout()} user={user} />
                <div className="container mt-5">
                    <Switch>
                        <Route path="/insurance">
                            <InsurancePage/>
                        </Route>

                        <Route path="/aboutus">
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
                <Navbar />
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
