const Tabla = ({ articulos }) => {
    const { ttArticulo } = articulos.response.ds_Articulo.ds_Articulo;
    return (
        <>
            <div class="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th className="text-2xl text-left">Platillo</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miercoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sabado</th>
                            <th>Domingo</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col mt-5">
                    {ttArticulo.map(articulos => (
                        <tr key={articulos.iArticulo}>
                            <th>{articulos.cDescripcion}</th>
                            {articulos.deValores.map((valor,index) =>(
                                <th key={index}>{valor}</th>
                            ) )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tabla