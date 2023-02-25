import React from "react";

import Card from "./card.jsx"

const Cards = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-evenly g-3 mt-3">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards; 