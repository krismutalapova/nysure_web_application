import React from "react";

function InsuranceForm( {onClickCreateInsurance} ) {

    return (
        <div className="card">
            <div className="card-body">
                        
                        <div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-interval="false">
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active">
                               <button type="button" className="btn-lg" data-dismiss="modal"
                               onClick={e => onClickCreateInsurance("Tre Kronor")} style={logoButtonStyle}>  
                                <img className="d-block" style={cardStyle} src="images/tre300.png" alt="Tre Kronor"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Bliwa" 
                            onClick={e => onClickCreateInsurance("Bliwa")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/bliwa300.png" alt="Bliwa"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Dina Försäkringar" 
                            onClick={e => onClickCreateInsurance("Dina Försäkringar")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/dina300.png" alt="Dina Försäkringar"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Folksam" 
                            onClick={e => onClickCreateInsurance("Folksam")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/folksam300.png" alt="Folksam"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Gjensidige" 
                            onClick={e => onClickCreateInsurance("Gjensidige")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/gje300.png" alt="Gjensidige"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="ICA Försäkring" 
                            onClick={e => onClickCreateInsurance("ICA Försäkring")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/ica300.png" alt="ICA Försäkring"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="If Skadeförsäkring"
                            onClick={e => onClickCreateInsurance("If Skadeförsäkring")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/if...300.png" alt="If Skadeförsäkring"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Länsförsäkringar" 
                            onClick={e => onClickCreateInsurance("Länsförsäkringar")} 
                            style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/lans300.png" alt="Länsförsäkringar"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Moderna Försäkringar" 
                            onClick={e => onClickCreateInsurance("Moderna Försäkringar")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/moderna300.png" alt="Moderna Försäkringar"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Skandia" 
                            onClick={e => onClickCreateInsurance("Skandia")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/skandia300.png" alt="Skandia"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Svedea" 
                            onClick={e => onClickCreateInsurance("Svedea")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/svedea300.png" alt="Svedea"/></button>
                            </div>
                            <div className="carousel-item"> 
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Trygg-Hansa" 
                            onClick={e => onClickCreateInsurance("Trygg-Hansa")} style={logoButtonStyle}>
                                <img className="d-block" style={cardStyle} src="images/trig300.png" alt="Trygg-Hansa"/></button>
                            </div>
                            <div className="carousel-item">
                            <button type="button" className="btn-lg" data-dismiss="modal" value="Volvia" 
                            onClick={e => onClickCreateInsurance("Volvia")} style={logoButtonStyle}>
                                <img className="d-block " style={cardStyle} src="images/volvia300.png" alt="Volvia"/></button>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators"  role="button"  data-slide="prev">
                            <span className="carousel-control-prev-icon"  aria-hidden="true"> </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" ></span>
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