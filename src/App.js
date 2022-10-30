import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import RoutesPage from './Views/RoutesPage';
import MoodsPage from './Views/MoodsPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/routes" element={<RoutesPage />} />
				<Route path="/moods" element={<MoodsPage />} />
			</Routes>
		</div>
	);
}

export default App;
