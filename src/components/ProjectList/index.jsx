import { useState, useEffect } from 'react';
import { getData } from '../../services/api';
import { Project } from '../Projects/index';
import './ProjectList.css';

export const ProjectList = () => {
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				setProjectsData(data.projects);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div className='project-list'>
			<div className='project-position'>
				{projectsData.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</div>
	);
};
