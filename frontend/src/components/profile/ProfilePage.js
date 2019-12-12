import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import UserApi from "../../api/UserApi.js";

class ProfilePage extends Component {
state = {
        user: {
            id: "Loading...",
            name: "Loading...",
            email: "Loading...",
            address: "Loading...",
            phone: "Loading...",
        }
    }

    setCurrentUser(userObject) {
        this.setState({ user: userObject.data });
    }

    constructor(props) {
        super(props);
        this.loadUser();
    }

    async loadUser() {
        try {
            let userObject = await UserApi.current();
            this.setState({ user: userObject.data });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "transparent"}}>
                            <img alt="profile pic"
                                className="img-circle"
                                src="images/alberto.jpg"
                                />
                            <p>ID</p>
                        </div>

                        <div className="card-body">
                            <div>
                                <div className="col-12  strong-shadow">
                                    <ProfileForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;