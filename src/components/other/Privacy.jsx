import React, { Component, Fragment } from 'react'
import { Button, Col,Form, Container, Row } from 'react-bootstrap'

export default class Privacy extends Component {
  render() {
    return (
        <Fragment>
        <Container>
              
              <Row className='p-2'>
                  <Col className='shadow-sm bg-white mt-2' md={12} lg={12}  sm={12} xs={12}>
                     
          <h4 className='section-title-contact'> Privacy Polecy Page </h4>
          <p className='section-title-contact'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus laborum corrupti eius alias, ut eveniet consequatur omnis accusamus, atque blanditiis, quod mollitia. Id, placeat magnam perspiciatis modi quidem, neque nam est minima corporis aut vero reprehenderit quos doloribus. Nostrum minima quisquam accusamus ipsam modi necessitatibus, natus culpa incidunt esse reprehenderit?</p>
                  
                  </Col>
          
              </Row>
          </Container>
              </Fragment>
    )
  }
}
