import React from 'react';
import Navbar from '../Components/Navbar';
import Cta from '../Components/Cta';
import Suggestions from '../Components/Suggestions';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Cta />
			<Suggestions />
			<p>Section 2</p>
			<p>FAQ</p>
			<p>Who we are</p>
			<p>Footer</p>
		</div>
	);
};

export default Home;
