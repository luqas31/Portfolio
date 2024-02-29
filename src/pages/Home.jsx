import { NavLink } from 'react-router-dom';


export function Home() {
	return (
		<div>
			<div className='home-container'>
				<h1>Hello, I'm Lucas Souza</h1>
				<h2>
					I am a Web Development student <span>&lt;/&gt;</span>
				</h2>
				<div className='projects-button-container'>
					<NavLink className='projects-button'>Projects &gt;</NavLink>
				</div>
			</div>
		</div>
	);
}
