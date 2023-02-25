import React from "react";

import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";

import ReactDOM from 'react-dom';

// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
				<Cards />
				<Footer />
		</div>
	)
};

export default Home;