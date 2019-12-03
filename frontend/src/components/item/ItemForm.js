import React from "react";

function ItemForm( {onClickCreateItem} ) {
    const [itemType, setItemType] = React.useState("");
    const [insurancePlan, setInsurancePlan] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onClickCreateItem({
            itemType: itemType,
            insurancePlan: insurancePlan,
        });
    };

    return (
        <div style={itemStyle}>
        <div className="form-group">
            <label htmlFor="type"> Item type:</label> 
                <select type="text" value={itemType} onChange={e => setItemType(e.target.value)} className="form-control">
                <option value="no-type">No type selected</option>
                <option value="uyfkf">hej</option>
                </select>       
        </div>
        <div className="form-group">
            <label htmlFor="type"> Insurance plan:</label> 
                <select type="text" value={insurancePlan} onChange={e => setInsurancePlan(e.target.value)} className="form-control">
                <option value="no-insurance">No insurance plan selected</option>
                <option value="uyfkf">hej</option>
                </select>       
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create</button>
    </div>                  
    );
}

const itemStyle= {
    color: 'black'
}
  
export default ItemForm;