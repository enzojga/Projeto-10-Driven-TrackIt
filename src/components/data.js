import axios from "axios";
import  dayjs from "dayjs";
import 'dayjs/locale/pt-br'
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

function getDate(){
    dayjs.locale('pt-br');
    const weekDay = dayjs().format('dddd').charAt(0).toUpperCase() + dayjs().format('dddd').slice(1);
    const mouthDay = dayjs().format('DD');
    const mouth = dayjs().format('MM');
    return(`${weekDay}, ${mouthDay}/${mouth}`);
}
function getHabits(type,config){
    const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits${type}`,config);
    return promisse
}
function postCheck(id,type,config){
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${type}`,config);
    return promise;
}
export {postAuth,getToken,getConfig,getDate,getHabits,postCheck};