import React, { Component } from "react";
import ItemPopup from "./ItemPopup";
import ItemApi from "../../api/ItemApi";

class ItemPage extends Component {

    async onClickCreateItem(item){
        console.log("hej");
        try {
            await ItemApi.createItem(item);
            }
        catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="card mt-3">
                <div className="card-body">
                    <button type="button" className="btn btn-outline-secondary"
                        data-toggle="modal"
                        data-target={"#myModal"}> <i className="fa fa-plus"></i> 
                    </button>
                    <button type="submit" disabled className="btn btn-primary" id="id-submit">Get a quote</button>
                        <div id="myModal" className="modal fade" role="dialog">
                             <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Create an item</h4>
                                        <button type="button" className="close" data-dismiss="modal"> &times;
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <ItemPopup
                                        onClickCreateItem={(body) => this.onClickCreateItem(body)}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
              </div>
         </div>
        );
    }
}

export default ItemPage;