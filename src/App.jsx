import React from 'react'
import { ReporteProvider } from './context/ReporteProvider'
import useReporte from './hooks/useReporte'
import AppReporte from './components/AppReporte'

const App = () => {
  return (
    <ReporteProvider>
        <AppReporte/>
    </ReporteProvider>
  )
}

export default App
