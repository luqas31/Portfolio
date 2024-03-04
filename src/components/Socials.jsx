import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import './Socials.css';

function Socials() {
	return (
		<div className='socials'>
			<div className='socials-container'>
				<a href='https://github.com/luqas31' className='github' target='_blank'>
					<FontAwesomeIcon icon={faGithub} size='2x' />
				</a>
				<a href='https://www.linkedin.com/in/luqas/' className='linkedin' target='_blank'>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
				</a>
				<a href='https://www.instagram.com/lucasplss' className='instagram' target='_blank'>
					<FontAwesomeIcon icon={faInstagram} size='2x' />
				</a>
				<a href='https://t.me/lucasplss' className='threads' target='_blank'>
					<FontAwesomeIcon icon={faThreads} size='2x' />
				</a>
			</div>
		</div>
	);
}

export default Socials;
