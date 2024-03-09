import { Link } from 'react-router-dom';
import './Header.css';

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
					<li>About me</li>
					<li>Contact me</li>
				</nav>
			</div>
		</div>
	);
}

export default Header;
