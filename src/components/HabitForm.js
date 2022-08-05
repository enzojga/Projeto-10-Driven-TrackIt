import styled from "styled-components"

export default function HabitForm(){
    return(
        <FormBody>
            <Form>
            <input placeholder="nome do hábito"/>
            <button type="submit">Salvar</button>
            </Form>
        </FormBody>
    )
}

const FormBody = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`
const Form = styled.form`
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            font-size: 20px;
            color: #DBDBDB;
        }
    }
    button{
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        border-style: none;
        color:white;
        font-size: 18px;
        margin-right: 17px;
    }
`