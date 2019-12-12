import React from "react";

function ItemForm( {onClickCreateItem} ) {
    const [itemType, setItemType] = React.useState("no-type");
    const [insurancePlan, setInsurancePlan] = React.useState("no-insurance");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onClickCreateItem({
            itemType: itemType,
            insurance: insurancePlan,
        });

        // Clear the input field
        setItemType("no-type");
        setInsurancePlan("no-insurance");
    };

    return (
        <div style={itemStyle}>
        <div className="form-group">
            <label htmlFor="type"> Item type:</label> 
                <select type="text" value={itemType} onChange={e => setItemType(e.target.value)} className="form-control">
                <option value="no-type">No type selected</option>
                <option value="Person">Person</option>
                <option value="Home">Home</option>
                <option value="Motor vehicle">Motor vehicle</option>
                <option value="Electronic device">Electronic device</option>
                </select>       
        </div>
        <div className="form-group">
            <label htmlFor="type"> Insurance plan:</label>
                <select type="text" value={insurancePlan} onChange={e => setInsurancePlan(e.target.value)} className="form-control">
                <option value="no-insurance">No insurance plan</option>
                </select>
        </div>
        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Create</button>
    </div>                  
    );
}

const itemStyle= {
    color: 'black'
}
  
export default ItemForm;