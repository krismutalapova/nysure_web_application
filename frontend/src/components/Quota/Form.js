import React from "react";
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const validTypes = ["vehicle", "home", "child", "pet", "travel", "life", "health", "business"];
function QuotaForm(props) {

    const isValid = (type) => {
        return validTypes.includes(type);
    }

    const { type } = props.match.params;

    return (
        <div>
            {common()}
            {specific(type)}
        </div>
    )
}

function common() {
    return <Form>
        <Form.Group controlId="formCommonInfo">
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
                        ["Single", "Married", "Common law spouse", "Single-parent"]
                        .map((radioLabel, index) => (
                            <Form.Check
                                inline
                                type="radio"
                                name="civilStatus"
                                id={"civilStatus"+index}
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
                <Col>
                    <Form.Label>Annual salary</Form.Label>
                    <Form.Control type="number" placeholder="Enter annual salary" />
                </Col>
            </Row>
            <Row className="m-1">
                <Col>
                    <Form.Label>Spouse's date of birth</Form.Label>
                    <Form.Control type="date" />
                </Col>
            </Row>
            <Row className="m-1">
                <Col>
                    <Form.Label>Spouse occupation</Form.Label>
                    <Form.Control type="text" placeholder="Enter occupation" />
                </Col>
                <Col>
                    <Form.Label>Spouse annual salary</Form.Label>
                    <Form.Control type="number" placeholder="Enter annual salary" />
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
                    <Form.Label>Work number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter work number" />
                    <Form.Text className="text-muted">We'll never share your work phone with anyone else.</Form.Text>
                </Col>
                <Col>
                    <Form.Label>Home number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter home number" />
                    <Form.Text className="text-muted">We'll never share your home phone with anyone else.</Form.Text>
                </Col>
            </Row>
        </Form.Group>
    </Form>
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
    return <div className="row-full">               
     <Col>
    <Form.Label>Make and model</Form.Label>
    <Form.Control type="text" placeholder="Enter make and model"/>
</Col>
<Col>
    <Form.Label>Year of production </Form.Label>
    <Form.Control type="text" placeholder="Enter year of production"/>
</Col>
</div>;
}

function home() {
    return <div className="row-full">    
     <Col>
    <Form.Label>Type of home </Form.Label>
    <Form.Control type="text" placeholder="Enter type of home"/>
</Col>
<Col>
    <Form.Label>Square footage</Form.Label>
    <Form.Control type="text" placeholder="Enter square footage"/>
</Col>
</div>;
}

function child() {
    return <div className="row-full">    
    <Col>
    <Form.Label>Nuber of children</Form.Label>
    <Form.Control type="text" placeholder="Nuber of children"/>
</Col>
<Col>
    <Form.Label>Year of birth</Form.Label>
    <Form.Control type="text" placeholder="Enter year of birth"/>
</Col>
</div>;
}

function pet() {
    return <div className="row-full">    
    <Col>
    <Form.Label>Nuber of pets</Form.Label>
    <Form.Control type="text" placeholder="Enter nuber of pets"/>
</Col>
<Col>
    <Form.Label>Year of birth</Form.Label>
    <Form.Control type="text" placeholder="Enter year of birth"/>
</Col>
</div>;
}

function travel() {
    return <div className="row-full">    
    <Col>
    <Form.Label>Where are you traveling to?</Form.Label>
    <Form.Control type="text" placeholder="Enter where are you traveling to"/>
</Col>
<Col>
    <Form.Label>Nuber of days of stay</Form.Label>
    <Form.Control type="text" placeholder="Enter nuber of days of stay"/>
</Col>
</div>;
}

function life() {
    return <div className="row-full">life</div>;
}

function health() {
    return <div className="row-full">health</div>;
}

function business() {
    return <div className="row-full">business</div>;
}

export default QuotaForm;