import React from 'react'
import NighModeProvider from './src/providers/NightModeProvider'

export const wrapRootElement = ({ element }) => (
  <NighModeProvider>{element}</NighModeProvider>
)