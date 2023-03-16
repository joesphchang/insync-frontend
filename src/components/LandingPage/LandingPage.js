import React, { useEffect, useState } from 'react';

// dependencies
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../../assets/logo-no-background.png';

// components
import Login from '../Login/Login';
import Register from '../Register/Register';

// assets
import Amico from '../../assets/amico.png';
import Cuate from '../../assets/cuate.png';
import Pana from '../../assets/pana.png';

function LandingPage() {
	const carouselData = [
		{
			title: 'Find your inner peace.',
			img: Pana,
		},
		{
			title: 'Take some time for yourself.',
			img: Amico,
		},
		{
			title: 'Feel Insync.',
			img: Cuate,
		},
	];

	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<div className='landing_page-container'>
			<img className='landing_page-header' src={Logo} alt='' />
			<Slider {...settings}>
				{carouselData.map((item) => {
					return (
						<div key={item.id}>
							<p className='carousel-text'>{item.title}</p>
							<img src={item.img} alt={item.alt} className='carousel-img' />
						</div>
					);
				})}
			</Slider>
			<Link to='/login' className='landing_page-link'>
				Get Started
			</Link>
		</div>
	);
}

export default LandingPage;
