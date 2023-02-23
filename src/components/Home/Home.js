import React, { useEffect, useState } from 'react';

// Authentication
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { auth } from '../../firebase';

function Home() {
	const [meditations, setMeditations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [authUser, setAuthUser] = useState([]);
	const auth = getAuth();
	const user = auth.currentUser;

	useEffect(() => {
		fetch('https://insync-backend.onrender.com/meditations')
			.then((res) => res.json())
			.then((res) => {
				setMeditations(res);
				console.log(res);
			});

		if (user !== null) {
			user.providerData.forEach((profile) => {
				setAuthUser(profile);
				console.log(profile);
			});
		}
	}, []);

	if (loading && !meditations.length) {
		return <h2>Loading ...</h2>;
	}
	return (
		<div className='home_container'>
      <h2>Hello {authUser.displayName}</h2>
      <br></br>
			{meditations.map((meditation) => {
				return <h3>{meditation.title}</h3>;
			})}
		</div>
	);
}

export default Home;
