import { useContext,image, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"

export default function Header(){

    const {image} = useContext(UserContext);
    return(
        <HeaderDiv>
            <h1>Texto</h1>
            <img src={image}/>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top:0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 18px;
    }
    h1{
        font-size: 20px;
        margin-left: 18px;
    }
`