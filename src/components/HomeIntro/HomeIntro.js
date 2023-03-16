import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlayCircle } from 'react-icons/ai';

function HomeIntro() {
	const [intro, setIntro] = useState([]);

	useEffect(() => {
		fetch('https://insync-backend.onrender.com/meditations')
			.then((res) => res.json())
			.then((res) => {
				let intros = res
					.sort((intro) => (intro.title = 'Intro to Meditations'))
					.slice(0, 1);
				setIntro(intros);
			});
	});
	return (
		<div className='intro_container'>
			{intro.map((homeintro) => (
				<div className='home_meditation-container'>
					<div className='home_meditation-sub-container'>
						<div className='home_meditation-sub-1'>
							<h3 classsName='home_meditation-title'>{homeintro.title}</h3>
							<h4>{homeintro.timer} mins</h4>
						</div>
						<div className='home_meditation-sub-2'>
							<h4 className='home_meditation-play-button'>
								<AiOutlinePlayCircle />
							</h4>
						</div>
					</div>
					<img
						className='homeintro_photo'
						src={homeintro.photo_url}
						alt='home intro'
					/>
				</div>
			))}
		</div>
	);
}

export default HomeIntro;
