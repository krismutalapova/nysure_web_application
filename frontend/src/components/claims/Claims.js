import React, { Component } from "react";
//import ReactDOM from "react-dom";


class Claims extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            insurances: [
                { 
                    id: "hello", 
                    insurance: "gradle", 
                    type: "badle", 
                    claim: "maven",
                }
            ]

        }
    }
    //separate render function for the dynamic table
    renderInsurances() {
        return this.state.insurances.map ((item, index) => {
            const {id, insurance, type, claim} = item // breaking down the table stucture
            return (
                <tr key={id}> 
                    <td>{insurance}</td> 
                    <td>{type}</td>
                    <td>{claim}</td>
                </tr>
            )
        })  
    }

    //render the header
    renderInsuranceHeader(){
        let header = Object.keys(this.state.insurances[0])
        return header.map((key, index) =>{
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render(){
            return (
                <div>
                    <h1 className="insurtitle">Insurances</h1>
                    <table id="insurances">
                        <tbody>
                            {this.renderInsurances()}
                        </tbody>
                    </table>
                </div>
            )
        
    }
      
}


export default Claims;