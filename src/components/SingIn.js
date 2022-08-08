import {Content,Form} from "../theme/themes"
import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import logo from '../images/logo.png'
import { postAuth } from "./data";
export default function(){
    
    const [disable, setDisable] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [data,setData] = useState({});

    const navigate = useNavigate();

    function postSingIn(e){
        e.preventDefault();
        setDisable(true);
        const postObj ={email:email,
                        password:password,
                        name:name,
                        image:image}

        const getPromisse = postAuth('sign-up',postObj);
        getPromisse.then((p)=>navigate('/'));
        getPromisse.catch((p) => {setDisable(false);alert('Preencha os campos corretamente')});
    }
    return(
        <Content>
            <img src={logo}/>
            <Form onSubmit={postSingIn}>
                <input type='email' required placeholder="email" disabled={disable} value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                <input type='password' required placeholder="senha" disabled={disable} value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
                <input type='text' required placeholder="nome" disabled={disable} value={name} onChange={(e) =>{setName(e.target.value)}}></input>
                <input type='url' required placeholder="foto" disabled={disable} value={image} onChange={(e) =>{setImage(e.target.value)}}></input>
                <button disabled={disable}>{disable === true ? <ThreeDots
                                                height = "80"
                                                width = "80"
                                                radius = "9"
                                                color = 'white'
                                                ariaLabel = 'three-dots-loading'     
                                                wrapperStyle
                                                wrapperClass
                                            /> : 'Cadastrar'}</button>
            </Form>
            <Link to="/" ><p>Já tem uma conta? Faça login!</p></Link>
        </Content>
    )
}