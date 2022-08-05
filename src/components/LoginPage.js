import { useState, } from "react";
import {Content,Form} from "../theme/themes"
import { Link,useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import axios from "axios";
import { postAuth } from "./data";

export default function LoginPage(){

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [data,setData] = useState('');

    function setLogin(e){
        e.preventDefault();
        console.log(email,password);
        const getPromisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,{email,password});
        getPromisse.then((p)=>{navigate('/habitos',{state:p.data})});
        console.log(data)
        getPromisse.catch((p) => {setEmail('');setPassword('')});
    }   
    console.log(data)
    return(
        <Content>
            <img src={logo}/>
            <Form onSubmit={setLogin} >
                <input type="email" value={email} required placeholder='email' onChange={(e) =>{setEmail(e.target.value)}}/>
                <input type="password" value={password} required placeholder='senha' onChange={(e) =>{setPassword(e.target.value)}}/>
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/cadastro" ><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Content>
    )

}
