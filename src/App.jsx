import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from './contexts/AppContext';
import { useState, useEffect } from 'react';

function App() {
	const initialTheme = localStorage.getItem('theme') || 'light';
	const [theme, setTheme] = useState(initialTheme);

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeProvider value={{ theme, toggleTheme }}>
			<div className='app' id={theme}>
				<Header />
				<button className='change-theme-button' onClick={toggleTheme}>
					CHANGE THEME
				</button>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
