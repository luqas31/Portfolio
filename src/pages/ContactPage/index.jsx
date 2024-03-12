import { useEffect, useState } from 'react';
import { getData } from '../../services/api';

export const ContactMePage = () => {
	const [contactMeData, setContactMeData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				setContactMeData(data.contactMe[0]);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	});

	return (
		<div className='contact-me-page'>
			{contactMeData ? (
				<div className='contact-wrapper'>
					<div className='contact-container'>
						<h1>{contactMeData?.title}</h1>
					</div>
					<div className='contact'>
						<h2>{contactMeData?.subtitle}</h2>
						<p>{contactMeData?.phoneNumber}</p>
						<p>{contactMeData?.email}</p>
					</div>
				</div>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	);
};
