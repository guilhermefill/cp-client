import React from 'react';
import Navbar from '../Components/Navbar';
import Cta from '../Components/Cta';
import Suggestions from '../Components/Suggestions';
import Tops from '../Components/Tops';
import Faq from '../Components/Faq';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Cta />
			<Suggestions />
			<Tops />
			<Faq />
			<p>Who we are</p>
			<p>Footer</p>
		</div>
	);
};

export default Home;
