import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../../assets/login-hero.png';

function Login() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate('/home');
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<div className='login__main-container'>
			<img src={Hero} alt='login hero' className='login_image' />
			<form onSubmit={handleSignIn} className='login__form'>
				<h1 className='login_header'>Login</h1>
				<label htmlFor='email' className='login_label'>
					Email
				</label>
				<input
					required
					type='email'
					id='email'
					name='email'
					vale={email}
					onChange={(e) => setEmail(e.target.value)}
					className='login_input'
				/>
				<label htmlFor='password' className='login_label'>
					Password
				</label>
				<input
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='login_input'
				/>
				<input type='submit' className='login_button' />
			</form>
			<div className='register_container'>
				<h3 className='login_register-text'>No Account? No Problem.</h3>
				<Link to='/register' className='register_link'>
					Register Here
				</Link>
			</div>
		</div>
	);
}

export default Login;
