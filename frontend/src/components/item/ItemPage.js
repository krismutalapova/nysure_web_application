import React, { Component } from "react";
import ItemForm from "./ItemForm";
import ItemApi from "../../api/ItemApi";
import ItemCard from "./ItemCard";


class ItemPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
        }
    }

    async onClickCreateItem(itemData) {
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

    componentDidMount() {
        //get all the items in the database
        ItemApi.getAllItem()
            .then(({ data }) => this.setState({ items: data }))
            .catch(err => console.error(err));
    }

    onClickDeleteItem(itemId) { 
        ItemApi.deleteItem(itemId)
        .then(res => {
            const newItems = this.state.items.filter(item => item.itemId !== itemId);
            this.setState({
                items: newItems
            });
        })
        .catch(err => console.error(err));
        };

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
                        data-target={"#itemFormModal"}> <i className="fa fa-plus"></i>
                    </button>
                    <button type="submit" disabled
                        className="btn btn-lg font-weight-bold"
                        style={buttonStyle}>Add a new item</button>
                    <Modal id="itemFormModal" title="Create an item">
                        <ItemForm onClickCreateItem={(itemData) => this.onClickCreateItem(itemData)} />
                    </Modal>
                </div>
                <div className="row">
                    {items.map((item) => {
                        return (
                            <div key={item.itemId} className="card" style={cardStyle}>
                                <div className="card-body">
                                <a className="fa fa-trash float-right"
                                    style={buttonStyle}
                                    href="#"
                                    onClick={() => this.props.onClickDeleteItem(this.props.item.itemId)}>
                                </a>
                                    <h5 className="card-title">{item.itemType}</h5>
                                    <p className="card-text">{!item.insurancePlan ? "No insurance plan." : item.insurancePlan}</p>
                                    <button type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target={`#itemCardModal-${item.itemId}`}
                                    > View item
                                        </button>
                                </div>
                                <Modal id={`itemCardModal-${item.itemId}`} title={item.itemType}>
                                    <ItemCard item={item} onClickDeleteItem={() => this.onClickDeleteItem(item.itemId)}/>
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