import React from "react";

//Bootstrap elements
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Api's to fetch data
import ClaimsApi from "../../api/ClaimsApi";
import ItemApi from "../../api/ItemApi";
import UserApi from "../../api/UserApi";

function ClaimsForm(props) {
    const { type } = props.match.params;

    const [items, setItems] = React.useState([]);
    const [item, setItem] = React.useState("");
    const [user, setUser] = React.useState({});
    const [incidentDate, setIncidentDate] = React.useState("");
    const [incidentDescription, setIncidentDescription] = React.useState("");
    const [fieldA, setFieldA] = React.useState("");
    const [fieldB, setFieldB] = React.useState("");

    React.useEffect(() => {
        UserApi.current()
            .then((res) => {
                setUser(res.data.id);
                return ItemApi.getAllItemByUser(res.data.id);
            })
            .then((res) => {
                setItems(res.data)
            })
            .catch(err => console.error(err));

    }, []);

    const handleSubmit = () => {
        ClaimsApi.createClaims({
            type: type,
            incidentDate: incidentDate,
            incidentDescription: incidentDescription,
            fieldA: fieldA,
            fieldB: fieldB,
            status: "pending",
            item: { itemId: item },
            user: user,
        })
            .then(({ data }) => { window.location.href = "/claims";})
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Form>
                {common(item, incidentDate, incidentDescription, setIncidentDate, setIncidentDescription, setItem, items)}
                {specific(type, fieldA, setFieldA, fieldB, setFieldB)}
            </Form>

            <button
                type="btn btn-block"
                className="btn btn-info"
                style={{ padding: "10px", margin:"10px 20px 10px 20px"}}
                onClick={handleSubmit}>
                Create claim
            </button>
        </div>
    )
}

function common(item, incidentDate, incidentDescription, setIncidentDate, setIncidentDescription, setItem, items) {
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
                <Form.Control as="select" placeholder="Choose item" value={item} onChange={e => setItem(e.target.value)}>
                    <option>No item selected</option>
                    {items.filter(item => item.insurance !== null).map(item => <option key={item.itemId} value={item.itemId}>{`${item.itemType} - insurance: ${item.insurance.company}`}</option>)}
                </Form.Control>
            </Col>
        </Row>

        <Row className="m-1">
            <Col>
                <Form.Label>Incident date</Form.Label>
                <Form.Control type="date" value={incidentDate} onChange={e => setIncidentDate(e.target.value)} />
            </Col>
        </Row>

        <Row className="m-1">
            <Col>
                <Form.Label>Incident description</Form.Label>
                <Form.Control as="textarea" rows="2" type="text" placeholder="Enter incident description" maxLength='500'
                    value={incidentDescription} onChange={e => setIncidentDescription(e.target.value)} />

            </Col>
        </Row>
    </Form.Group>
}


function specific(type, fieldA, setFieldA, fieldB, setFieldB) {
    switch (type) {
        case "vehicle":
            return vehicle(fieldA, setFieldA, fieldB, setFieldB);
        case "child":
            return child(fieldA, setFieldA, fieldB, setFieldB);
        case "home":
            return home(fieldA, setFieldA, fieldB, setFieldB);
        case "pet":
            return pet(fieldA, setFieldA, fieldB, setFieldB);
        case "travel":
            return travel(fieldA, setFieldA, fieldB, setFieldB);
        case "life":
            return life(fieldA, setFieldA, fieldB, setFieldB);
        case "health":
            return health(fieldA, setFieldA, fieldB, setFieldB);
        case "business":
            return business(fieldA, setFieldA, fieldB, setFieldB);
        default:
            return <div className="row-full"></div>;
    }
}

function vehicle(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formVehicleInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label> Responsibility </Form.Label>
                <Form.Control type="text" placeholder="responsibility" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>

        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>
}

function home(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formHomeInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Type of home </Form.Label>
                <Form.Control type="text" placeholder="Enter type of home" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Square meters</Form.Label>
                <Form.Control type="text" placeholder="Enter square meters" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}

function child(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formChildInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Specify concerned child </Form.Label>
                <Form.Control type="text" placeholder="concerned child" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}

function pet(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formPetInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Specify concerned pet</Form.Label>
                <Form.Control type="text" placeholder="concerned pet" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Other parties involved</Form.Label>
                <Form.Control type="text" placeholder="parties involved" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}

function travel(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formTravelInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" placeholder="Enter destination" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Duration of journey</Form.Label>
                <Form.Control type="number" placeholder="Enter duration of journey" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}

function life(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formLifeInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of the incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Witnesses</Form.Label>
                <Form.Control type="text" placeholder="witnesses" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}

function health(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formHealthInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of the incident</Form.Label>
                <Form.Control type="text" placeholder="location of incident" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Name of general practitioner</Form.Label>
                <Form.Control type="text" placeholder="general practioner" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}

function business(fieldA, setFieldA, fieldB, setFieldB) {
    return <Form.Group controlId="formBusinessInfo">
        <Row className="m-1">
            <Col>
                <Form.Label>Location of business</Form.Label>
                <Form.Control type="text" placeholder="location of business" value={fieldA} onChange={e => setFieldA(e.target.value)} />
            </Col>
            <Col>
                <Form.Label>Witnesses</Form.Label>
                <Form.Control type="text" placeholder="witnesses" value={fieldB} onChange={e => setFieldB(e.target.value)} />
            </Col>
        </Row>
        <Row className="m-1">
            <Col>
                <Form.Text className="text-muted">*All information is confidential</Form.Text>
            </Col>
        </Row>
    </Form.Group>;
}


export default ClaimsForm;