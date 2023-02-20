import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase'; 

function Login() {
  const [ displayName, setDisplayName] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, displayName, email, password)
    .then((useCredential) => {
      console.log(useCredential);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
		<div className='login__main-container'>
			<form onSubmit={handleSignIn}>
        <h1>Login to your Account.</h1>
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

export default Login