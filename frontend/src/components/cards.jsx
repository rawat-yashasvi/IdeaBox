import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCard, CCardBody, CCardText, CCardTitle, CButton, CCol} from '@coreui/react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';                                                                                                                                                                                                                  
import Reply from "./replyform";
//import Views from "./views";



function Cards(props){



    return(<>
    
  <CCol xs>
    <CCard className="h-100" style={{backgroundColor: "#E3F4F4"}}>
      
      <CCardBody>
        <CCardTitle>{props.name}</CCardTitle>
        <CCardText>
          {props.question}
        </CCardText>

        <CButton href="https://www.youtube.com/" style={{margin: 10}} onClick={()=>{} }>View Replies </CButton>      
        
        

        <Popup trigger={<CButton color="success">Reply </CButton>
        } modal nested>
          <Reply />
        </Popup>
        
        
      </CCardBody>
    </CCard>
  </CCol>

</>)
}
export default Cards;

//<CCardImage style={{height: "12rem"}} orientation="top" src={img} />