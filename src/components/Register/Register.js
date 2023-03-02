import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Hero from '../../assets/register-hero.png';

function Register() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			.catch((err) => console.log(err));

			await updateProfile(auth.currentUser, { displayName: displayName }).catch(
				(err) => console.log(err)
			);
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='login__main-container'>
			<img src={Hero} alt='register hero' className='login_image' />
			<form onSubmit={handleSignUp} className='login__form'>
				<h1 className='login_header'>Register Your Account</h1>
				<label htmlFor='displayName' className='login_label'>
					First Name
				</label>
				<input
					required
					type='text'
					id='displayName'
					name='displayName'
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					className='login_input'
				/>
				<label htmlFor='email' className='login_label'>
					Email
				</label>
				<input
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
		</div>
	);
}

export default Register;
