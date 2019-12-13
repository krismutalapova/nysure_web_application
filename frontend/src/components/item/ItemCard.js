import React, { Component } from "react";
import { uploadFile, getAllFiles, deleteFile } from "./../../api/FileApi";


class ItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            insurancePlan: "no insurance plan",
            selectedFiles: [],
        }
    };

    handleDelete(id) {
        deleteFile(id)
            .then((res) => {
                const newSelectedFiles = this.state.selectedFiles.filter(file => file.id !== id);
                this.setState({
                    selectedFiles: newSelectedFiles
                });
            })
            .catch(err => console.error(err));
    };

    onFileChangeHandler = (e) => {
        e.preventDefault();

        const file = e.target.files[0];

        console.log(file);

        const formData = new FormData();

        formData.append('file', file);

        uploadFile(this.props.item.itemId, formData)
            .then(res => {
                const selectedFiles = this.state.selectedFiles.concat(res.data.data);
                this.setState(
                    { selectedFiles }
                );
            })
            .catch(err => console.error(err));
    };

    componentDidMount() {
        //change state to update value in the select
        if (this.props.item.insurance !== null) {
            this.setState({
                insurancePlan: `${this.props.item.insurance.company} - policy id: ${this.props.item.insurance.id}`
            });
        }

        //get all files
        getAllFiles(this.props.item.itemId)
            .then(({ data }) => this.setState({ selectedFiles: data }))
            .catch(err => console.error(err));
    }

    render() {
        const { selectedFiles, insurancePlan } = this.state;
        const { itemBrand, itemModel, itemDate, itemPrice } = this.props.item;

        const uploadedImages = selectedFiles.filter(image => image.fileType.includes("image"));

        const uploadedDocuments = selectedFiles.filter(image => !image.fileType.includes("image"));

        if (uploadedImages.length > 0) {
            uploadedImages[0].isActive = true
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="card-body" >
                    <label htmlFor="ItemBrand">Item Brand:</label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={itemBrand !== null ? itemBrand : ""}></input>
                    <label htmlFor="ItemModel">Item Model:</label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={itemModel !== null ? itemModel : ""}></input>
                    <label htmlFor="ItemPurchaseDate">Date of Purchase:</label>
                    <input disabled type="text" className="form-control" style={selectStyle} value={itemDate !== null ? itemDate : ""}></input>
                    <label htmlFor="insurancePlan">Price of Item:</label>
                    <input disabled type="number" className="form-control" style={selectStyle} value={itemPrice !== null ? itemPrice : ""}></input>
                    <label htmlFor="insurancePlan">Insurance plan:</label>
                    <select disabled style={selectStyle} type="text" value="no-insurance" className="form-control">
                        <option value="no-insurance">{insurancePlan}</option>
                    </select>

                    <div className="form-group files color" style={selectStyle}>
                        <label htmlFor="uploadPhoto">Upload a file:</label>
                        <input type="file" className="form-control" onChange={this.onFileChangeHandler} />
                    </div>
                    {
                        uploadedDocuments.length > 0
                            ? <DownloadDocs uploadedDocuments={uploadedDocuments} handleDelete={(id) => this.handleDelete(id)} />
                            : ""
                    }
                    {
                        uploadedImages.length > 0
                            ? <Carousel uploadedImages={uploadedImages} handleDelete={(id) => this.handleDelete(id)} />
                            : ""
                    }
                </div>
            </div>
        )
    };
}

const DownloadDocs = ({ uploadedDocuments, handleDelete }) =>
    <div id="listOfDocuments">
        <label htmlFor="warrantyPlan"><b>Item documents:</b></label>
        <small className="text-muted float-right">{`${uploadedDocuments.length} document${uploadedDocuments.length === 1 ? "" : "s"} uploaded`}</small>
        {uploadedDocuments.map(({ id, fileName, fileType, fileData }) => {
            return (
                <p key={id}>
                    {fileName} : <a className="fa fa-trash float-right"
                        style={buttonStyle}
                        href="/item#"
                        onClick={() => handleDelete(id)}>
                    </a>
                    <a className="fa fa-download float-right"
                        style={buttonStyle}
                        download
                        href={
                            "data:" + fileType +
                            ";base64," + fileData}> </a>
                </p>
            )
        })
        }
    </div>

const Carousel = ({ uploadedImages, handleDelete }) =>
    <div>
        <label htmlFor="uploadPhoto"><b>Item photos:</b></label>
        <small className="text-muted float-right">{`${uploadedImages.length} photo${uploadedImages.length === 1 ? "" : "s"} uploaded`}</small>
        <div id="carouselItem" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {uploadedImages.map(({ id, fileName, fileType, fileData, isActive }) => {
                    return (
                        <div key={id} id={id } style={carouselItem} className={"carousel-item test" + (isActive ? " active" : "")}>
                            <img className="d-block w-100" style={imageStyle}
                                src={
                                    "data:" + fileType +
                                    ";base64," + fileData
                                } alt={fileName} />
                            <a className="remImage" href="/item#" id="delete" onClick={() => handleDelete(id)}> 
                                <img src="https://image.flaticon.com/icons/svg/261/261935.svg" style={{width:"40px",height:"40px"}} alt="delete button"/>
	                        </a>
                        </div>
                            )
                        })
                        }
            </div>
                        <a className="carousel-control-prev" href="#carouselItem" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselItem" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
        </div>
        </div>

        const selectStyle = {
            width: '100%',
        margin: 'auto',
        marginBottom: '30px',
    }
const buttonStyle = {
            marginRight: '15px',
    }
const cardStyle = {
            width: '80%',
        margin: 'auto',
    }
const carouselItem= {
    height: '400px',
}

const imageStyle= {
    top: '50%',
    position: 'absolute',
    transform: "translateY(-50%)"

}

    
export default ItemCard;