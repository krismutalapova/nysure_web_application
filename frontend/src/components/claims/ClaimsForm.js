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
                <Form.Label>Incident date</Form.Label>
                <Form.Control type="date" />
            </Col>
        </Row>

        <Row className="m-1">
            <Col>
                <Form.Label>Incident description</Form.Label>
                <Form.Control as="textarea" rows="2" type="text" placeholder="Enter incident description" maxLength='500' />
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
        case "home":
            return home();
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
                <Form.Label>Location of incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" />
            </Col>
            <Col>
                <Form.Label> Responsibility </Form.Label>
                <Form.Control type="text" placeholder="responsibility" />
            </Col>
        </Row>
    </Form.Group>;
}

function home() {
    return <Form.Group controlId="formHomeInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Type of home </Form.Label>
                <Form.Control type="text" placeholder="Enter type of home" />
            </Col>
            <Col>
                <Form.Label>Square meters</Form.Label>
                <Form.Control type="number" placeholder="Enter square meters" />
            </Col>
        </Row>
    </Form.Group>;
}


function child() {
    return <Form.Group controlId="formChildInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" />
            </Col>
            <Col>
                <Form.Label>Specify concerned child </Form.Label>
                <Form.Control type="text" placeholder="concerned child" />
            </Col>
        </Row>
    </Form.Group>;
}

function pet() {
    return <Form.Group controlId="formPetInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Specify concerned pet</Form.Label>
                <Form.Control type="text" placeholder="concerned pet" />
            </Col>
            <Col>
                <Form.Label>Other parties involved</Form.Label>
                <Form.Control type="text" placeholder="parties involved" />
            </Col>
        </Row>
    </Form.Group>;
}

function travel() {
    return <Form.Group controlId="formTravelInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" placeholder="Enter destination" />
            </Col>
            <Col>
                <Form.Label>Duration of journey</Form.Label>
                <Form.Control type="number" placeholder="Enter duration of journey" />
            </Col>
        </Row>
    </Form.Group>;
}

function life() {
    return <Form.Group controlId="formLifeInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of the incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" />
            </Col>
            <Col>
                <Form.Label>Witnesses</Form.Label>
                <Form.Control type="text" placeholder="witnesses" />
            </Col>
        </Row>
    </Form.Group>;
}

function health() {
    return <Form.Group controlId="formHealthInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of the incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" />
            </Col>
            <Col>
                <Form.Label>Name of general practitioner</Form.Label>
                <Form.Control type="text" placeholder="general practioner" />
            </Col>
        </Row>
    </Form.Group>;
}

function business() {
    return <Form.Group controlId="formBusinessInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of business</Form.Label>
                <Form.Control type="text" placeholder="location of business" />
            </Col>
            <Col>
                <Form.Label>Witnesses</Form.Label>
                <Form.Control type="text" placeholder="witnesses" />
            </Col>
        </Row>
    </Form.Group>;
}


export default ClaimsForm;