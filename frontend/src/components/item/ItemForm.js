import React from "react";
import Form from 'react-bootstrap/Form';


function ItemForm( {onClickCreateItem, insurances } ) {
    const [itemType, setItemType] = React.useState("no-type");
    const [itemBrand, setItemBrand] = React.useState("");
    const [itemModel, setItemModel] = React.useState("");
    const [insurance, setInsurance] = React.useState("no-insurance");
    const [itemPrice, setItemPrice] = React.useState("000.00");
    const [itemDate, setItemDate] = React.useState("yyyy-MM-dd");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onClickCreateItem({
            itemBrand: itemBrand,
            itemModel: itemModel,
            itemType: itemType,
            insurance: insurances.find(selectedInsurance => selectedInsurance.id === insurance),
            itemPrice: itemPrice,
            itemDate: itemDate,
        });

        // Clear the input field
        setItemBrand("");
        setItemModel("");
        setItemType("no-type");
        setInsurance("no-insurance");
        setItemDate("yyyy-MM-dd");
        setItemPrice("000.00");
        
    };

    return (
        <Form>
        <div style={itemStyle}>
        <div className="form-group">
            <Form.Label htmlFor="type"> Item type:</Form.Label> 
                <select type="text" value={itemType} onChange={e => setItemType(e.target.value)} className="form-control">
                <option value="no-type">No type selected</option>
                <option value="Art">Art</option>
                <option value="Bicycle">Bicycle</option>
                <option value="Boat">Boat</option>
                <option value="Car">Car</option>
                <option value="Clothing">Clothing</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Electronics">Electronics</option>
                <option value="Household">Household Item</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Other">Other</option>
                <option value="Pet">Pet</option>
                <option value="Sports">Sports & Outdoor</option>
                <option value="Tools">Tools</option>
                <option value="Toys">Toys</option>
                <option value="Vehicle">Vehicle</option>
                </select>       
        </div>
        <div className="form-group">
            <Form.Label htmlFor="start">Item Brand:</Form.Label>
            <Form.Control type="text" value={itemBrand} onChange={e => setItemBrand(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
            <Form.Label htmlFor="start">Item Model:</Form.Label>
            <Form.Control type="text" value={itemModel} onChange={e => setItemModel(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
            <Form.Label htmlFor="start">Date of Purchase:</Form.Label>
            <Form.Control type="date" value={itemDate} onChange={e => setItemDate(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
            <Form.Label htmlFor="start">Price of Item:</Form.Label>
            <Form.Control type="text" value={itemPrice} onChange={e => setItemPrice(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="type"> Insurance plan:</label>
                <select type="text" value={insurance} onChange={e => setInsurance(e.target.value)} className="form-control">
                <option key="initialOption" value="no-insurance">No insurance plan</option>
                {insurances.map(insurancePlan => {
                    return(
                    <option key={insurancePlan.id} value={insurancePlan.id}>{`${insurancePlan.company} - policy id: ${insurancePlan.id}`}</option>);
                })}
                </select>
        </div>
        
        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Create</button>
    </div>  
    </Form>                
    );
}

const itemStyle= {
    color: 'black'
}

const dateStyle= {
    
}
  
export default ItemForm;