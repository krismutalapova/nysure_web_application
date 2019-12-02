import React from "react";

function ItemPopup({onClickCreateItem}) {
    const [itemType, setItemType] = React.useState("");
    
    const [insuranceType, setInsuranceType] = React.useState("");

    const handleSubmit = () => {
        console.log("oops");
        // Invoke the passed in event callback
        onClickCreateItem({itemType: itemType, 
            insuranceType: insuranceType});
    };
    
    return (
            <form id="item-form" style={itemStyle}>
            <div className="form-group">
                <label htmlFor="type"> Item type:</label> 
                    <select type="text" value={itemType} onChange={e => setItemType(e.target.value)} className="form-control" id="itemType">
                    <option value="no-item">No items loaded</option>
                    <option value="uyfkf">hej</option>
                    </select>       
            </div>
            <div className="form-group">
                <label htmlFor="type"> Insurance plan:</label> 
                    <select type="text" value={insuranceType} onChange={e => setInsuranceType(e.target.value)} className="form-control" id="insuranceType">
                    <option value="no-item">No items loaded</option>
                    <option value="uyfkf">hej</option>
                    </select>       
            </div>
            <button type="submit" className="btn btn-primary" id="id-submit" onClick={handleSubmit}>Create</button>
        </form>                  
    );
}
    const itemStyle= {
        color: 'black'
    }
  
  export default ItemPopup;