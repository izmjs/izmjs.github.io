import React, { createContext } from 'react'
import useNightMode from '../hooks/useNightMode'

export const NightModeContext = createContext(null)

export default ({ children }) => {
  const [mode, toggleTheme] = useNightMode()

  return (
    <NightModeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      {children}
    </NightModeContext.Provider>
  )
}