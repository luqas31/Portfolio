import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import { Home } from './pages/HomePage/index';
import { ErrorPage } from './pages/ErrorPage/index';
import { Projects } from './pages/Projects/index';
import { AboutMePage } from './pages/AboutMePage/index';
import { ContactMePage } from './pages/ContactPage';

export const router = createBrowserRouter([
	{
		path: '/Portfolio/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'projects',
				element: <Projects />,
			},
			{
				path: 'aboutme',
				element: <AboutMePage />,
			},
			{
				path: 'contact',
				element: <ContactMePage />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
