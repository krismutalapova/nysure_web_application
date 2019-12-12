import React, { Component } from "react";
import Claims from "./Claims";
import ClaimsCard from "./ClaimsCard";



class ClaimsPage extends React.Component {
    render() {
        return (

            <div className="claims-main">
            
            <button
                type="btn btn-block"
                className="btn btn-info btn-block"
                data-toggle="modal"
                data-target="#cardModal">
                Add claim
                </button>
            <div id="cardModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="card-title">Add a claim</h4>
                            <button
                                type="button"
                                size="sm"
                                className="close"
                                data-dismiss="modal">
                                &times;
                                </button>
                        </div>
                        <div className="modal-body">
                            <ClaimsCard />
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="btn btn-block"
                className="btn btn-info btn-block"
                data-toggle="modal"
                data-target="#gridModal">
                Choose active insurance
                </button>

            <div id="gridModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="card-title">Insurance</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal">
                                &times;
                                </button>
                        </div>
                        <div className="modal-body">
                        
                            <div id="cardModal" className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="card-title">Add claim</h4>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal">
                                                &times;
                                </button>
                                        </div>
                                        <div className="modal-body">
                                            <ClaimsCard />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Claims />
                        </div>
                    </div>
                </div>
            </div>

            </div >

            


            

        )
    }
}

export default ClaimsPage;