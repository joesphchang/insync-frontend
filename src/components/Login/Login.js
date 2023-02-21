import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../../assets/login-hero.png';

function Login() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSignIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, displayName, email, password).then(
			(useCredential) => {
				console.log(useCredential);
			}
		);
		navigate('/home').catch((error) => {
			console.log(error);
		});
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
