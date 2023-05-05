import { createContext, useEffect, useState } from "react";
import { getApiGroups, getArticulos } from "../service";

const ReporteContext = createContext();

const ReporteProvider = ({ children }) => {
    const [grupos, setGrupos] = useState([]);
    const [formData, setFormData] = useState({ ipcCveCia: "OJEDA", ipdaFechaInicio: '', ipdaFechaFin: "2022-02-08", iplCantidad: "false", ipiGrupoID: 0, });
    const [articulos, setArticulos] = useState({});
    useEffect(() => {
        const getGroup = async () => {
            const data = await getApiGroups();
            setGrupos(data);
        };
        getGroup()
    }, []);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            request: formData
        }
        const data = await getArticulos(requestData)
        setArticulos(data);
    };

    return (
        <ReporteContext.Provider value={{
            grupos,
            handleChange,
            handleSubmit,
            articulos
        }}>
            {children}
        </ReporteContext.Provider>
    )
}
export { ReporteProvider }
export default ReporteContext
