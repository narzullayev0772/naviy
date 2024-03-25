import {createContext, useState} from "react";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {
    },
});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={theme === 'light' ? 'lightTheme' : 'darkTheme'}>
                {children}
            </div>
        </ThemeContext.Provider>

    );
};