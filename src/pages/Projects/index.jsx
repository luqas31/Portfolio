import { useEffect, useReducer } from 'react';
import { getData } from '../../services/api';
import './ProjectsPage.css';
import { ProjectList } from '../../components/ProjectList';
import { reducer } from '../../reducer';

export function Projects() {
	const [projectsPage, dispatch] = useReducer(reducer, null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();

				dispatch({ type: 'SET_PROJECT_DATA', payload: data.projectsPage[0] });
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			<div className='projects'>
				<div className='title'>
					<h1 className='projects-title'>
						{projectsPage?.title} <span className='span-projects'>{projectsPage?.span}...</span>
					</h1>
				</div>
			</div>
			<div className='project-list'>
				<ProjectList />
			</div>
		</div>
	);
}