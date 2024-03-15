import { useReducer } from 'react';
import { reducer } from '../reducer';
import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, dispatch] = useReducer(reducer, 'light');

	const toggleTheme = () => {
		dispatch({ type: 'TOGGLE_THEME' });
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
