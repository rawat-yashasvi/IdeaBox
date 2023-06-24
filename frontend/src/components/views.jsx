import React, {useState,useEffect} from "react";
//import questions from "./questions";
import Axios from 'axios';   
import {CRow, CCard, CCardBody, CCardText, CCardTitle, CCol} from '@coreui/react'

function Views(props){
  
    const [questionList, setQuestionList] = useState([])

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/getReply").then((response)=>{
        setQuestionList(response.data);
      })
    },[])

    return(
<div>
    <CRow>
    {questionList.map((quest)=>{return <div>    <CCol xs>
    <CCard className="h-100" style={{backgroundColor: "#E3F4F4"}}>
      <CCardBody>
        <CCardTitle>{quest.name}</CCardTitle>
        <CCardText>
        {quest.question}
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol></div>})}
  </CRow>
</div>
    )
}

export default Views;
