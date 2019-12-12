import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import AboutUs from './components/infopages/AboutUs';
import InsurancePage from './components/insurance/InsurancePage';
import Quota from './components/Quota/Quota';
import QuotaForm from './components/Quota/Form';
import ItemPage from "./components/item/ItemPage";
import ProfilePage from "./components/profile/ProfilePage";
import ClaimsPage from "./components/claims/ClaimsPage";
import ClaimsForm from "./components/claims/ClaimsForm";



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
                            <InsurancePage user={user}/>
                        </Route>

                        <Route path="/aboutus">
                            <AboutUs/>
                        </Route>

                        <Route path="/quote/form/:type" component={QuotaForm}>
                        </Route>

                        <Route path="/quote/form">
                            <Quota/>
                        </Route>

                        <Route path="/quote">
                            <Quota/>
                        </Route>

                        <Route path="/item">
                            <ItemPage user={user}/>
                        </Route>

                        <Route path="/claims/form/:type" component={ClaimsForm}>
                        </Route>

                        <Route path="/claims/form">
                            <Quota/>
                        </Route>

                        <Route path="/claims">
                             <ClaimsPage/>
                         </Route>

                        <Route path="/profile">
                            <ProfilePage/>
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
