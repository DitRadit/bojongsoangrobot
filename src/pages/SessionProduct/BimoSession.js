import React from "react";
import bimo from "../img/bimo.png"
import bimo1 from "../img/image 7.png"
import bimo2 from "../img/bmo_full_model-removebg-preview 1.png"

function MoreProduct() {
    return (
        <div className="bimo-session">
            <div className="bimo-session-header">
                <div className="bimo-session-desc">
                    <h1>Beemo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="bimo-img">
                    <img src={bimo} alt="Bimo Product"/>
                </div>
            </div>
            <div className="bimo-session-slide">
                <div className="bimo-session-slide-title">
                    <div className="bimo-session-slide-title-title">
                        <h1>Adventure Time</h1>
                        <p>Beemo</p>
                    </div>
                </div>
                <div className="bimo-session-desc-satu">
                    <div className="bimo-session-description">
                        <h1><span>Name:</span> Beemo</h1>
                        <h1><span>Width:</span> 120 km</h1>
                        <h1><span>Height:</span> 420 km</h1>
                    </div>
                    <div className="bimo-session-image">
                    <img src={bimo1} alt="Bimo Product"/>
                    </div>
                </div>
            </div>
            <div className="bimo-session-potition">
                <div className="bimo-session-potition-image">
                    <img src={bimo2} alt="Bimo Product"/>
                </div>
                <div className="bimo-session-position-desc">
                    <div className="bimo-session-position-left">
                        <p>Position 1</p>
                        <h1>Position 1</h1>
                    </div>
                    <div className="bimo-session-position-right">
                        <div className="bimo-session-position-right-desc">
                            <p>Position 1</p>
                            <h1>Position 1</h1>
                        </div>
                        <div className="bimo-session-position-right-desc">
                            <p>Position 1</p>
                            <h1>Position 1</h1>
                        </div>
                        <div className="bimo-session-position-right-desc">
                            <p>Position 1</p>
                            <h1>Position 1</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreProduct;
