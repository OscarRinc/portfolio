import React, { ReactNode, useState } from 'react';

interface IDarkMode {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
}

const defaultContext: IDarkMode = {
  isDarkMode: true,
  setIsDarkMode: () => {},
}

export const DarkModeContext = React.createContext<IDarkMode>(defaultContext);

export const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const setDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode: setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}