import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import RoutesPage from './Views/RoutesPage';
import MoodsPage from './Views/MoodsPage';
import RouteDetails from './Views/RouteDetails';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/routes" element={<RoutesPage />} />
				<Route path="/moods" element={<MoodsPage />} />
				<Route path="/routes/details" element={<RouteDetails />} />
			</Routes>
		</div>
	);
}

export default App;
