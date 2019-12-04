import React, { Component } from "react";
import FileApi from "./../../api/FileApi";


class ItemCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedFiles: [],
            insurancePlan: null,
            warranty: null,
            date: null,  
        }
    };

    onFileChangeHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        FileApi.uploadFile(formData)
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
        FileApi.getAllFiles()
            .then(({ data }) => this.setState({ selectedFiles: data }))
            .catch(err => console.error(err));
    }

    render() {
        const {selectedFiles, insurancePlan, warranty, date} = this.state;
        if (selectedFiles.length>0){
            selectedFiles[0].isActive=true
        }
        return (
            <div className="card" style={cardStyle}>
            <div className="card-body" >
                    <label htmlFor="type"> Insurance plan:</label>
                    <select style={selectStyle} type="text" value={insurancePlan} onChange={this.setInsurancePlan} className="form-control">
                        <option value="no-insurance">No insurance plan</option>
                    </select>

                    <label htmlFor="type">Warranty: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle}></input>

                    <label htmlFor="type">Last modified date: </label>
                    <input disabled type="text" className="form-control" id="usr" style={selectStyle}></input>
                    <div className="form-group files color" style={selectStyle}>
                        <label>Upload Your File</label>
                        <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                    </div>
                         <div>
                         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            
                             {!selectedFiles ? null : selectedFiles.map(({id, fileName, fileType, fileData, isActive}) => {
                                    return (
                                        <div key={id} className={"carousel-item" +  (isActive ? " active" : "")}>
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
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                 </div>
            </div>
            </div>
        )
            };
}



const selectStyle ={
   width: '100%',
   margin: 'auto',
   marginBottom: '30px'
  }

const cardStyle = {
    width: '80%',
    margin: 'auto'
  }
  

export default ItemCard;