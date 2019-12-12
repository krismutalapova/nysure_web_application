import React, { Component } from "react";
import { uploadFile, getAllFiles, deleteFile} from "./../../api/FileApi";


class ItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            insurancePlan: "no-insurance",
            selectedFiles: [],
        }
    };

    handleDelete(id) { 
        deleteFile(id)
        .then(res => {
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

    setInsurancePlan = (e) => {
        e.preventDefault();
        this.setState({
            insurancePlan: e.target.value
        });
    };

    componentDidMount() {
        //get all files
        getAllFiles(this.props.item.itemId)
            .then(({ data }) => this.setState({ selectedFiles: data }))
            .catch(err => console.error(err));
    }

    render() {
        const { selectedFiles, insurancePlan } = this.state;

        const uploadedImages = selectedFiles.filter(image => image.fileType.includes("image"));

        const uploadedDocuments = selectedFiles.filter(image => !image.fileType.includes("image"));

        if (uploadedImages.length > 0) {
            uploadedImages[0].isActive = true
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="card-body" >
                    <label htmlFor="insurancePlan">Insurance plan:</label>
                    <select disabled style={selectStyle} type="text" value={insurancePlan} onChange={this.setInsurancePlan} className="form-control">
                        <option value="no-insurance">No insurance plan</option>
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
                            ? <Carousel uploadedImages={uploadedImages} />
                            : ""
                        }
                </div>
            </div>
        )
    };
}

const DownloadDocs = ({uploadedDocuments, handleDelete}) =>
    <div id="listOfDocuments">
        <label htmlFor="warrantyPlan"><b>Item documents:</b></label>
        <small className="text-muted float-right">{`${uploadedDocuments.length} document${uploadedDocuments.length === 1 ? "" : "s"} uploaded`}</small>
            {uploadedDocuments.map(({ id, fileName, fileType, fileData }) => {
                            return (
                                <p key={id}>
                                        {fileName} : <a className="fa fa-trash float-right"
                                                        style={buttonStyle}
                                                        href="/#"
                                                        onClick={() => handleDelete(id)}> </a>
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

const Carousel = ({uploadedImages}) =>
    <div>
    <label htmlFor="uploadPhoto"><b>Item photos:</b></label>
    <small className="text-muted float-right">{`${uploadedImages.length} photo${uploadedImages.length === 1 ? "" : "s"} uploaded`}</small>
    <div id="carouselItem" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {uploadedImages.map(({ id, fileName, fileType, fileData, isActive }) => {
                return (
                    <div key={id} className={"carousel-item" + (isActive ? " active" : "")}>
                        <img className="d-block w-100"
                            src={
                                "data:" + fileType +
                                ";base64," + fileData
                            } alt={fileName} />
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

export default ItemCard;