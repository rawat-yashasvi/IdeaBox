import React from "react";
import { CCarousel } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from "@coreui/react";
import img from "./images/cur.jpg";
import img1 from "./images/img1.jpg"

function Curousel(){
    return(<> 
    <CCarousel controls indicators dark style={{margin:"3.5%", marginTop:"2%"}}>
  <CCarouselItem>
    <CImage className="d-block w-100 cimg cimg" src={img} alt="img" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Idea Box</h5>
      <p>Step into the Idea Box and unlock a world of conversation. Share your thoughts, inspire others, and fuel the spirit of collaboration.</p>
    </CCarouselCaption>
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100 cimg cimg" src={img1} alt="img" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Idea Box</h5>
      <p>The Idea Box is your platform for innovation. Share your ideas, explore new concepts, and foster a vibrant community built on the exchange of thought-provoking discussions.</p>
    </CCarouselCaption>
  </CCarouselItem>
  
</CCarousel>
    </>)
}

export default Curousel;