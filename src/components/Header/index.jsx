import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ThemeContext } from '../../contexts/AppContext';

function Header() {


	return (
		<div>
			<div className='header-container'>
				<nav>
					<Link to='/Portfolio/' className='nav'>
						Home
					</Link>
					<Link to='projects' className='nav'>
						Projects
					</Link>
					<Link to='aboutme' className='nav'>
						About me
					</Link>
					<Link to='contact' className='nav'>
						Contact me
					</Link>
				</nav>
			</div>
		</div>
	);
}

export default Header;
