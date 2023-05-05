import axios from "axios"

export const getApiGroups = async () => {
    const url = `${import.meta.env.VITE_URL}getGrupos?ipcCveCia=OJEDA`;
    try {
        const { data } = await axios(url)
        return data.response.tt_ctGrupo.tt_ctGrupo;
    } catch (error) {
        console.log("Existe un error")
    }
}

export const getArticulos = async (objDate) => {
    const url = `${import.meta.env.VITE_URL}articulo_vendido`;
    try {
        const { data } = await axios.post(url, objDate)
        return data;
    } catch (error) {
        console.log("Existe un error")
    }
} 
