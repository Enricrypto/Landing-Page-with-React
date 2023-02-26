import React from "react";

const Card = () => {
    return (
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="https://fastly.picsum.photos/id/45/4592/2576.jpg?hmac=Vc7_kMYufvy96FxocZ1Zx6DR1PNsNQXF4XUw1mZ2dlc" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="text-center bg-light border-top">
                        <a href="#" className="btn btn-primary text-center mb-2 mt-2">Find Out More!</a>
                    </div>
                </div>
            </div>
    );
}

export default Card; 