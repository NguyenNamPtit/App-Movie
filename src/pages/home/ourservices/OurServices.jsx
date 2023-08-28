import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../ourservices/OurServices.scss";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import { Link } from 'react-router-dom';
const OurServices = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
            <div className='services-img-wrap'>
                <img src='../../../public/image/services_img.jpg'/>
                <Link to='' className='download-btn'>
                    Download
                    <img src="../../../public/image/download-btn.svg" alt="" />
                </Link>
            </div>
        </Col>
        <Col lg={6}>
            <div className='services-content-wrap'>
              <div className='title-services'>
                <span className='sub-title'>OUR SERVICES</span>
                <h2 className='title'>Download Your Shows Watch Offline.</h2>
              </div>
              <p className='info-services'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
              <div className='services-list'>
                <ul>
                  <li>
                    <div className='icon'>
                      <LiveTvIcon/>
                    </div>
                    <div className='content'>
                      <h5>Enjoy on Your TV.</h5>
                      <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <PhotoCameraFrontIcon/>
                    </div>
                    <div className='content'>
                      <h5>Watch Everywhere.</h5>
                      <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OurServices;
