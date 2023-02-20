import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase'; 
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [ displayName, setDisplayName] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, displayName, email, password)
    .then((useCredential) => {
      console.log(useCredential);
    })
    navigate('/home')
    .catch((error) => {
      console.log(error);
    });
  };

  return (
		<div className='login__main-container'>
			<form onSubmit={handleSignIn} className='login__form'>
        <h1>Login to your Account.</h1>
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
      <h3>No Account? No Problem.</h3>
      <Link to='/register'>
        Register Here
      </Link>
		</div>
	);
}

export default Login