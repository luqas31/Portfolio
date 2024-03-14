import { useEffect, useReducer } from 'react';
import { getData } from '../../services/api';
import { Project } from '../Projects/index';
import './ProjectList.css';
import { reducer } from '../../reducer';

export const ProjectList = () => {
	const initialState = {
		projectsData: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getData();
				dispatch({ type: 'SET_PROJECTS_DATA', payload: data.projects });
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div className='project-list'>
			<div className='project-position'>
				{state.projectsData.map(project => (
					<Project key={project.id} project={project} className='project' />
				))}
			</div>
		</div>
	);
};
