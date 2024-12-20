import { useContext } from 'react';
import { DarkModeContext } from '../context/darkMode';

export default function useDarkMode() {
	const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

	const themeStatus: 'dark' | 'light' = isDarkMode ? 'dark' : 'light';

	return { themeStatus, setIsDarkMode };
}
