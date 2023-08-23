import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
/*import scss*/
import "../newsletterarea/NewsletterArea.scss";


const NewsletterArea = () => {
  return (
    <Container>
        <div className='newsletter-inner-wrap'>
            <Row className='newsletter-wrap'>
                <Col lg={6}>
                    <div className='newsletter-content'>
                        <h4>Trial Start First 30 Days.</h4>
                        <p>Enter your email to create or restart your membership.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <form action="#" className='newsletter-form'>
                        <input type="email" required placeholder='Enter your email'/>
                        <button>GET STARTED</button>
                    </form>
                </Col>
            </Row>
        </div>
    </Container>
  );
}

export default NewsletterArea;
