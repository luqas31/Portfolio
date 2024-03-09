import { useEffect, useState } from 'react';
import { getData } from '../../services/api';
import './Projects.css';

export function Projects() {
	const [projectsPage, setProjectsPage] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				setProjectsPage(data.projectsPage[0]);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	});
	return (
		<div>
			<div className='projects'>
				<div className='title'>
					<h1 className='projects-title'>
						{projectsPage?.title} <span className='span-projects'>{projectsPage?.span}...</span>
					</h1>
				</div>
				<div className='projects-list'></div>
			</div>
		</div>
	);
}
