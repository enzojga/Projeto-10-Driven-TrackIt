import styled from "styled-components";
import { getConfig,getToken } from "./data";
import { postCheck,getHabits } from "./data";

export default function TodayHabit(props){
    const token = getToken();
    const config = getConfig();
    let type = props.done ? 'uncheck' : 'check';
    let color = props.highestSequence === props.currentSequence && props.highestSequence !== 0  ? '#8FC549' : '#666666';

    return(
        <TodayContainer>
            <HabitInfo>
                <h1>{props.name}</h1>
                <Sequence done={props.done}>Sequência atual: <p> {props.currentSequence} dias</p></Sequence>
                <Record color={color}>Seu recorde: <p>{props.highestSequence} dias</p></Record>
            </HabitInfo>
            <CheckMark onClick={() => {postCheck(props.id,type,config).then(p =>getHabits('/today',config).then(p=>{props.setTodayHabits(p.data);props.setHabits(p.data);props.setDoneTasks(p.data.filter(h=> h.done === true))}))}} done={props.done}>
                <ion-icon name="checkmark-sharp"></ion-icon>
            </CheckMark>
        </TodayContainer>
    )
}

const TodayContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
`
const HabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    span,p{
        margin-top: 0;
        font-size: 13px;
    }
    h1{
        margin-bottom: 7px;
        font-size: 20px;
    }
`
const CheckMark = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.done === true ? '#8FC549' : '#E7E7E7'};
    color: white;
    font-size: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-right: 15px;
`
const Sequence = styled.span`
    display: flex;
    p{
        color:${props => props.done === true ? '#8FC549' : '#666666'};
        margin-left: 3px;
    }
    margin-bottom: 3px;
`
const Record = styled.span`
    display: flex;
    p{
        color:${props => props.color};
        margin-left: 3px;
    }
`