import React, { Component } from "react";
import ItemForm from "./ItemForm";
import ItemApi from "../../api/ItemApi";
import {deleteAllByItem} from "../../api/FileApi";
import InsuranceApi from "../../api/InsuranceApi";
import ItemCard from "./ItemCard";


class ItemPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            insurances: [],
        }
    }

    async onClickCreateItem({itemType, insurance}) {
        try {
            const response = await ItemApi.createItem({
                itemType: itemType,
                insurance: insurance,
                user: this.props.user
            });
            const item = response.data;
            const newItem = this.state.items.concat(item);

            this.setState({
                items: newItem,
            });
        }
        catch (e) {
            console.error(e);
        }
    };

    onClickDeleteItem(itemId) { 
        //delete files by item id and the item
        deleteAllByItem(itemId)
        .then((res) => {
            return ItemApi.deleteItem(itemId);
        })
        .then(res => {
            const newItems = this.state.items.filter(item => item.itemId !== itemId);
            this.setState({
                items: newItems
            });
        })
        .catch(err => console.error(err));
    };

    componentDidMount() {
        //get all the items in the database
        ItemApi.getAllItemByUser(this.props.user.id)
            .then(({ data }) => this.setState({ items: data }))
            .catch(err => console.error(err));

        //get all insurances by status
        InsuranceApi.getAllByUser(this.props.user.id, "true")
        .then(({ data }) => this.setState({ insurances: data }))
        .catch(err => console.error(err));
    };

    render() {
        const { items, insurances } = this.state;
        console.log(items);

        return (
            <div id="main-group">
                <div className="row">
                    <button type="button"
                        className="btn btn-outline-secondary btn-lg"
                        style={buttonStyle}
                        data-toggle="modal"
                        data-target={"#itemFormModal"}> <i className="fa fa-plus"></i>
                    </button>
                    <button type="submit" disabled
                        className="btn btn-lg font-weight-bold"
                        style={buttonStyle}>Add a new item</button>
                    <Modal id="itemFormModal" title="Create an item">
                        <ItemForm insurances={insurances} onClickCreateItem={(itemData) => this.onClickCreateItem(itemData)} />
                    </Modal>
                </div>
                <div className="row">
                    {items.map((item) => {
                        return (
                            <div key={item.itemId} className="card" style={cardStyle}>
                                <div className="card-body">
                                <a className="fa fa-trash float-right"
                                    style={buttonStyle}
                                    href="/item#"
                                    onClick={() => this.onClickDeleteItem(item.itemId)}>
                                </a>
                                    <h5 className="card-title">{item.itemType}</h5>
                                    <p className="card-text">{!item.insurance ? "No insurance plan." : `Insured by ${item.insurance.company}.`}</p>
                                    <button type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target={`#itemCardModal-${item.itemId}`}
                                    > View item
                                        </button>
                                </div>
                                <Modal id={`itemCardModal-${item.itemId}`} title={item.itemType}>
                                    <ItemCard item={item} />
                                </Modal>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const Modal = ({ children, id, title }) =>
    <div id={id} className="modal fade" role="dialog">
        <div className="modal-dialog" style={modalBorderStyle}>
            <div className="modal-content" style={modalBorderStyle}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                    <button type="button" className="close" data-dismiss="modal"> &times;
                                                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </div>

const cardStyle = {
    width: '30%',
    maxWidth: '400px',
    margin: '10px',
}

const buttonStyle = {
    marginRight: '10px',
    marginBottom: '10px',
}

const modalBorderStyle = {
    borderRadius: '10px',
  }

export default ItemPage;