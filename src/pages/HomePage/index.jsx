import  { useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { getData } from '../../services/api';
import Socials from '../../components/Socials/index';
import './Home.css';
import { reducer } from '../../reducer';

export function Home() {
	const [homeData, dispatch] = useReducer(reducer, null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();

				dispatch({ type: 'SET_HOME_DATA', payload: data.home[0] });
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			<div className='home-container'>
				<div className='home-title-container'>
					<h1>{homeData?.title}</h1>
					<h2>
						{homeData?.subtitle} <span>{homeData?.span}</span>
					</h2>
				</div>

				<div className='projects-button-container'>
					<NavLink to='/Portfolio/projects' className='projects-button'>
						Projects &gt;{' '}
					</NavLink>
				</div>
			</div>

			<Socials />
		</div>
	);
}
