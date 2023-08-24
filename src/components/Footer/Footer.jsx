
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
/*import scss*/
import '../Footer/Footer.scss';
const Footer = () => {
  return (
    <div>
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
            <Row className='footer-wrapper'>
              <Col md={7}>
                <div className='quick-list'>
                  <ul>
                    <li>
                      <Link to='/'>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        HELP CENTER
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        TEAMS OF USE
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        PRIVACY
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={5}>
                <div className='footer-social'>
                  <ul>
                    <li>
                      <Link to='/'>
                        <FacebookIcon/>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <TwitterIcon/>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <GitHubIcon/>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <InstagramIcon/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
        </div>
      </Container>
    </div>
      <div className='copyright-wrap'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='copyright-text'>
                <p>
                Copyright © 2023. All Rights Reserved By 
                </p>
                <Link to='#'>Movflx</Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className='payment'>
                  <img src="../../../public/image/card_img.png"></img>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
    
    
  );
}

export default Footer;
