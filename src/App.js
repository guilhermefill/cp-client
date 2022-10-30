import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import RoutesPage from './Views/RoutesPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/routes" element={<RoutesPage />} />
			</Routes>
		</div>
	);
}

export default App;
