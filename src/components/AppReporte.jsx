import useReporte from "../hooks/useReporte"
import FormReporte from "./header/FormReporte"
import Tabla from "./tablas/Tabla"

const AppReporte = () => {
    const {articulos} = useReporte();
    return (
    <header className='container w-11/12 mx-auto mt-5'>
        <h2 className='text-4xl font-black text-center'>Reporte Ventas</h2>
        <FormReporte/>
        
        {articulos.response && <Tabla
            articulos = {articulos}
        /> }
    </header>
    )
}

export default AppReporte
