import React, { Component } from "react";
import { uploadInsuranceFile, getAllInsuranceFiles, deleteFile} from "./../../api/FileApi";


class InsuranceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    onInsuranceFileChangeHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file);
        console.log(this.props.insurance.id);
        const formData = new FormData();
        formData.append('file', file);

        uploadInsuranceFile(this.props.insurance.id, formData)
            .then(res => {
                const selectedFiles = this.state.selectedFiles.concat(res.data.data);
                this.setState(
                    { selectedFiles }
                );
            })
            .catch(err => console.error(err));
    };


    componentDidMount() {
        //get all files
        getAllInsuranceFiles(this.props.insurance.id)
            .then(({ data }) => this.setState({ selectedFiles: data }))
            .catch(err => console.error(err));
    }

    render() {
        const { selectedFiles } = this.state;
  
        return (
            <div className="card" style={cardStyle}>
                <div className="card-body" >
                    <label htmlFor="type"> Policy ID:</label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.id}></input>

                    <label htmlFor="type">Company: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.company}></input>

                    <label htmlFor="type">Cost: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.cost}></input>

                    <label htmlFor="type">Type: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle} value={this.props.insurance.type}></input>

                    <div className="form-group files color" style={selectStyle}>
                        <label>Upload Your File</label>
                        <input type="file" className="form-control" onChange={this.onInsuranceFileChangeHandler} />
                    </div>

                    {
                        selectedFiles.length > 0
                            ? <DownloadDocs selectedFiles={selectedFiles} handleDelete={(id) => this.handleDelete(id)}/>
                            : ""
                    }
                    
                </div>
            </div>
        )
    };
}

const DownloadDocs = ({ selectedFiles, handleDelete }) =>
    <div id="listOfDocuments">
        <label htmlFor="uploadDoc"><b>Insurance documents:</b></label>
        <small className="text-muted float-right">{`${selectedFiles.length} document${selectedFiles.length === 1 ? "" : "s"} uploaded`}</small>
        {selectedFiles.map(({ id, fileName, fileType, fileData, }) => {
            return (
                <p key={id}>
                    {fileName} :
                    <a className="fa fa-trash float-right"
                        style={buttonStyle}
                        href="#"
                        onClick={() => handleDelete(id)}
                    ></a>
                    <a className="fa fa-download float-right"
                        style={buttonStyle}
                        download
                        href={
                            "data:" + fileType +
                            ";base64," + fileData}></a>
                </p>
            )
        })
        }
    </div>

const selectStyle = {
    width: '100%',
    margin: 'auto',
    marginBottom: '10px'
}
const buttonStyle = {
    marginRight: '15px',
}
const cardStyle = {
    width: '80%',
    margin: 'auto'
}


export default InsuranceCard;