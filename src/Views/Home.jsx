import React from 'react';
import Navbar from '../Components/Navbar';
import Cta from '../Components/Cta';
import Suggestions from '../Components/Suggestions';
import Tops from '../Components/Tops';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Cta />
			<Suggestions />
			<Tops />
			<Faq />
			<p>Who we are</p>
			<Footer />
		</div>
	);
};

export default Home;
