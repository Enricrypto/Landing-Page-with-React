import React from "react";

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-xxl">
                    <a className="navbar-brand" href="#">
                        <span className="fw-bold text-white">
                            Start Bootstrap
                        </span>
                    </a>
                    {/*  toggle button for mobile nav */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
};

export default NavBar;

