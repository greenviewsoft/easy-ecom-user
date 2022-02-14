import React, { Component, Fragment } from 'react'
import { Button, Col,Form, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';

export default class Company extends Component {
  constructor(){
    super();
    this.state={
      company:"",
      loaderDiv:"",
      mainDiv:"d-none"
    }
}

componentDidMount(){
    const SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

    axios.get(AppURL.AllSiteInfo).then(response =>{
         let StatusCode = response.status;
         if(StatusCode==200){
              let JsonData = (response.data)[0]['company'];
              this.setState({company:JsonData,loaderDiv:"d-none",  mainDiv:""});
              sessionStorage.setItem("SiteInfoPurchase",JsonData)

         } 

    }).catch(error=>{

    });
}
  render() {
    return (
        <Fragment>
        <Container>
              
              <Row className='p-2'>
                  <Col className='shadow-sm bg-white mt-2' md={12} lg={12}  sm={12} xs={12}>
                  <div className={this.state.loaderDiv}>

<div class="ph-item">
 <div class="ph-col-12">
     <div class="ph-row">
         <div class="ph-col-4"></div>
         <div class="ph-col-8 empty"></div>
         <div class="ph-col-6"></div>
         <div class="ph-col-6 empty"></div>
         <div class="ph-col-12"></div>
         <div class="ph-col-12"></div>
         <div class="ph-col-12"></div>
         <div class="ph-col-12"></div>
     </div>
 </div>
</div>

<div class="ph-item">
 <div class="ph-col-12">
     <div class="ph-row">
         <div class="ph-col-4"></div>
         <div class="ph-col-8 empty"></div>
         <div class="ph-col-6"></div>
         <div class="ph-col-6 empty"></div>
         <div class="ph-col-12"></div>
         <div class="ph-col-12"></div>
         <div class="ph-col-12"></div>
         <div class="ph-col-12"></div>
     </div>
 </div>
</div>


              </div>

              <div className={this.state.mainDiv}>
                     
          <h4 className='section-title-contact'> company Page </h4>
          <p className='section-title-contact'> 
          { ReactHtmlParser(this.state.company) }
          
          </p>
          </div>
                  
                  </Col>
          
              </Row>
          </Container>
              </Fragment>
    )
  }
}
