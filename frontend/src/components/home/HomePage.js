import React, { Component } from "react";
import ChartsPage from "../DummyChart.js";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="row-full">
                    <div className="column col-2">
                        <h4>Email</h4>
                        <p>some@test.com</p>
                        <h4>Address</h4>
                        <p>Buanvägen 72, 840 90  YTTERHOGDAL</p>
                        <h4>Phone</h4>
                        <p>0680-3676935</p>
                        <div className="card bg-cyan text-white estimated-spent">
                            <h4 className="">Estimated spent:</h4>
                            <br />
                            <p className="">SEK 122,334,454.00</p>
                        </div>
                    </div>
                    <div className="col-2">
                        {/* <canvas id="lineChart"></canvas> */}
                        <ChartsPage />
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