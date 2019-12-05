import React from "react";

function InsuranceForm( {onClickCreateInsurance} ) {
    const [insuranceType, setInsuranceType] = React.useState("no-type");
    const [insurancePlan, setInsurancePlan] = React.useState("no-insurance");

    return (
        <div className="card">
            <div className="card-body">
                        
                        <div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-interval="false">
                        <div className="carousel-inner">
                            
                            <div class="carousel-item active">
                               <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/tre300.png" alt="Tre Kronor"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/bliwa300.png" alt="Bliwa"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/dina300.png" alt="Dina Försäkringar"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/folksam300.png" alt="Folksam"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/gje300.png" alt="Gjensidige"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/ica300.png" alt="ICA Försäkring"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/if...300.png" alt="If Skadeförsäkring"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/lans300.png" alt="Länsförsäkringar"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/moderna300.png" alt="Moderna Försäkringar"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/skandia300.png" alt="Skandia"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/svedea300.png" alt="Svedea"/></button>
                            </div>
                            <div class="carousel-item"> 
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block" style={cardStyle} src="images/trig300.png" alt="Trygg-Hansa"/></button>
                            </div>
                            <div class="carousel-item">
                            <button type="button" class="btn-lg" style={logoButtonStyle}>
                                <img class="d-block " style={cardStyle} src="images/volvia300.png" alt="Volvia"/></button>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" color ="black" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"> </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
                color: 'black',
            }

            const logoButtonStyle = {
                width: '100%',
                height: '100%',
                
            }
  
export default InsuranceForm;