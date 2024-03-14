import { useEffect, useReducer } from 'react';
import { getData } from '../../services/api';
import { reducer } from '../../reducer';
import './AboutMePage.css';

export const AboutMePage = () => {
	const [aboutMeData, dispatch] = useReducer(reducer, null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				// Atualize os dados do about me quando eles estiverem disponíveis
				dispatch({ type: 'SET_ABOUT_ME_DATA', payload: data.aboutMe[0] });
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div className='about-me-page'>
			{aboutMeData ? (
				<div>
					<h1>{aboutMeData.title}</h1>
					<p>{aboutMeData.text}</p>
				</div>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	);
};
