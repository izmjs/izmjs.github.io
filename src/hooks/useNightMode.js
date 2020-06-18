import { useState, useEffect } from 'react'
import useMedia from '../hooks/useMedia'

export default () => {
  const [mode, setMode] = useState(null)

  const toggleTheme = () => {
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'night')
      setMode('night')
    } else {
      window.localStorage.setItem('theme', 'light')
      setMode('light')
    }
  }

  const prefersNightMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  )

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
  
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme)
      setMode(localTheme)
    } else {
      if (prefersNightMode) {
        setMode('night')
      } else {
        setMode('light')
      }
    }
  }, [prefersNightMode])

  return [mode, toggleTheme]
}