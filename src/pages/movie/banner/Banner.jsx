import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/*import scss*/
import "../banner/Banner.scss";

const Banner = () => {
  return (
    <Container>
        <Row>
            <Col lg={12}>
                <div className='banner-content'>
                    <h2 className='banner-title'>
                        Our <span>Movie</span>
                    </h2>
                    <nav className='breadcrumb-box'>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link to='/'>HOMEONE</Link>
                            </li>
                            <li className='breadcrumb-item-activity'>
                                Movie
                            </li>
                        </ol>
                    </nav>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default Banner;
