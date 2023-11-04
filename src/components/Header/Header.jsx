import React, {  useState } from 'react';
//import component
import Overlay from '../Overlay/Overlay';
import SigninForm from '../SignIn/SigninForm';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../Header/Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
const Header = () => {
  //show login
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showOverlay, setshowOverlay] = useState(false);
  
  const toggleLoginForm = () => {
    const body = document.querySelector('body');
    setShowLoginForm(!showLoginForm);
    if (!showLoginForm) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    setshowOverlay(!showOverlay);

  };

  const handleOverlayClick = () => {
    setShowLoginForm(false);
    document.querySelector('body').style.overflow = 'auto';
    setshowOverlay(false);
  };
  
  return (
    <div   className='header-main'>
      <Container className='custom-container'>
        <Row>
          <Col>
            <div className='menu-wrap'>
              <div className='menu-nav show'>
                <div className='logo-header'>
                  <Link to=''>
                    <img src='../../public/image/logo-header.png' />
                  </Link>
                </div>
                <div className='main-menu'>
                  <ul className='navigation'>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="movie">Movie</Link>
                    </li>
                    <li>
                      <Link to="tvshow">Tv Show</Link>
                    </li>
                    <li>
                      <Link to="blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className='action-menu'>
                  <ul>
                    <li className='header-search'>
                        <Link to='/'>
                          <SearchIcon/>
                        </Link>
                    </li>
                    <li className='header-lang'>
                      <form action='/#'>
                        <div className='icon'>
                          <LanguageIcon/>
                        </div>
                        <select className='lang-dropdown'>
                          <option value="true">En</option>
                          <option value="true">Au</option>
                          <option value="true">Ar</option>
                          <option value="true">TU</option>
                        </select>
                      </form>
                    </li>
                    <li className='header-btn' >
                      <Link onClick={toggleLoginForm}>SIGN IN</Link>
                      {showLoginForm && <SigninForm/>}
                      {showOverlay && <Overlay onClick={handleOverlayClick}/>}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Header;
