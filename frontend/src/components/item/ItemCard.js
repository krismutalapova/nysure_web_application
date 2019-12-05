import React, { Component } from "react";
import { uploadFile, getAllFiles } from "./../../api/FileApi";


class ItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFiles: [],
            insurancePlan: "no-insurance",
            date: null,
        }
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
            insurancePlan: e.target.valuet
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
        if (selectedFiles.length > 0) {
            selectedFiles[0].isActive = true
        }
        return (
            <div className="card" style={cardStyle}>
                <div className="card-body" >

                    <label htmlFor="insurancePlan"> Insurance plan:</label>
                    <select disabled style={selectStyle} type="text" value={insurancePlan} onChange={this.setInsurancePlan} className="form-control">
                        <option value="no-insurance">No insurance plan</option>
                    </select>

                    <label htmlFor="warrantyPlan">Warranty plan: </label>
                    <input disabled type="text" className="form-control" style={selectStyle} placeholder="no warranty plan"></input>

                    <div className="form-group files color" style={selectStyle}>
                        <label htmlFor="uploadPhoto">Upload a photo:</label>
                        <small class="text-muted float-right">{`${selectedFiles.length} photo${selectedFiles.length === 1 ? "" : "s"} uploaded`}</small>
                        <input type="file" className="form-control" onChange={this.onFileChangeHandler} />
                    </div>
                        {
                            selectedFiles.length > 0
                            ? <Carousel selectedFiles={selectedFiles} />
                            : ""
                        }
                </div>
            </div>
        )
    };
}

const Carousel = ({selectedFiles}) =>
    <div>
    <div id="carouselItem" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {selectedFiles.map(({ id, fileName, fileType, fileData, isActive }) => {
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
    marginBottom: '30px'
}

const cardStyle = {
    width: '80%',
    margin: 'auto',
}

export default ItemCard;