import React from "react";

function InsuranceForm( {onClickCreateInsurance} ) {
    const [insuranceType, setInsuranceType] = React.useState("no-type");
    const [insurancePlan, setInsurancePlan] = React.useState("no-insurance");

    return (
        <div className="card">
            <div className="card-body" >
                
                         <div>
                         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            
                            <div class="carousel-item active">
                                <img class="d-block " style={cardStyle} src="images/tre300.png" alt="Tre Kronor"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/bliwa300.png" alt="Bliwa"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/dina300.png" alt="Dina Försäkringar"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/folksam300.png" alt="Folksam"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/gje300.png" alt="Gjensidige"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/ica300.png" alt="ICA Försäkring"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/if...300.png" alt="If Skadeförsäkring"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/lans300.png" alt="Länsförsäkringar"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/moderna300.png" alt="Moderna Försäkringar"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/skandia300.png" alt="Skandia"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/svedea300.png" alt="Svedea"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" style={cardStyle} src="images/trig300.png" alt="Trygg-Hansa"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block " style={cardStyle} src="images/volvia300.png" alt="Volvia"/>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"> </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                 </div>
            </div>
            </div>
        )
            };

            const cardStyle = {
                width: '50%',
                height: '50%',
                margin: 'auto',
            }
  
export default InsuranceForm;