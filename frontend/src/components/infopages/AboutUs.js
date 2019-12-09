import React, { Component } from "react";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="row-100">
                    <h5 className="App">
                        We care about people!
                        <br />
                        We believe that managing your insurance claims online should be easy and accessible.
                        <br />
                        We know that the ones that are crazy enough to want to change the world, are the ones who do.
                        <br />
                        WE ARE NYSURE
                    </h5>
                </div>
                <div className="row-100">
                    <div className="col-3 center-content">
                        <a href="https://www.linkedin.com/in/mary-mihailovski-vancovska/">
                            <img className="btn-circle btn-circle-lg" src="images/meri.jpg" alt="meri" />
                        </a>
                        <p>Meri </p>
                    </div>
                    <div className="col-3 center-content">
                        <a href="https://www.linkedin.com/in/kristina-mutalapova/">
                            <img className="btn-circle btn-circle-lg" src="images/kristina.jpg" alt="kristina" />
                        </a>
                        <p>Kris</p>
                    </div>
                    <div className="col-3 center-content">
                        <img className="btn-circle btn-circle-lg" src="images/penny.jpg" alt="penny" />
                        <p>Penny</p>
                    </div>
                </div>
                <div className="row-100">
                    <div className="col-3 center-content">
                        <a href="https://www.linkedin.com/in/elmenqui/">
                            <img className="btn-circle btn-circle-lg" src="images/alberto.jpg" alt="alberto" />
                            </a>
                            <p>Alberto</p>
                        
                    </div>
                    <div className="col-3 center-content">
                        <a href="https://www.linkedin.com/in/sara-garabedian-24a8a999/">
                        <img className="btn-circle btn-circle-lg" src="images/SG.png" alt="SG" />
                        </a>
                        <p>Sara </p>
                    </div>
                    <div className="col-3 center-content">
                        <a href="https://www.linkedin.com/in/mabmalia/">
                        <img className="btn-circle btn-circle-lg" src="images/miguel1.png" alt="miguel1" />
                        </a>
                        <p>Miguel</p>
                    </div>
                </div>

                <div className="row-100">
                    <div className="card text-white App">
                        CONTACT
                        <br />Super Street No1
                        <br /> phone: +46 8 1234123
                        <br /> email: contact@nysure.com
                    </div>
                </div>
                <div className="row-full">
                    <div className="bottomPadding"></div>
                </div>
            </div>
        )
    };

}

export default AboutUs;