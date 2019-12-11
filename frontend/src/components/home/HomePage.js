import React from "react";

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
                            <a href="/item">
                                <img className="btn-circle btn-circle-lg" src="/images/photo.png " alt="item" />
                            </a>
                            <p>Items</p>
                        </div>
                        <div className="col-4 center-content">
                            <a href="/insurance">
                                <img className="btn-circle btn-circle-lg" src="/images/insurance.png " alt="insurance" />
                            </a>
                            <p>Insurance</p>
                        </div>
                        <div className="col-4 center-content">
                            <a href="/claims">
                                <img className="btn-circle btn-circle-lg" src="/images/claims.png " alt="claims" />
                            </a>
                            <p>Claims</p>
                        </div>
                        <div className="col-4 center-content">
                            <a href="/quote">
                                <img className="btn-circle btn-circle-lg" src="/images/quote.png " alt="quote" />
                            </a>
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