import React, { Component } from "react";
import UserApi from "../../api/UserApi.js";

class HomePage extends Component {
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
            <div>
                <div className="row-full">
                    <div className="column col-2">
                        <h4>Email</h4>
                        <p>{this.state.user.email}</p>
                        <h4>Address</h4>
                        <p>{this.state.user.address || 'N/A'}</p>
                        <h4>Phone</h4>
                        <p>{this.state.user.phone || 'N/A'}</p>
                        <div className="card bg-cyan text-white estimated-spent">
                            <h4 className="">Estimated spent:</h4>
                            <br />
                            <p className="">SEK 122,334,454.00</p>
                        </div>
                    </div>
                    <div className="col-2">
                    </div>
                </div>
                <div className="row-full">
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>photos / items</p>
                        </button>
                    </div>
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>insurances linked</p>
                        </button>
                    </div>
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>claims</p>
                        </button>
                    </div>
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>GET A QUOTA</p>
                        </button>
                    </div>
                </div>
                <div className="row-full">
                    <div className="bottomPadding"></div>
                </div>
            </div>
        );
    }
}

export default HomePage;