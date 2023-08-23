
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
/*import scss*/
import '../Footer/Footer.scss';
const Footer = () => {
  return (
    <div className='footer-top-wrap'>
      <Container>
        <div className='footer-menu-wrap'>
          <Row className='footer-menu'>
            <Col lg={3}>
              <div className='footer-logo'>
                <Link to='/'>
                  <img src='../../../public/image/logo-header.png'></img>
                </Link>
              </div>
            </Col>
            <Col lg={9}>
              <div className='footer-menu'>
                <nav>
                  <ul className='navigation'>
                      <li>
                        <Link to='/'>
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          MOVIE
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          TV SHOW
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          BLOG
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          CONTACT
                        </Link>
                      </li>
                  </ul>
                  <div className='footer-search'>
                      <form action="#">
                        <input type="text"  placeholder='Find Favorite Movie'/>
                        <button>
                          <SearchIcon/>
                        </button>
                      </form>
                  </div>
                </nav>
              </div>
            </Col>
          </Row>
        </div>
        <div className='footer-quick-wrap'>

        </div>
      </Container>
    </div>
  );
}

export default Footer;
