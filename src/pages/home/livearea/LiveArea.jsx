
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
/* import scss*/
import "../livearea/LiveArea.scss";

const LiveArea = () => {
  return (
    <Container>
        <Row>
            <Col xl={5}>
                <div className='title-live-movie'>
                    <span className='sub-title'>
                        ONLINE STREAMING
                    </span>
                    <h2 className='title'>Live Movie & TV Shows For Friends & Family</h2>
                </div>
                <div className='content-live-movie'>
                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                    <div className='live-fact-wrap'>
                        <div className='resolution'>
                            <h2>HD 4K</h2>
                        </div>
                        <div className='active-customer'>
                            <h4>20K+</h4>
                            <p>Active Customer</p>
                        </div>
                        
                    </div>
                    <Link to='' className='btn-live-movie'><PlayArrowIcon/> Watch Now</Link>
                </div>
            </Col>
            <Col xl={7}>
                <div className='live-movie-img'>
                    <img src="../../../public/image/live_img.png" alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default LiveArea;
