import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Authentication
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navigation = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [authUser, setAuthUser] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
			} else {
				setAuthUser(null);
			}
		});

		return () => {
			listen();
		};
	}, []);

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate('/');
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className='navbar'>
			<div className='logo'>
				<h1>insync.</h1>
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<Link to='/home' className='nav-item'>
					Home
				</Link>
				<Link to='/meditation-feed' className='nav-item'>
					Meditations
				</Link>
				<Link to='/about' className='nav-item'>
					About
				</Link>
				<button className='nav-button nav-item' onClick={userSignOut}>
						Log Out
				</button>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{click ? <FaTimes size={40} /> : <FaBars size={40} />}
			</div>
		</div>
	);
};

export default Navigation;
