import {Content,Form} from "../theme/themes"
import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { postAuth } from "./data";
export default function(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [data,setData] = useState({});

    const navigate = useNavigate();

    function postSingIn(e){
        e.preventDefault();
        const postObj ={email:email,
                        password:password,
                        name:name,
                        image:image}

        const getPromisse = postAuth('sign-up',postObj);
        getPromisse.then((p)=>{console.log(p)});
        console.log(data)
        getPromisse.catch((p) => {setEmail(''); setPassword(''); setName(''); setImage('');});
    }
    console.log(data);
    return(
        <Content>
            <img src={logo}/>
            <Form onSubmit={postSingIn}>
                <input type='email' required placeholder="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                <input type='password' required placeholder="senha" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
                <input type='text' required placeholder="nome" value={name} onChange={(e) =>{setName(e.target.value)}}></input>
                <input type='url' required placeholder="foto" value={image} onChange={(e) =>{setImage(e.target.value)}}></input>
                <button>Cadastrar</button>
            </Form>
            <Link to="/" ><p>Já tem uma conta? Faça login!</p></Link>
        </Content>
    )
}