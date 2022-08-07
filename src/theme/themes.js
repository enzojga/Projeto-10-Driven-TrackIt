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
const DayDiv = styled.div`
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        background-color: ${props => props.bColor };
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: ${props => props.color };
        margin-left: 5px;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    & > div{
        display: flex;
        justify-content: space-between;
        & > h1{
            color: #126BA5;
            font-size: 23px;
            margin-left: 17px;
        }
        & > button{
            width: 40px;
            height: 35px;
            border-radius: 5px;
            background-color: #52B6FF;
            border-style: none;
            color:white;
            font-size: 27px;
            margin-right: 17px;
        }
    }
    p{
        font-weight: 400;
        font-size: 18px;
        color: #666666;
    }
`

export {Content,Form,DayDiv,Container}