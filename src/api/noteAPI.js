import axios from "axios";
const urlApi = "http://192.168.1.32:8083"

const createNote = async(note) => {
    const body={
        title:note,
        uid:"admin"
    }
    return await axios.post(`${urlApi}/note/create`, body);
    }
const getAllNote = async(id) => {
    const body={
        uid:id
    }
    return await axios.post(`${urlApi}/note/getAll`, body);
}
const getDataNote = async(nid) => {
    const body={
        nid:nid
    }
    return await axios.post(`${urlApi}/content/get`, body);
}
const updateNote = async(nid,uid, content) => {
    const body={
        uid:uid,
        nid:nid,
        content:content
    }
    const res= await axios.post(`${urlApi}/content/create`, body);
    return res.data
}
const setColor = async(nid, color) => {
    const body={
        nid:nid,
        color:color
    }
    return await axios.post(`${urlApi}/note/setColor`, body);
}
const updateTitleNote = async(nid, title) => {
    const body={
        nid:nid,
        title:title
    }
    const res= await axios.post(`${urlApi}/note/updateTitle`, body);
    return res.data
}




export {

    createNote,
    getAllNote,
    getDataNote,
    updateNote,
    setColor, updateTitleNote
}