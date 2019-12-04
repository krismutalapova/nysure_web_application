import React, { Component } from "react";
import ItemForm from "./ItemForm";
import ItemApi from "../../api/ItemApi";

class ItemPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
        }
    }

    async onClickCreateItem(itemData){
        try {
            const response = await ItemApi.createItem(itemData);
            const item = response.data;
            const newItem = this.state.items.concat(item);

            this.setState({
                items: newItem,
            });
            }
        catch (e) {
            console.error(e);
        }
    }

    render() {
        const { items } = this.state;
        console.log(items);

        return (
            <div id="main-group">
                <div className="row">
                    <button type="button"
                        className="btn btn-outline-secondary btn-lg"
                        style={buttonStyle}
                        data-toggle="modal"
                        data-target={"#myModal"}> <i className="fa fa-plus"></i> 
                    </button>
                    &nbsp;&nbsp;
                    <button type="submit" disabled
                            className="btn btn-primary btn-lg"
                            style={buttonStyle}>Get a quote</button>
                    <div id="myModal" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">New item</h4>
                                    <button type="button" className="close" data-dismiss="modal"> &times;
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ItemForm onClickCreateItem={(itemData) => this.onClickCreateItem(itemData)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    { items.map(({ itemId, itemType, insurancePlan }) => {
                                return (
                                    <div key={itemId} className="card" style={cardStyle}>
                                    <div className="card-body">
                                        <h5 className="card-title">{itemType}</h5>
                                        <p className="card-text">{insurancePlan}</p>
                                        <p className="card-text"><small className="text-muted">Last modified 3 weeks ago.</small></p>
                                        <a href="#" className="btn btn-primary">View item</a>
                                    </div>
                                    </div>
                                );
                            })}
                </div>
            </div>
        );
    }
}

const cardStyle = {
    width: '30%',
    maxWidth: '400px',
    margin: '10px',
}

const buttonStyle = {
    marginRight: '10px',
    marginBottom: '10px',
}

export default ItemPage;