import React, {Component} from "react";

class AboutUs extends Component {
    render (){
        return (
            <div>
                <div className="row-100">
                    <h5 className="App">
                        We care about people!
                        <br />
                        We believe that managing your insurance claims insurance online should be  easy an accessible.
                        <br />
                        We know that the ones that are crazy enough to want to change the world, are the ones who do.
                        <br />
                        WE ARE NYSURE
                    </h5>
                </div>
                <div className="row-100">
                    <div className="col-3 center-content">
                        <img className="btn-circle btn-circle-lg" src="images/meri.jpg" alt="meri" />
                    </div>
                    <div className="col-3 center-content">
                    <img className="btn-circle btn-circle-lg" src="images/kristina.jpg" alt="kristina" />
                    </div>
                    <div className="col-3 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Photos / Items</p>
                        </button>
                    </div>
                    <div className="col-3 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Photos / Items</p>
                        </button>
                    </div>
                    <div className="col-3 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Photos / Items</p>
                        </button>
                    </div>
                    <div className="col-3 center-content">
                        <button className="btn bg-cyan btn-circle btn-circle-lg m-1">
                            <p>Photos / Items</p>
                        </button>
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