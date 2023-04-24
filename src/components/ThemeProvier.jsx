import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
	darkMode: false,
	toggleDarkMode: () => {},
});

const ThemeProvier = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => setDarkMode(!darkMode);

	return <div className={darkMode ? "dark" : ""}>{children}</div>;
};

export default ThemeProvier;
