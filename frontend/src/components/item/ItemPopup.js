import React, { Component } from "react";

class ItemPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemType: "No type selected",
            insurancePlan: "No insurance plan selected",
        };
      }
    
      handleSubmit() {
        this.props.onClickCreateItem(
            this.state.itemType,
            this.state.insurancePlan,
        );
      }
    
    render(){
        const {itemType, insurancePlan} = this.state;

        return (
            <form id="item-form" style={itemStyle} onClick={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="type"> Item type:</label> 
                    <select type="text" value={itemType} onChange={e => this.setState({itemType: e.target.value})} className="form-control">
                    <option value="no-type">No type selected</option>
                    <option value="uyfkf">hej</option>
                    </select>       
            </div>
            <div className="form-group">
                <label htmlFor="type"> Insurance plan:</label> 
                    <select type="text" value={insurancePlan} onChange={e => this.setState({insurancePlan: e.target.value})} className="form-control">
                    <option value="no-insurance">No insurance plan selected</option>
                    <option value="uyfkf">hej</option>
                    </select>       
            </div>
            <button type="submit" className="btn btn-primary" id="id-submit">Create</button>
        </form>                  
        );
    }
}

const itemStyle= {
    color: 'black'
}
  
export default ItemPopup;