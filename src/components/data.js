import axios from "axios";

function postAuth(type,obj){
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/${type}`,obj);
    return promise;
}

function getToken(){
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
}

function getConfig(){
    const token = getToken();
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return config;
}
export {postAuth,getToken,getConfig};