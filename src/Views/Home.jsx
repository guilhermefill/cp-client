import React from 'react';
import Navbar from '../Components/Navbar';
import Cta from '../Components/Cta';
import Suggestions from '../Components/Suggestions';
import Tops from '../Components/Tops';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Cta />
			<Suggestions />
			<Tops />
			<p>FAQ</p>
			<p>Who we are</p>
			<p>Footer</p>
		</div>
	);
};

export default Home;
