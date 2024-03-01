import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import './Socials.css';

function Socials() {
	return (
		<div className='socials'>
			<div className='socials-container'>
				<a href='https://github.com/luqas31' className='github'>
					<FontAwesomeIcon icon={faGithub} size='2x' />
				</a>
				<a href='https://www.linkedin.com/in/luqas/' className='linkedin'>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
				</a>
				<a href='' className='instagram'>
					<FontAwesomeIcon icon={faInstagram} size='2x' />
				</a>
				<a href='' className='threads'>
					<FontAwesomeIcon icon={faThreads} size='2x' />
				</a>
			</div>
		</div>
	);
}

export default Socials;
