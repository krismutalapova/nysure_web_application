import React, {useState} from 'react';
import UserApi from "../../api/UserApi";

function Topbar({onLogout}) {
    const [user, setUser] = useState(UserApi.currentUser);
    UserApi.bindCurrentUserStateSetter(setUser);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark topBar">
            <a className="navbar-brand" href="/">
                <img src="images/NySure-Logo-96.png" alt="logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <p className="user">
                    Hi, {user.name || 'N/A'}
                    <a href="/user">
                        <span className="edit-info"></span>
                    </a>
                </p>
            </div>
            <button className="btn btn-outline-info my-2 my-sm-0" onClick={onLogout}>Logout</button>
        </nav>
    );
}

export default Topbar;
