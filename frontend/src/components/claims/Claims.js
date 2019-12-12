import React, { Component } from "react";
import ClaimsCard from "./ClaimsCard";



class Claims extends React.Component {
    constructor(props) {
        super(props);
        this.renderClaims =this.renderClaims.bind(this);
        this.state = {
            claims: [
                { 
                    
                    id: "hi",  
                    insurance: "allianz",
                    type: "home", 
                    claim: "active",
                    
                },

                { 
                    
                    id: "hello",  
                    insurance: "folksam",
                    type: "car", 
                    claim: "inactive",
                    
                }, 

                { 
                    
                    id: "hello",  
                    insurance: "bliwa",
                    type: "pet", 
                    claim: "active",
                    
                }, 

                { 
                    
                    id: "hello",  
                    insurance: "lansforsakring",
                    type: "travel", 
                    claim: "active",
                    
                }, 
                { 
                    
                    id: "hello",  
                    insurance: "bliwa",
                    type: "life", 
                    claim: "active",
                    
                }, 
            ]

        }
        
    }

    //separate render function for the dynamic table
    renderClaims() {
        //console.log("clicked")
        return this.state.claims.map ((item, index) => {
            const {id, insurance, type, claim} = item // breaking down the table stucture
            return (
                //<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
               
                <tr key={id} style={{padding:'20px', textAlign:'left'}}>
                    <td style={{padding:'5px 10px 5px 10px', width: '50%', textAlign:'left'}}>{insurance}</td> 
                    <td style={{padding:'5px 10px 5px 10px', width: '50%', textAlign:'left'}}>{type}</td>
                    <td style={{padding:'5px 10px 5px 10px', width: '100%', textAlign:'left'}}>{claim}</td>
                </tr>
              
            
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
                <div className= "table">
                    <h1 className="claims-title" style={{color:'#899b9b'}}>Claims</h1>
                    <table id="claims" style={tableStyle}>
                        <tbody>
                           <tr style={{textAlign:'left'}}>{this.renderClaimsHeader()}</tr> 
                            {this.renderClaims()}
                        </tbody>
                    </table>
                </div>
                

                <div class="card-body"> 
    <h5 class="card-title">Auto</h5>
        <p class="card-text">Bliwa</p>
        <p class="card-text">
            <small class="text-muted">Last modified 3 weeks ago.</small>
                </p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#insuranceCardModal-132523-2018"> View insurance</button>
        </div>  
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
    fontSize: '20px',  
    width: '100%', 
    
};



export default Claims;
