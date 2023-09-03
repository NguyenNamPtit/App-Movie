import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*import scss*/
import '../bannerblog/BannerBlog.scss';
const BannerBlog = () => {
  return (
    <Container>
        <Row>
            <Col lg={12}>
                <div className='banner-content'>
                    <h2 className='banner-title'>
                        News <span>Update</span>
                    </h2>
                    <nav className='breadcrumb-box'>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link to='/'>HOMEONE</Link>
                            </li>
                            <li className='breadcrumb-item-activity'>
                                Blog Page
                            </li>
                        </ol>
                    </nav>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default BannerBlog;
