import React, { Component } from "react";
import{ uploadFile, getAllFiles } from "./../../api/FileApi";


class InsuranceCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedFiles: [],
            insurancePlan: null,
        }
    };

    onFileChangeHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        uploadFile(formData)
            .then(res => {
                    const selectedFiles = this.state.selectedFiles.concat(res.data.data);
                    this.setState(
                        {selectedFiles}
                    );
                    alert("File uploaded successfully.")
            })
            .catch(err => console.error(err));
    };
    
    setInsurancePlan = (e) => {
        e.preventDefault();
        this.setState({
            insurancePlan:e.target.valuet
        });
    };

    componentDidMount() {
        //get all files
        //getAllFiles()
         //   .then(({ data }) => this.setState({ selectedFiles: data }))
         //   .catch(err => console.error(err));
    }

    render() {
        const {selectedFiles, insurancePlan} = this.state;
        const uploadedImages = selectedFiles.filter(image => image.fileType.includes("image"));
        const uploadedDocuments = selectedFiles.filter(image => !image.fileType.includes("image"));


        if (selectedFiles.length>0){
            selectedFiles[0].isActive=true
        }
        return (
            <div className="card" style={cardStyle}>
            <div className="card-body" >
                    <label htmlFor="type"> Insurance plan:</label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.id}></input>

                    <label htmlFor="type">Company: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.company}></input>

                    <label htmlFor="type">Cost: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.cost}></input>

                    <label htmlFor="type">Type: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.type}></input>

                    <div className="form-group files color" style={selectStyle}>
                        <label>Upload Your File</label>
                        <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                    </div>

                    {
                            uploadedDocuments.length > 0
                            ? <DownloadDocs uploadedDocuments={uploadedDocuments} />
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
                    const DownloadDocs = ({uploadedDocuments}) =>
                        <div id="listOfDocuments">
                            <label htmlFor="warrantyPlan"><b>Insurance documents:</b></label>
                            <small className="text-muted float-right">{`${uploadedDocuments.length} document${uploadedDocuments.length === 1 ? "" : "s"} uploaded`}</small>
                                {uploadedDocuments.map(({ id, fileName, fileType, fileData }) => {
                                                return (
                                                    <p key={id}>
                                                            {fileName} : <a className="float-right"
                                                                            download
                                                                            href={
                                                                            "data:" + fileType +
                                                                            ";base64," + fileData }>download</a>
                                                    </p>
                                                )
                                            })
                                }
                    </div>

                    const Carousel = ({uploadedImages}) =>
                        <div>
                        <label htmlFor="uploadPhoto"><b>Insurance photos:</b></label>
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
                        
                        <a className="carousel-control-prev" href="#carouselInsurance" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselInsurance" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                            </div>
                        </div>
                        </div>

const selectStyle ={
   width: '100%',
   margin: 'auto',
   marginBottom: '10px'
  }

const cardStyle = {
    width: '80%',
    margin: 'auto'
  }
  

export default InsuranceCard;