// "use client"

// import { createContext, useCallback, useMemo, useState } from "react";

// type Theme = 'light' | 'dark';

// type ThemeContextType = {
//     toggleTheme : () => void,
//     theme: string;
// }

// export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// type ThemeProviderProps = {
//     children : React.ReactNode;
// }

// export const ThemeProvider = ({children} : ThemeProviderProps) => {
//     const [theme, setTheme] = useState<Theme>("dark");

//     const toggleTheme = useCallback(() => {setTheme((theme) => theme === 'light' ? 'dark' : 'light')}, []);

//     const value = useMemo(()=> {
//         return({ theme, toggleTheme})
//     }, [theme, toggleTheme])

//     return(
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     )
// };
