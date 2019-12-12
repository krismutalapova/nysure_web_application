import React, { Component } from "react";

class ClaimsSelection extends Component {
    render() {
        return (
            <div>
                <div className="row-100">
                    <div className="col-4 center-content">
                        <a href="/claims/claimsSelection/vehicle"> {/*Add correct href*/}
                            <img className="btn-circle btn-circle" src="/images/car2.png" alt="car2" />
                        </a>
                        <p>Vehicle</p>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims/form/home">
                        <img className="btn-circle btn-circle" src="/images/home2.png" alt="home2" />
                        </a>
                        <p>Home</p>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims/form/child">
                        <img className="btn-circle btn-circle" src="/images/children.png" alt="children" />
                        </a>
                        <p>Child</p>              
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims/form/pet">
                        <img className="btn-circle btn-circle" src="/images/pet.png" alt="pet" />
                        </a>
                        <p>Pet</p>
                    </div>
                </div>
                <div className="row-100">
                    <div className="col-4 center-content">
                        <a href="/claims/form/travel">
                        <img className="btn-circle btn-circle" src="/images/plane2.png" alt="plane2" />
                        </a>
                        <p>Travel</p>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims/claimsform/life">
                        <img className="btn-circle btn-circle" src="/images/life.png" alt="life" />
                        </a>
                        <p>Life</p>                   
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims/form/health">
                        <img className="btn-circle btn-circle" src="/images/health.png" alt="health" />
                        </a>
                        <p>Health</p>
                    </div>
                    <div className="col-4 center-content">
                        <a href="/claims/form/business">
                        <img className="btn-circle btn-circle" src="/images/briefcase2.png" alt="briefcase2" />
                        </a>
                        <p>Business</p>
                    </div>
                </div>
            </div>
        )
    };

}

export default ClaimsSelection;