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
            const response = await InsuranceApi.changeStatus(insuranceData);
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

    componentDidMount() {
        //get all insurances by status
        InsuranceApi.getAllByStatus("true")
            .then(({ data }) => this.setState({ insurances: data }))
            .catch(err => console.error(err));
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
                        <Modal id="insuranceFormModal" title="Create an insurance">
                                <InsuranceForm onClickCreateInsurance={(insuranceData) => this.onClickCreateInsurance(insuranceData)} />
                        </Modal>
                </div>
                <div className="row">
                    {insurances.map(( insurance ) => {
                        return (
                            <div key={insurance.id} className="card" style={cardStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">{insurance.type}</h5>
                                    <p className="card-text">{insurance.company}</p>
                                    <p className="card-text"><small className="text-muted">Last modified 3 weeks ago.</small></p>
                                    <button type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target={`#insuranceCardModal-${insurance.id}`}> View insurance
                                        </button>
                                </div>
                                <Modal id={`insuranceCardModal-${insurance.id}`} title={insurance.type}>
                                     <InsuranceCard insurance={insurance}/>
                                </Modal>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const Modal = ({ children, id, title }) =>
    <div id={id} className="modal fade" role="dialog">
        <div className="modal-dialog" style={modalBorderStyle}>
            <div className="modal-content" style={modalBorderStyle}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                    <button type="button" className="close" data-dismiss="modal"> &times;
                                                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </div>


const cardStyle = {
    width: '30%',
    maxWidth: '400px',
    margin: '10px',
}

const buttonStyle = {
    marginRight: '10px',
    marginBottom: '10px',
}

const modalBorderStyle = {
    borderRadius: '10px',
  }



export default InsurancePage;