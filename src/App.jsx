import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
	return (
		<div className='app'>
			<div className="header-component">
			<Header /></div>
			<div className='outlet'>
				<Outlet />
			</div>

		</div>
	);
}

export default App;
