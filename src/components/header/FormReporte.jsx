import useReporte from "../../hooks/useReporte";

const FormReporte = () => {
    const { grupos, handleChange, handleSubmit } = useReporte();
    return (
        <form className="mt-5 flex flex-col gap-5"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col items-start gap-1 text-xl">
                <label htmlFor="ipdaFechaInicio">Fecha de inicio:</label>
                <input
                    type="date"
                    name="ipdaFechaInicio"
                    className="text-xl border px-5 py-1 rounded"
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="ipiGrupoID"
                    className="text-xl">Seleccione un grupo</label>
                <select
                    onChange={e => handleChange(e)}
                    name="ipiGrupoID"
                    className="border p-1 text-xl shadow rounded">
                    <option value="">-- Selecciona un Grupo --</option>
                    {grupos?.map(grupo => (
                        <option key={grupo.iGrupoID} value={grupo.iGrupoID}>{grupo.cDescripcion}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="text-2xl px-5 py-1 bg-gray-700 text-white rounded">
                Buscar
            </button>
        </form>
    )
}

export default FormReporte
