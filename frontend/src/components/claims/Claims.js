import React, { Component } from "react";
//import ReactDOM from "react-dom";



class Claims extends React.Component {
    constructor(props) {
        super(props);
        this.renderClaims =this.renderClaims.bind(this);
        this.state = {
            claims: [
                { 
                    
                    id: "hi",  
                    insurance: "allianz",
                    type: "all", 
                    claim: "active",
                    
                },

                { 
                    
                    id: "hello",  
                    insurance: "folksam",
                    type: "partial", 
                    claim: "inactive",
                    
                }
            ]

        }
    }

    //separate render function for the dynamic table
    renderClaims() {
        console.log("clicked")
        return this.state.claims.map ((item, index) => {
            const {id, insurance, type, claim} = item // breaking down the table stucture
            return (
                <div>
                    {this.renderClaimsHeader()}
                    <tr key={id} style={{padding:'15px', textAlign:'left'}}>
                    <td style={{padding:'5px 10px 5px 10px'}}>{insurance}</td> 
                    <td style={{padding:'5px 10px 5px 10px'}}>{type}</td>
                    <td style={{padding:'5px 10px 5px 10px'}}>{claim}</td>
                </tr>

                </div>
            
            )
        })  
    }

    //render the header
    renderClaimsHeader(){
    
        let header = Object.keys(this.state.claims[0]);
        return header.map((key, index) => {
            if (key !== "id")
            return <th key={index}>{key.toLowerCase()}</th>
        })

    }

    render(){
            return (
                <div>
                    <h1 className="claims-title" style={{color:'#899b9b'}}>Insurance</h1>
                    <table id="claims" style={tableStyle}>
                        <tbody>
                            {this.renderClaims()}
                        </tbody>
                    </table>
                </div>
            )
        
        }
    }
      


const tableStyle = {

    borderBottom: '3px solid #899b9b', 
    borderTop: '3px solid #899b9b',
    text: 'center',
    color: '#899b9b',
    font:  'Trebuchet MS, Arial, Helvetica, sans serif ',
    fontSize: '30px',  
    
};



export default Claims;
