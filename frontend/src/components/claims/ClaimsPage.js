import React, { Component } from "react";
import ClaimsForm from "./ClaimsForm";
import ClaimsApi from "../../api/ClaimsApi";
import ClaimsSelection from "./ClaimsSelection";

class ClaimsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            claims: [],
        }
    }

    async onClickCreateClaims(claimsData) {
        try {
            const response = await ClaimsApi.changeStatus(claimsData);
            const claim = response.data;
            if (claim !== "") {
                const newclaim = this.state.claims.concat(claim);
                this.setState({
                claims: newclaim,
            });}
        }
        catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        //get all claims by status
        ClaimsApi.getAllByStatus("true")
            .then(({ data }) => this.setState({ claims: data }))
            .catch(err => console.error(err));
    }

    render() {
        const { claims } = this.state;
        console.log(claims);

        return (
            <div id="main-group">
                <div className="row">
                    <button type="button"
                        className="btn btn-outline-secondary btn-lg"
                        style={buttonStyle}
                        data-toggle="modal"
                        data-target={"#claimFormModal"}> <i className="fa fa-plus"></i>
                    </button>

                    <button type="submit" disabled
                        className="btn btn-lg font-weight-bold"
                        style={buttonStyle}>Add a claim </button>
                        <Modal id="claimFormModal" title="Choose type of insurance">
                                <ClaimsSelection />
                        </Modal>
                </div>
                <div className="row">
                    {claims.map(( claim ) => {
                        return (
                            <div key={claim.id} className="card" style={cardStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">{claim.type}</h5>
                                    <p className="card-text">{claim.company}</p>
                                    <p className="card-text">{claim.cost} SEK</p>
                                    <button type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target={`#claimCardModal-${claim.id}`}> View claim
                                        </button>
                                </div>
                                <Modal id={`claimCardModal-${claim.id}`} title={claim.type}>
                                     <claimCard claim={claim}/>
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
        <div className="modal-dialog modal-xl" style={modalBorderStyle}>
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
    width: '100%',
    maxWidth: '400px',
    margin: '10px',
}

const buttonStyle = {
    marginRight: '10px',
    marginBottom: '10px',
}

const modalBorderStyle = {
    borderRadius: '10px',
    width: 'auto', 
  }
  

  const modalForm= {
      width: '100%', 
  }



export default ClaimsPage;