import './App.css';

// dependencies
import { Routes, Route, useLocation } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import MeditationDetail from './components/MeditationDetail/MeditationDetail';
import MeditationFeed from './components/MeditationFeed/MeditationFeed';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';

function App() {
	const { pathname } = useLocation();

	return (
		<div className='main__container'>
			{pathname !== '/login' &&
				pathname !== '/register' &&
				pathname !== '/' && <Navigation></Navigation>}
			<Routes>
				<Route index path='/' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/meditation-feed/:id' element={<MeditationDetail />} />
				<Route path='/meditation-feed' element={<MeditationFeed />} />
				<Route path='/about' element={<About />} />
			</Routes>
			{pathname !== '/login' &&
				pathname !== '/register' &&
				pathname !== '/' && <Footer />}
		</div>
	);
}

export default App;
