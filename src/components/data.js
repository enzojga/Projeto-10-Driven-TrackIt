import axios from "axios";

function postAuth(type,obj,setData){

    const getPromisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/${type}`,obj);
    getPromisse.then((p)=>{setData(p)})
    getPromisse.catch((p) => {setData(p)})
}

export {postAuth};