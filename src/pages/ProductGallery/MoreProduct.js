import React from "react";
import bimo from "../img/bimo.png"
import baymax from "../img/baymax.png"
import blackro from "../img/blackro.png"

function MoreProduct() {
    return (
        <div className="more-product">
            <div className="more-product-header">
                <h1>VIEW OUR PRODUCTS</h1>
                <div className="more-product-search">
                    <p></p>
                </div>
            </div>
            <div className="more-product-product">
                <div className="more-product-bimo">
                    <img src={bimo} alt="Bimo Product"/>
                    <h1>PRODUCT NAME</h1>
                    <div className="more-product-view">
                      <a>view</a>
                    </div>
                </div>
                <div className="more-product-bmax">
                <img src={baymax} alt="Baymax Product"/>
                    <h1>PRODUCT NAME</h1>
                    <div className="more-product-view">
                      <a>view</a>
                    </div>
                </div>
                <div className="more-product-blackro">
                <img src={blackro} alt="Blackro Product"/>
                    <h1>PRODUCT NAME</h1>
                    <div className="more-product-view">
                      <a>view</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreProduct;
