import React from "react";
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function QuotaForm(props) {

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
                data-target="#myModal">
                Submit
            </button>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog" style={{borderRadius: '10px'}}>
                    <div className="modal-content" style={{borderRadius: '10px'}}>
                        <div className="modal-header">
                            <h4 className="modal-title">Calculated quote:</h4>
                            <button type="button" className="close" data-dismiss="modal"> &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            {calculated(type)} Kr
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
        <Form.Text className="text-muted"> We are GDPR compliant.
        All your data is secure and won't be shared with a third party. </Form.Text>
        </Row>
        <Row className="m-1">
        
            <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
            </Col>
            <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label>Civil status</Form.Label>
            </Col>
            <Col>
                {
                    ["Single", "Married", "Common law spouse", "Other"]
                        .map((radioLabel, index) => (
                            <Form.Check
                                inline
                                type="radio"
                                name="civilStatus"
                                key={"civilStatus" + index}
                                label={radioLabel}
                            />
                        ))
                }
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label>Occupation</Form.Label>
                <Form.Control type="text" placeholder="Enter occupation" />
            </Col>
        </Row>

        <Row className="m-1">
            <Col>
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows="2" type="address" placeholder="Enter adress" />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Label>Contact number</Form.Label>
                <Form.Control type="phone" placeholder="Enter number" />
            </Col>
        </Row>
    </Form.Group>
}

function specific(type) {
    switch (type) {
        case "vehicle":
            return vehicle();
        case "home":
            return home();
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
                <Form.Label>Type of business</Form.Label>
                <Form.Control type="text" placeholder="Enter type of home" />
            </Col>
            <Col>
                <Form.Label>Square meters</Form.Label>
                 <Form.Control type="text" placeholder="Enter square footage" />
            </Col>
        </Row>
    </Form.Group>;
}

function calculated(type) {
    switch (type) {
        case "vehicle":
            return randomValue(5000, 10000);
        case "home":
            return randomValue(20000, 40000);
        case "child":
            return randomValue(2000, 5000);
        case "pet":
            return randomValue(1000, 3000);
        case "travel":
            return randomValue(500, 2500);
        case "life":
            return randomValue(2000, 5000);
        case "health":
            return randomValue(1000, 7000);
        case "business":
            return randomValue(25000, 75000);
        default:
            return randomValue(100000, 500000);
    }
}

function randomValue(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

export default QuotaForm;