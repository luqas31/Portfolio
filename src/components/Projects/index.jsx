import './Projects.css';
import { useState, useEffect } from 'react';

export function Project({ project }) {
	const [projectData, setProjectData] = useState(project);

	useEffect(() => {
		setProjectData(project);
	}, [project]);

	if (!projectData) {
		return <p>Carregando...</p>;
	}

	return (
		<div className='project'>
			<a href={projectData.url} target='_blank' rel='noopener noreferrer'>
				<img src={projectData.image} alt={projectData.alt} className='image' />

				<div className='overlay'>
					<h1 className='text'>{projectData.title}</h1>
					<h2 className='secondary-text'>{projectData.subtitle}</h2>
				</div>
			</a>
		</div>
	);
}
