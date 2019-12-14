import React from "react";

function ClaimsCard({ claim }) {
    return (
        <div className="card" style={cardStyle}>
            <div className="card-body" >
                <label htmlFor="type"> type:</label>
                <input disabled type="text" className="form-control" style={selectStyle} value={claim.type}></input>

                <label htmlFor="type"> Item:</label>
                <input disabled type="text" className="form-control" style={selectStyle} value={claim.item.itemType}></input>

                <label htmlFor="type"> Company:</label>
                <input disabled type="text" className="form-control" style={selectStyle} value={claim.item.insurance.company}></input>

                <label htmlFor="type"> Incident date:</label>
                <input disabled type="text" className="form-control" style={selectStyle} value={claim.incidentDate === "" ? "date not selected" : claim.incidentDate}></input>

                <label htmlFor="type">Incident description: </label>
                <input disabled type="text" className="form-control" style={selectStyle} value={claim.incidentDescription === "" ? "description not selected" : claim.incidentDescription}></input>

                {claimType(claim.type, claim.fieldA, claim.fieldB)}

                <label htmlFor="type">Status: </label>
                <input disabled type="text" className="form-control" style={selectStyle} value={claim.status}></input>
            </div>
        </div>
    )
}

function claimType(type, fieldA, fieldB) {
    switch (type) {
        case "vehicle":
            return specific("Location of incident", "Responsibility", fieldA, fieldB);
        case "child":
            return specific("Location of incident", "oncerned child", fieldA, fieldB);
        case "home":
            return specific("Type of home", "Square meters", fieldA, fieldB);
        case "pet":
            return specific("Concerned pet", "Other parties involved", fieldA, fieldB);
        case "travel":
            return specific("Destination", "Duration of journey", fieldA, fieldB);
        case "life":
            return specific("Location of the incident", "Witnesses", fieldA, fieldB);
        case "health":
            return specific("Location of incident", "Name of general practitioner", fieldA, fieldB);
        case "business":
            return specific("Location of business", "Witnesses", fieldA, fieldB);
        default:
            return "";
    }
}

function specific(descA, descB, fieldA, fieldB) {
   return( <React.Fragment>
        <label htmlFor="type">{`${descA}:`} </label>
        <input disabled type="text" className="form-control" style={selectStyle} value={fieldA === "" ? "not selected" : fieldA}></input>

        <label htmlFor="type">{`${descB}:`} </label>
        <input disabled type="text" className="form-control" style={selectStyle} value={fieldB === "" ? "description not selected" : fieldB}></input>
    </React.Fragment>
   )
}

const selectStyle = {
    width: '100%',
    margin: 'auto',
    marginBottom: '10px'
}

const cardStyle = {
    width: '80%',
    margin: 'auto'
}

export default ClaimsCard;