import React, { Component, Fragment } from 'react'
import { Button, Col,Form, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import AppURL from '../../api/AppURL';


export default class Privacy extends Component {

  
  constructor(){
    super();
    this.state={
         about:""
    }
}

componentDidMount(){
    axios.get(AppURL.AllSiteInfo).then(response =>{
         let StatusCode = response.status;
         if(StatusCode==200){
              let JsonData = (response.data)[0]['about'];
              this.setState({about:JsonData});
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
                     
          <h4 className='section-title-contact'> ABout us Page </h4>
          <p className='section-title-contact'> {this.state.about}  </p>
                  
                  </Col>
          
              </Row>
          </Container>
              </Fragment>
    )
  }
}
