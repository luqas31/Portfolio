import './Projects.css';
import { useState, useEffect } from 'react';
import { getData } from '../../services/api';
import { useHref } from 'react-router-dom';

export function Project() {
	const [projectData, setProjectData] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				setProjectData(data.projects[0]);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	});

	return (
		<div className='project'>
			<a href={projectData?.url}><img src={projectData?.image} alt={projectData?.alt} className='image' />
			
			<div className='overlay'>
				<h1 className='text'>{projectData?.title}</h1>
				<h2 className='secondary-text'>{projectData?.subtitle}</h2>
			</div></a>
		</div>
	);
}
