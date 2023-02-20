import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';

function Register() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignUp = async (e) => {
		e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: displayName }).catch(
        (err) => console.log(err)
      );
    } catch (err) {
      console.log(err);
    }
	};

	return (
		<div className='login__main-container'>
			<form onSubmit={handleSignUp}>
        <h1>Register Your Account</h1>
				<label htmlFor='displayName'>First Name</label>
				<input
					type='text'
					id='displayName'
					name='displayName'
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					vale={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type='submit' />
			</form>
		</div>
	);
}

export default Register;
