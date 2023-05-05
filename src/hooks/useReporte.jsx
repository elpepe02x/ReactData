import { useContext } from 'react'
import ReporteContext from '../context/ReporteProvider'

const useReporte = () => {
  return useContext(ReporteContext)
}

export default useReporte
