import React, { createContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextProps {
	theme: "light" | "dark"
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: "light",
	toggleTheme: () => {},
})

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
	const [theme, setTheme] = useState<"light" | "dark">("light")

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme") as "light" | "dark" | null
		if(currentTheme) {
			setTheme(currentTheme)
			document.documentElement.classList.toggle("dark", currentTheme === "dark")
		} else {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
			setTheme(prefersDark ? "dark" : "light")
			document.documentElement.classList.toggle("dark", prefersDark)
		}
	}, [])


	const toggleTheme = () => {
		const newTheme: "light" | "dark" = theme === "dark" ? "light" : "dark"
		setTheme(newTheme)
		document.documentElement.classList.toggle("dark", newTheme === "dark")
		localStorage.setItem("theme", newTheme)
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

