import React, {useState,useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import Cards from "./cards"
import Curousel from "./curousel";
import { CRow } from '@coreui/react'
import CreateArea from "./form";
import Axios from 'axios';      

function Layout(){
    const [questionList, setQuestionList] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/get").then((response)=>{
        setQuestionList(response.data);
      })
    },[])
    
    return (<> <Header/>
    <Curousel />
    <CreateArea />
    <div style={{margin: '2% 10%'}}>
    <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
    {Array.isArray(questionList) && questionList.map((quest) => <Cards name={quest.name} question={quest.question}/>)}

    </CRow>
    </div>
    <Footer />
    </>)
}
export default Layout;

//{questionList.map((quest) => <Cards name={quest.name} question={quest.question}/>)}