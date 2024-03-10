import './Projects.css';
import { useState, useEffect } from 'react';
import { getData } from '../../services/api';

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
		<div className='project-item'>
			<a href={projectData?.url} target='_blank'>
				<div className='project-img'>
					<img src={projectData?.image} alt={projectData?.alt} />
				</div>
				<div className='project-title'>
					<h1>{projectData?.title}</h1>
				</div>
				<div className='project-subtitle'>
					<p>{projectData?.subtitle}</p>
				</div>
			</a>
		</div>
	);
}
