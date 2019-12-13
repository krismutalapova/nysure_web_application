import React from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ClaimsForm(props) {

    const { type } = props.match.params;

    return (
        <div>
            <Form>
                {common()}
                {specific(type)}
            </Form>
            <button
                type="btn btn-block"
                className="btn btn-info btn-block"
                data-toggle="modal"
                data-target="#claimsPage">
                Create claim
            </button>
            <div id="claimsPage" className="wrapper modal fade" role="dialog">
                <div className="container">
                    <div className="row mt-4">
                            <div className="card-body">
                                    <div className="modal-dialog"> 
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="card-title">Claim</h4>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="modal">
                                                    &times;
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

function common() {
    return <Form.Group controlId="formCommonInfo">
        <Row className="m-1">
        
        </Row>
        <Row className="m-1">

        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label></Form.Label>
            </Col>
        
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label>Item</Form.Label>
                <Form.Control type="text" placeholder="Choose item" />
            </Col>
            <Col>
                <Form.Label>Insurance</Form.Label>
                <Form.Control type="text" placeholder="Choose insurance" />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label>Claim event date</Form.Label>
                <Form.Control type="date" />
            </Col>
        </Row>
       
        <Row className="m-1">
            <Col>
                <Form.Label>Claim description</Form.Label>
                <Form.Control as="textarea" rows="2" type="text" placeholder="Enter claim description" maxLength='500'/>
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                
                <Form.Text className="text-muted">All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>
}

function specific(type) {
    switch (type) {
        case "vehicle":
            return vehicle();
        case "child":
            return child();
        case "pet":
            return pet();
        case "travel":
            return travel();
        case "life":
            return life();
        case "health":
            return health();
        case "business":
            return business();
        default:
            return <div className="row-full"></div>;
    }
}

function vehicle() {
    return <Form.Group controlId="formVehicleInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Make and model</Form.Label>
                <Form.Control type="text" placeholder="Enter make and model" />
            </Col>
            <Col>
                <Form.Label>Year of production </Form.Label>
                <Form.Control type="date" placeholder="Enter year of production" />
            </Col>
        </Row>
    </Form.Group>;
}


function child() {
    return <Form.Group controlId="formChildInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Number of children</Form.Label>
                <Form.Control type="number" placeholder="Number of children" />
            </Col>
            <Col>
                <Form.Label>Year of birth</Form.Label>
                <Form.Control type="text" placeholder="Enter year(s) of birth" />
            </Col>
        </Row>
    </Form.Group>;
}

function pet() {
    return <Form.Group controlId="formPetInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Number of pets</Form.Label>
                <Form.Control type="number" placeholder="Enter number of pets" />
            </Col>
            <Col>
                <Form.Label>Year of birth</Form.Label>
                <Form.Control type="text" placeholder="Enter year(s) of birth" />
            </Col>
        </Row>
    </Form.Group>;
}

function travel() {
    return <Form.Group controlId="formTravelInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Where are you traveling to?</Form.Label>
                <Form.Control type="text" placeholder="Enter where are you traveling to" />
            </Col>
            <Col>
                <Form.Label>Number of days of stay</Form.Label>
                <Form.Control type="number" placeholder="Enter number of days of stay" />
            </Col>
        </Row>
    </Form.Group>;
}

function life() {
    return <Form.Group controlId="formLifeInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Are you a smoker?</Form.Label>
                <Form.Control type="text" placeholder="Are you a smoker" />
            </Col>
            <Col>
                <Form.Label>Is your spouse a smoker?</Form.Label>
                <Form.Control type="text" placeholder="Is your spouse a smoker" />
            </Col>
        </Row>
    </Form.Group>;
}

function health() {
    return <Form.Group controlId="formHealthInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Are you a smoker?</Form.Label>
                <Form.Control type="text" placeholder="Are you a smoker" />
            </Col>
            <Col>
                <Form.Label>Is your spouse a smoker?</Form.Label>
                <Form.Control type="text" placeholder="Is your spouse a smoker" />
            </Col>
        </Row>
    </Form.Group>;
}

function business() {
    return <Form.Group controlId="formBusinessInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Type of home</Form.Label>
                <Form.Control type="text" placeholder="Enter type of home" />
            </Col>
            <Col>
                <Form.Label>Square footage</Form.Label>
                <Form.Control type="text" placeholder="Enter square footage" />
            </Col>
        </Row>
    </Form.Group>;
}


export default ClaimsForm;