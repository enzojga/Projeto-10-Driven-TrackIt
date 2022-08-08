import styled from "styled-components"
import { useState } from "react"
import {DayDiv} from "../theme/themes"

export default function Day({children,setDayList,index,dayList,disable}){

    const [clicked,setClicked] = useState(false);
    

    return(
        <DayDiv color={clicked === false ? '#DBDBDB' : 'white'} bColor={clicked === false ? 'white' : '#CFCFCF'} onClick={() =>{disable === true ? console.log('') : setClicked((clicked === false ? true && setDayList([...dayList, index]) : false))} }>
            {children}
        </DayDiv>
    )
}
