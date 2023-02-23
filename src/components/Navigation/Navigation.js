import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

  return (
		<div className='navbar'>
			<div className='logo'>
				<h1>insync.</h1>
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<Link className='nav-item'>
					<a href='/'>Home</a>
				</Link>
				<Link className='nav-item'>
					<a href='/'>About</a>
				</Link>
				<Link className='nav-item'>
					<a href='/'>FAQ</a>
				</Link>
				<Link className='nav-item'>
					<a href='/'>Contact</a>
				</Link>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{click ? (
					<FaTimes size={30}  />
				) : (
					<FaBars size={30} />
				)}
			</div>
		</div>
	);
}

export default Navigation