import React, { Component, Fragment } from 'react'
import { Card, Col,  Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SuggestedProduct extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment> 

        <Container  className=' text-center' fluid={true}>
        
        <div className='section-title text-center mb-55'>
            <h2>YOU MAY ALSO LIKE</h2>
            </div>
            
          <Row>
        
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to='/Productdetails'> 
            <Card className='image-box'>
                <img className='center' src="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70" alt=""  />
          
              <Card.Body>
           <p className='product-name-on-card'>realme C11 2021 (Cool Blue, 32 GB)  (2 GB RAM)
        </p>
            <p className='product-price-on-card '> Price: TK 7,499</p>
             </Card.Body>
           </Card>
           </Link>    
        
              </Col>
        
              <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            
            <Card className='image-box'>
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70" alt=""  />
          
              <Card.Body>
           <p className='product-name-on-card'>realme C11 2021 (Cool Grey, 32 GB)  (2 GB RAM)
        
        </p>
            <p className='product-price-on-card '> Price: TK 8,499</p>
             </Card.Body>
           </Card>
           <Link />
        
              </Col>
        
              <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box'>
                <img className='center' src="https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/b/o/m/c31-mzb0a0min-poco-original-imag7bzqxekkpkrv.jpeg?q=70" alt=""  />
          
              <Card.Body>
           <p className='product-name-on-card'>POCO C31 (Shadow Gray, 64 GB)  (4 GB RAM)
        </p>
            <p className='product-price-on-card '> Price: TK 9,499</p>
             </Card.Body>
           </Card>
        
        
              </Col>
               <Col className='pb-3' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box'>
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70" alt=""  />
          
              <Card.Body>
           <p className='product-name-on-card'>POCO C31 (Royal Blue, 32 GB)  (3 GB RAM)
        
        </p>
            <p className='product-price-on-card '> Price: TK 6,499</p>
             </Card.Body>
           </Card>
        
        
              </Col>
        
              <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box'>
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/kpmy8i80/mobile/q/z/z/m3-pro-5g-mzb0952in-poco-original-imag3th6btkchjn2.jpeg?q=70" alt=""  />
          
              <Card.Body>
           <p className='product-name-on-card'>POCO M3 Pro 5G (Power Black, 128 GB)  (6 GB RAM)
        </p>
            <p className='product-price-on-card '> Price: TK 7,499</p>
             </Card.Body>
           </Card>
        
        
              </Col>
        
              <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>    
            <Card className='image-box'>
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/krf91u80/mobile/i/f/m/f3-gt-mzb09huin-poco-original-imag57hec6wkrk77.jpeg?q=70" alt=""  />
          
              <Card.Body>
           <p className='product-name-on-card'>POCO F3 GT (Predator Black, 128 GB)  (8 GB RAM)
        </p>
            <p className='product-price-on-card '> Price: TK 3,499</p>
             </Card.Body>
           </Card>
        
        
              </Col>
        
              
              
        
            
          </Row>
        
        
        </Container>
        
            </Fragment>
    )
  }
}

export default SuggestedProduct
