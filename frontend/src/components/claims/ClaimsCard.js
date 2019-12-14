import React from "react";

function ClaimsCard({claim}) {
        return (
            <div className="card" style={cardStyle}>
                <div className="card-body" >
                    <label htmlFor="type"> Item:</label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={claim.item.itemType}></input>

                    <label htmlFor="type"> Company:</label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={claim.item.insurance.company}></input>

                    <label htmlFor="type"> Incident date:</label>
                    <input disabled type="text"className="form-control" style={selectStyle} value={claim.incidentDate === "" ? "date not selected" : claim.incidentDate}></input>

                    <label htmlFor="type">Incident description: </label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={claim.incidentDescription === "" ? "description not selected" : claim.incidentDescription}></input>

                    <label htmlFor="type">Status: </label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={claim.status}></input>
                </div>
            </div>
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