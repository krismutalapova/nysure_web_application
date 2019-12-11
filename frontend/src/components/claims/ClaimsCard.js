import React, { Component } from "react";

class ClaimsCard extends Component {
    constructor(props) {
        super(props);
        //this.renderClaimsCard = this.renderClaimsCard.bind(this);
        this.state = {
            claims: []

            // the kind of data I will need to fetch
        }
    };

    //getClaims() {
    //    this.setState({claims})
    //}

    //componentDidMount(){
    // this.getClaims();
    //}


    render() {
        return (

            <div className="card" style={cardStyle}>
                <div className="claims-body"></div>
                <label htmlFor="type">Company:</label>
                <select type="text" >
                    <option value="1">TreKronor</option>
                    <option value="2">Bliwa</option>
                    <option value="3">Dina</option>
                    <option value="4">Folksam</option>
                    <option value="5">Gjensidige</option>
                    <option value="6">Ica</option>
                    <option value="7">If</option>
                    <option value="8">Länsförsäkringar</option>
                    <option value="9">Moderna</option>
                    <option value="10">Skandia</option>
                    <option value="11">Svedea</option>
                    <option value="12">Trygg Hansa</option>
                    <option value="13">Volvia</option>
                </select>

                <label htmlFor="type">Type:</label>
                <select type="text">
                    <option value="1">Car/Land vehicle</option>
                    <option value="2">Boat</option>
                    <option value="3">Home</option>
                    <option value="4">Children</option>
                    <option value="5">Pet</option>
                    <option value="6">Vacation</option>
                    <option value="7">Life</option>
                    <option value="8">Occupation</option>
                    <option value="9">Business</option>
                </select>

                <label htmlFor="type">Item list:</label>
                <select type="text">
                    <option value="1">item1</option>/option>
                    <option value="2">item2</option>
                    <option value="3">item3</option>
                    <option value="4">item4</option>
                </select>

                <input type="date" id="claim-activated" name="claim-date"
                    value="YYYY-MM-DD"
                    min="2019-01-01" max="2019-12-31"></input>

                <input name="description" type="text" placeholder="Claim description"/>


                <button className="create-claim" type="button">
                    Create
                    </button>
            </div>
        )

    }

}

const cardStyle= {
    width: '80%',
    margin: 'auto', 



}


export default ClaimsCard;