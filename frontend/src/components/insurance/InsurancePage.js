import React, { Component } from "react";
import InsuranceForm from "./InsuranceForm";
import InsuranceApi from "../../api/InsuranceApi";
import InsuranceCard from "./InsuranceCard";

class InsurancePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            insurances: [],
        }
    }

    async onClickCreateInsurance(insuranceData) {
        try {
            const response = await InsuranceApi.createInsurance(insuranceData);
            const insurance = response.data;
            const newInsurance = this.state.insurances.concat(insurance);

            this.setState({
                insurances: newInsurance,
            });
        }
        catch (e) {
            console.error(e);
        }
    }

    render() {
        const { insurances } = this.state;
        console.log(insurances);

        return (
            <div id="main-group">
                <div className="row">
                    <button type="button"
                        className="btn btn-outline-secondary btn-lg"
                        style={buttonStyle}
                        data-toggle="modal"
                        data-target={"#insuranceFormModal"}> <i className="fa fa-plus"></i>
                    </button>

                    <button type="submit" disabled
                        className="btn btn-lg font-weight-bold"
                        style={buttonStyle}>Add an insurance </button>
                    <div id="insuranceFormModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" alignText="center" >Select the company</h4>
                                    <button type="button" className="close" data-dismiss="modal"> &times;
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <InsuranceForm onClickCreateInsurance={(insuranceData) => this.onClickCreateInsurance(insuranceData)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {insurances.map(({ insuranceId, insuranceType, insurancePlan }) => {
                        return (
                            <div key={insuranceId} className="card" style={cardStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">{insuranceType}</h5>
                                    <p className="card-text">{!insurancePlan ? "no insurance plan" : insurancePlan}</p>
                                    <p className="card-text"><small className="text-muted">Last modified 3 weeks ago.</small></p>
                                    <button type="button"
                                        className="btn btn-primary"

                                        data-toggle="modal"
                                        data-target={"#insuranceCardModal"}> View insurance
                                        </button>
                                </div>
                                <div id="insuranceCardModal" className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">{insuranceType}</h4>
                                                <button type="button" className="close" data-dismiss="modal"> &times;
                                                    </button>
                                            </div>
                                            <div className="modal-body">
                                                <InsuranceCard />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const cardStyle = {
    width: '30%',
    maxWidth: '400px',
    margin: '10px',
}

const buttonStyle = {
    marginRight: '10px',
    marginBottom: '10px',
}

export default InsurancePage;