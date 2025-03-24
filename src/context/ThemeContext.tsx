import { createContext, useEffect, useState, ReactNode } from "react";

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Use a more direct approach to initialize darkMode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Execute this only on client side
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("darkMode");
      if (savedTheme !== null) {
        return savedTheme === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    // Default fallback for SSR
    return false;
  });

  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
