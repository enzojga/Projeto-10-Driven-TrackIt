import styled from "styled-components";

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color === undefined ? 'white' : props.color };
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-weight: 400;
        font-size: 14px;
        color: #52B6FF;
        margin-top: 25px;
    }
    a{
        text-decoration: underline;
        text-decoration-color: #52B6FF;
    }
`
const Form = styled.form`

    display: flex;
    flex-direction: column;
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 6px 0 6px 0;
        ::placeholder{
            color: #DBDBDB;
            font-weight: 400;
            font-size: 20px;
        }
    }
    button{
        width: 100%;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        border-style: none;
        align-self: center;
        font-size: 20.976px;
        line-height: 26px;
        color:white;
        box-sizing: border-box;
    }
`

export {Content,Form}