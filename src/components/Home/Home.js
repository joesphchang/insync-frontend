import React, { useEffect, useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';

// Authentication
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { auth } from '../../firebase';
import HomeIntro from '../HomeIntro/HomeIntro';
import { Link } from 'react-router-dom';

function Home() {
	const [meditations, setMeditations] = useState([]);
	const [intro, setIntro] = useState([]);
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
			<div className='view-all-link'>
				<h2>Recommendations</h2>
				<Link to='/meditation-feed'>
					View All
				</Link>
			</div>
			{meditations.map((meditation) => (
				<Link to={`/meditations/${meditation.id}`}>
					<div className='home_meditation-container'>
						<div className='home_meditation-sub-container'>
							<div className='home_meditation-sub-1'>
								<h3 classsName='home_meditation-title'>{meditation.title}</h3>
								<h4>{meditation.timer} mins</h4>
							</div>
							<div className='home_meditation-sub-2'>
								<h4 className='home_meditation-play-button'>
									<AiOutlinePlayCircle />
								</h4>
							</div>
						</div>
						<img
							className='home_meditation-image'
							src={meditation.photo_url}
							alt='meditation - images'
						/>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Home;
