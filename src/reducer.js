
export function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_PROJECTS_DATA':
			return { ...state, projectsData: payload };
		case 'SET_ABOUT_ME_DATA':
			return payload;
		case "SET_CONTACT_ME_DATA":
			return payload;
		case "SET_HOME_DATA":
			return payload;

		default:
			return state;
	}
}
