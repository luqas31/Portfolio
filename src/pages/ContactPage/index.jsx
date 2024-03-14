import { useEffect, useReducer } from 'react';
import { getData } from '../../services/api';
import { reducer } from '../../reducer';

export const ContactMePage = () => {

	const [contactMeData, dispatch] = useReducer(reducer, null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();

				dispatch({ type: 'SET_CONTACT_ME_DATA', payload: data.contactMe[0] });
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div className='contact-me-page'>
			{contactMeData ? (
				<div className='contact-wrapper'>
					<div className='contact-container'>
						<h1>{contactMeData.title}</h1>
					</div>
					<div className='contact'>
						<h2>{contactMeData.subtitle}</h2>
						<p>{contactMeData.phoneNumber}</p>
						<p>{contactMeData.email}</p>
					</div>
				</div>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	);
};
