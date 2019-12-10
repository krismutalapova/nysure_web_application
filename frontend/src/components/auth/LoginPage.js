import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";

class LoginPage extends Component {
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
        else{
            UserApi.loadUser();
        }
    }

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            //alert("Couldn't register check credentials and try again");
            
            if(registrationData.password.length < 5) {
                alert("The password must contain at least 5 characters")
            }
            if(registrationData.password.length > 100){
                alert("The password must contain less than 100 characters")
            }
            if(!registrationData.password){
                alert("Please enter password")
            }
            const regex = '[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+';
            var match = registrationData.email.match(regex);
            if(!match){
                alert("Please enter valid email format")
            }
            
        }
        else{
            UserApi.loadUser();
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "transparent"}}>
                            <img className="NySureLogo" alt="NySure" src="NySureLogo.png" />
                            <p className="LoginSlogan">Simplifying what's important</p>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-12  strong-shadow">
                                    <LoginForm onSubmit={this.login} />
                                    <button
                                        type="btn btn-block"
                                        className="btn btn-info btn-block"
                                        data-toggle="modal"
                                        data-target="#myModal">
                                            Register
                                    </button>
                                </div>
                            <div id="myModal" className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="card-title">Register</h4>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal">
                                                    &times;
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <RegisterForm onSubmit={this.register}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginPage;