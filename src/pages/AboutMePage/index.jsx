import { useEffect, useState } from 'react';
import { getData } from '../../services/api';

export const AboutMePage = () => {
	const [aboutMeData, setAboutMeData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				setAboutMeData(data.aboutMe[0]);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	});

	return (
		<div className='about-me-page'>
			{aboutMeData ? (
				<div>
					<h1>{aboutMeData?.title}</h1>
					<p>{aboutMeData?.text}</p>
				</div>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	);
};
