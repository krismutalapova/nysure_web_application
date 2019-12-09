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
                <div className ="column">
                                <div className="row-full">
                    <div className="column">
                        <div className="card text-white estimated-spent">
                            <h4 className="">Estimated spent:</h4>
                            <br />
                            <p className="">SEK 122,334,454.00</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className ="column">
                                    <div className="row-full">
                    <div className="col-4 center-content">
                        <a href="/item" className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Photos / Items</p>
                        </a>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/insurance" className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Insurances linked</p>
                        </a>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims" className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Claims</p>
                        </a>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/quote" className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Get a quote</p>
                        </a>
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