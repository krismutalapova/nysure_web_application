import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
        return (
            <div>
                <div className="column">
                    <div className="row-full">
                        <div className="column">
                            <div className="card text-white estimated-spent">
                                <h4 className="">Estimated cost:</h4>
                                <br />
                                <p className="">SEK 122,334,454.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="row-full">
                        <div className="col-4 center-content">
                        <Link to="/item" className="nav-link">
                                <img className="btn-circle btn-circle-lg" src="/images/photo.png " alt="item" />
                            </Link>
                            <p>Items</p>
                        </div>
                        <div className="col-4 center-content">
                            <Link to="/insurance" className="nav-link">
                                <img className="btn-circle btn-circle-lg" src="/images/insurance.png " alt="insurance" />
                            </Link>
                            <p>Insurance</p>
                        </div>
                        <div className="col-4 center-content">
                            <Link to="/claims" className="nav-link">
                                <img className="btn-circle btn-circle-lg" src="/images/claims.png " alt="claims" />
                            </Link>
                            <p>Claims</p>
                        </div>
                        <div className="col-4 center-content">
                            <Link to="/quote" className="nav-link">
                                <img className="btn-circle btn-circle-lg" src="/images/quote.png " alt="quote" />
                            </Link>
                            <p>Get a quote</p>
                        </div>
                    </div>
                </div>
                <div className="row-full">
                    <div className="bottomPadding"></div>
                </div>
            </div>
        );
}

export default HomePage;