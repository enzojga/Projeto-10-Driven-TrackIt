import { useContext,image, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"

export default function Header(){

    const {image} = useContext(UserContext);
    const iamgeTeste = JSON.parse(localStorage.getItem('image'));
    return(
        <HeaderDiv>
            <h1>TrackIt</h1>
            <img src={iamgeTeste}/>
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
        font-size: 40px;
        margin-left: 18px;
        font-family: Playball;
        color: white;
    }
`