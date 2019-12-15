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
        else {
            UserApi.loadUser();
        }
    }

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            //alert("Couldn't register check credentials and try again");
            var alertMessage = "";
            const regexID = '[0-9]{8}-[0-9]{4}';
            var matchID = registrationData.id.match(regexID);
            if (!matchID) {
                alertMessage = alertMessage + "Please enter valid Person number format\n";
            }
            if (!registrationData.email) {
                alertMessage = alertMessage + "Please enter your email address\n";
            }
            const regexEmail = '[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+';
            var matchEmail = registrationData.email.match(regexEmail);
            if (!matchEmail) {
                alertMessage = alertMessage + "Please enter a valid email format\n";
            }
            if (!registrationData.password) {
                alertMessage = alertMessage + "Please enter password\n";
            }
            if (registrationData.password.length < 5) {
                alertMessage = alertMessage + "The password must contain at least 5 characters\n";
            }
            if (registrationData.password.length > 100) {
                alertMessage = alertMessage + "The password must contain less than 100 characters\n";
            }
            if (alertMessage === "") {
                alert("Couldn't register check credentials and try again\n");
            } else {
                alert(alertMessage)
            }
        }
        else {
            UserApi.loadUser();
        }
    }

    render() {
        return (

            <div className="row">
                <div className="col-2 center-content" >
                    <img
                        className="NySureLogo"
                        alt="NySure"
                        src="/images/NySure-Logo.png" />
                        <h3 className="col center-content LoginSlogan">
                            <strong>INSURANCE ON YOUR TERMS</strong>
                        </h3>
                </div>
                
                <div className="col center-content" style={loginCard}>
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-white">Enter your details:</h3>
                        </div>
                        <LoginForm onSubmit={this.login} />
                        <button
                            type="button"
                            className="btn btn-outline-info my-2 my-sm-0 btn-block "
                            data-toggle="modal"
                            data-target="#registerModal">
                            <strong>Register</strong>
                        </button>
                        <Modal className="card border-0" id="registerModal" title="Nysure Registration">
                            <RegisterForm onSubmit={this.register} />
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

const Modal = ({ children, id, title }) =>
    <div id={id} className="modal fade" role="dialog">
        <div className="modal-dialog" style={modalBorderStyle}>
            <div className="modal-content" style={modalBorderStyle}>
                <div className="modal-header" style={modalBorderStyle}>
                    <h4 className="modal-title border-0">{title}</h4>
                    <button type="button" className="close" data-dismiss="modal">
                        &times;
                    </button>
                </div>
                <div className="modal-body border-0" style={modalBorderStyle}>
                    {children}
                </div>
            </div>
        </div>
    </div>

const loginCard = {
    marginTop: '125px',
    marginRight: '50px',
}

const modalBorderStyle = {
    border: 'none',
    borderRadius: '10px',
  }

export default LoginPage;