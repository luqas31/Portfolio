import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='app'>
			<header>
				<nav>
					<Link to='/'>Home</Link>
					<li>Projects</li>
					<li>About me</li>
					<li>Contact me</li>
				</nav>
			</header>
			<body>
				<div className='outlet'>
					<Outlet />
				</div>
			</body>
		</div>
	);
}

export default App;
