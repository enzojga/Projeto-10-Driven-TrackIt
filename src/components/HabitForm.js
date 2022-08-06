import styled from "styled-components"
import Day from "./Day"
import { getConfig } from "./data";
import { useState } from "react"
import axios from "axios";

export default function HabitForm(){

    const [dayList,setDayList] = useState([]);
    const [name,setName] = useState('');
    const config = getConfig();
    
    function postHabit(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{name:name,days:dayList},config);
        promise.then(p => console.log(p))
    }
    return(
        <FormBody>
            <Form onSubmit={postHabit}>
            <input placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)}/>
            <Days>
                <Day setDayList={setDayList} dayList={dayList} index={0}>D</Day>
                <Day setDayList={setDayList} dayList={dayList} index={1}>S</Day>
                <Day setDayList={setDayList} dayList={dayList} index={2}>T</Day>
                <Day setDayList={setDayList} dayList={dayList} index={3}>Q</Day>
                <Day setDayList={setDayList} dayList={dayList} index={4}>Q</Day>
                <Day setDayList={setDayList} dayList={dayList} index={5}>S</Day>
                <Day setDayList={setDayList} dayList={dayList} index={6}>S</Day>
            </Days>

            <div>
                <p>Cancelar</p>
                <button type="submit">Salvar</button>
            </div>
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
    div{
        display: flex;
        align-self: flex-end;
    }
    button{
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        border-style: none;
        color:white;
        font-size: 18px;
    }
    & > :nth-child(3){
        justify-content: flex-end;
    }
`
const Days = styled.div`
    width: 100%;
    display: flex;
`
