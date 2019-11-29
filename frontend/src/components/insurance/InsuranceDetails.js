import React from "react";
import InsuranceApi from "./../../api/InsuranceApi";

class InsuranceDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            insurances : []
        };
    }
    componentDidMount() {
        InsuranceApi.getAllInsurances()
            .then(({data}) => this.setState({insurances: data}))
            .catch(err => console.error(err));
            
    }

    render (){
        console.log(this.state.insurances)
        return (
            
            <div>Hello Gradle</div>
        )
    }   
}
export default InsuranceDetails;