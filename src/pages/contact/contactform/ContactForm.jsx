import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
/*import scss*/
import '../contactform/ContactForm.scss';
const ContactForm = () => {
  return (
    <Container>
        <Row>
            <Col xl={8} lg={7}>
                <div className='contact-form-wrap'>
                    <div className='contact-title'>
                        <h2 className='title'>
                            Contact Form
                        </h2>
                    </div>
                    <div className='contact-form'>
                        <form action="#">
                            <Row>
                                <Col md={6}>
                                    <input type="text"  placeholder='Your Name *'/>
                                </Col>
                                <Col md={6}>
                                    <input type="text" placeholder='Your Email *' />
                                </Col>
                            </Row>
                            <input type="text"  placeholder='Subject *'/>
                            <textarea name='message' placeholder='Type Your Message...'></textarea>
                            <button className='btn'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Col>
            <Col xl={4} lg={5}>
                <div className='infomation-title'>
                    <h2 className='title'>
                        Infomation
                    </h2>
                </div>
                <div className='contact-info-wrap'>
                    <p className='find-solution'>
                        <span>Find solution : </span>
                        to common problems, or get help from a support agent industry's standard .
                    </p>
                    <div className='contact-info-list'>
                        <ul>
                            <li>
                                <div className='icon'>
                                    <FmdGoodIcon/>
                                </div>
                                <p>
                                    <span>Address : </span>
                                    W38 Park Road New York
                                </p>
                            </li>
                            <li>
                                <div className='icon'>
                                    <PhoneIcon/>
                                </div>
                                <p>
                                    <span>Phone : </span>
                                    (09) 123 854 365
                                </p>
                            </li>
                            <li>
                                <div className='icon'>
                                    <EmailIcon/>
                                </div>
                                <p>
                                    <span>Email : </span>
                                    support@movflx.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default ContactForm;
