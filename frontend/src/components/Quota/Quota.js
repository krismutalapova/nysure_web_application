import React, { Component } from "react";

class Quota extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col center-content">
                        <a href="/quote/form/vehicle">
                            <img className="btn-circle btn-circle" src="/images/car2.png" alt="car2" />
                        </a>
                        <p>Vehicle</p>
                    </div>
                    <div className="col center-content">
                        <a href="/quote/form/home">
                        <img className="btn-circle" src="/images/home2.png" alt="home2" />
                        </a>
                        <p>Home</p>
                    </div>
                    <div className="col center-content">
                        <a href="/quote/form/child">
                        <img className="btn-circle" src="/images/children.png" alt="children" />
                        </a>
                        <p>Child</p>              
                    </div>
                    <div className="col center-content">
                        <a href="/quote/form/pet">
                        <img className="btn-circle" src="/images/pet.png" alt="pet" />
                        </a>
                        <p>Pet</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col center-content">
                        <a href="/quote/form/travel">
                        <img className="btn-circle" src="/images/plane2.png" alt="plane2" />
                        </a>
                        <p>Travel</p>
                    </div>
                    <div className="col center-content">
                        <a href="/quote/form/life">
                        <img className="btn-circle" src="/images/life.png" alt="life" />
                        </a>
                        <p>Life</p>                   
                    </div>
                    <div className="col center-content">
                        <a href="/quote/form/health">
                        <img className="btn-circle" src="/images/health.png" alt="health" />
                        </a>
                        <p>Health</p>
                    </div>
                    <div className="col center-content">
                        <a href="/quote/form/business">
                        <img className="btn-circle" src="/images/briefcase2.png" alt="briefcase2" />
                        </a>
                        <p>Business</p>
                    </div>
                </div>

                <div className="row-full">
                    <div className="bottomPadding"></div>
                </div>
            </div>
        )
    };

}

export default Quota;