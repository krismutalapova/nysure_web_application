import React, { Component } from "react";
import { Link } from "react-router-dom";
import InsuranceApi from "../../api/InsuranceApi";
import UserApi from "../../api/UserApi";


class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            balance: 0,
        }
    }

    numberWithCommas() {
        return this.state.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    componentDidMount() {
        //get the total cost of insurances
        UserApi.current()
            .then((res) => {
                return InsuranceApi.getSumByUser(res.data.id)})
            .then((res) => {
                this.setState({ balance: res.data })})
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <div className="column">
                    <div className="row-full">
                        <div className="column">
                            <div className="card text-white estimated-spent">
                                <h4 className="">Estimated monthly cost:</h4>
                                <h5 className="">{`${this.numberWithCommas()} SEK per month`}</h5>
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
    };
}

export default HomePage;