import './App.css';

// dependencies
import { Routes, Route } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import MeditationDetail from './components/MeditationDetail/MeditationDetail';
import MeditationFeed from './components/MeditationFeed/MeditationFeed';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			Hello World
			<Navigation />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/meditation-detail' element={<MeditationDetail />} />
				<Route path='/meditation-feed' element={<MeditationFeed />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
