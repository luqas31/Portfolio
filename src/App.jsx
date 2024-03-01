import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Socials from './components/Socials';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='outlet'>
				<Outlet />
			</div>
			<Socials/>
		</div>
	);
}

export default App;
