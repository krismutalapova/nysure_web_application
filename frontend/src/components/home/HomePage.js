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
            <div className ="column col-10">
                                <div className="row-full">
                    <div className="column col-2">
                        <h4>Email</h4>
                        <p>{this.state.user.email}</p>
                        <div className="card bg-cyan text-white estimated-spent">
                            <h4 className="">Estimated spent:</h4>
                            <br />
                            <p className="">SEK 122,334,454.00</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className ="column col-10">
                                    <div className="row-full">
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Photos / Items</p>
                        </button>
                    </div>
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Insurances linked</p>
                        </button>
                    </div>
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Claims</p>
                        </button>
                    </div>
                    <div className="col-4 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Get a quote</p>
                        </button>
                    </div>
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