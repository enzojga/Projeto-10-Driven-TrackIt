import styled from "styled-components";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Footer(){
    const {habits,doneTasks} = useContext(UserContext);
    console.log(habits,doneTasks)
    return(
        <FooterStyle> <Link to='/habitos'><p>Hábitos</p></Link>  <Link to='/hoje'><div><CircularProgressbar value={(100 * doneTasks.length) / habits.length}
                                            text={`Hoje`}
                                            background
                                            backgroundPadding={6}
                                            styles={buildStyles({
                                                backgroundColor: "#52B6FF",
                                                textColor: "white",
                                                pathColor: "white",
                                                trailColor: "transparent"
                                      })}                                      
                                        /></div></Link> <Link to='/historico'><p>Histórico</p></Link></FooterStyle>
    )
}

const FooterStyle = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom:0;
    left: 0;
    a{
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
        margin: auto 30px auto 30px;
    }
    div{
        position: absolute;
        width: 91px;
        height: 91px;
        bottom: 30%;
        left: 36%;
    }
`
