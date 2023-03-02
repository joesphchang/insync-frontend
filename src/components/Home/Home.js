import React, { useEffect, useState } from 'react';

// Authentication
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { auth } from '../../firebase';
import HomeIntro from '../HomeIntro/HomeIntro';

function Home() {
	const [meditations, setMeditations] = useState([]);
	const [ intro, setIntro ] = useState([]);
	const [loading, setLoading] = useState(true);
	const [authUser, setAuthUser] = useState([]);
	const auth = getAuth();
	const user = auth.currentUser;

	useEffect(() => {
		fetch('https://insync-backend.onrender.com/meditations')
			.then((res) => res.json())
			.then((res) => {
				let shuffled = res
					.sort(() => Math.random() - Math.random())
					.slice(0, 3);
				setMeditations(shuffled);
			});

		if (user !== null) {
			user.providerData.forEach((profile) => {
				setAuthUser(profile);
				// console.log(profile);
			});
		}
	}, []);

	if (loading && !meditations.length) {
		return <h2>Loading ...</h2>;
	}
	return (
		<div className='home_container'>
			<div className='home_name-container'>
				<h2>Hello {authUser.displayName}!</h2>
				<h3>How are you feeling today?</h3>
			</div>
			<br></br>
			<HomeIntro />
			{meditations.map((meditation) => (
				<div className='home_meditation-container'>
					<h3 classsName='home_meditation-title'>{meditation.title}</h3>
					<img className='home_meditation-image' src={meditation.photo_url} alt='meditation - images' />
				</div>
			))}
		</div>
	);
}

export default Home;
