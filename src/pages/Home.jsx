import { NavLink } from 'react-router-dom';
import { getData } from '../services/api';
import { useEffect, useState } from 'react';

export function Home() {
	const [homeData, setHomeData] = useState();
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				setHomeData(data.home[0]);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	});

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
					<NavLink className='projects-button'>Projects &gt; </NavLink>
				</div>
			</div>
		</div>
	);
}
