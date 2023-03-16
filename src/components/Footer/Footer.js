import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Logo from '../../assets/logo-no-background.png';

function Footer() {
	return (
		<div className='footer'>
			<div className='sub-footer'> 
				<img src={Logo} alt='' />
				<h3>Made with ♥ and React.JS</h3>
			</div>
			<div>
				<a
					className='footer_links'
					href='https://www.linkedin.com/in/joesphchang/'>
					<AiFillLinkedin />
				</a>
				<a className='footer_links' href='https://www.github.com/joesphchang'>
					<AiFillGithub />
				</a>
			</div>
		</div>
	);
}

export default Footer;
