import React from "react";

function ClaimsCard({claim}) {
        return (
            <div className="card" style={cardStyle}>
                <div className="card-body" >
                    <label htmlFor="type"> Policy ID:</label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={this.props.insurance.id}></input>

                    <label htmlFor="type">Company: </label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={this.props.insurance.company}></input>

                    <label htmlFor="type">Cost: </label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={this.props.insurance.cost}></input>

                    <label htmlFor="type">Type: </label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={this.props.insurance.type}></input>
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