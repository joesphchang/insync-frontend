import React, { useState, useEffect } from 'react';

function HomeIntro() {
	const [intro, setIntro] = useState([]);

	useEffect(() => {
		fetch('https://insync-backend.onrender.com/meditations')
			.then((res) => res.json())
			.then((res) => {
				let intros = res
                .sort((intro) => intro.title = 'Intro to Meditations' )
                .slice(0, 1)
                setIntro(intros);
			});
	});
	return <div className='intro_container'>
        {intro.map((homeintro) => (
            <div className='homeintro_container'>
                <h3 className='homeintro_header'>{homeintro.title}</h3>
                <img className='homeintro_photo' src={homeintro.photo_url} alt='home intro' />
            </div>
        ))}
    </div>;
}

export default HomeIntro;
