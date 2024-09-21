import React, { useEffect, useState } from "react";
//import component
import Overlay from "../Overlay/Overlay";
import SigninForm from "../SignIn/SigninForm";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../Header/Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
import { setShowOverlay } from "../../redux/features/overLaySlide";
import { useModal } from "../../Contexts/useModal";
import * as UserServices from "../../services/UserServices";
import { Button, Popover, Space } from "antd";
import { resetUser } from "../../redux/features/userSlide";
import toast from "react-hot-toast";
const Header = () => {
  //show login

  const { modalSigninVisible, setModalSigninVisible } = useModal();
  const { modalSignupVisible, setModalSignupVisible } = useModal();
  const dispatch = useDispatch();
  const { showOverlay } = useSelector((state) => state.overlay);
  const [username, setuserName] = useState("");
  const user = useSelector((state) => state.user);
  console.log("user", user);

  useEffect(() => {
    setuserName(user?.name);
  }, [user?.name]);

  const toggleLoginForm = () => {
    const body = document.querySelector("body");
    setModalSigninVisible(!modalSigninVisible);

    if (!modalSigninVisible) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    dispatch(setShowOverlay(!showOverlay));
  };

  const handleOverlayClick = () => {
    setModalSigninVisible(false);
    setModalSignupVisible(false);
    document.querySelector("body").style.overflow = "auto";

    dispatch(setShowOverlay(!showOverlay));
  };
  const handleLogout = async () => {
    await UserServices.logoutUser();
    dispatch(resetUser());
    localStorage.removeItem("access_token");
    toast.success("Logout in successfully");
  };
  //
  const content = (
    <div className="header-info-user">
      <Link to="profile-user">information</Link>
      <p onClick={handleLogout}>logout</p>
    </div>
  );
  return (
    <div className="header-main">
      <Container className="custom-container">
        <Row>
          <Col>
            <div className="menu-wrap">
              <div className="menu-nav show">
                <div className="logo-header">
                  <Link to="">
                    <img src="../../public/image/logo-header.png" />
                  </Link>
                </div>
                <div className="main-menu">
                  <ul className="navigation">
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
                <div className="action-menu">
                  <ul>
                    <li className="header-search">
                      <Link to="/">
                        <SearchIcon />
                      </Link>
                    </li>
                    <li className="header-lang">
                      <form action="/#">
                        <div className="icon">
                          <LanguageIcon />
                        </div>
                        <select className="lang-dropdown">
                          <option value="true">En</option>
                          <option value="true">Au</option>
                          <option value="true">Ar</option>
                          <option value="true">TU</option>
                        </select>
                      </form>
                    </li>
                    {user?.access_token ? (
                      <>
                        <div className="user-account">
                          <Popover content={content} trigger="click">
                            <AccountCircleIcon />
                          </Popover>{" "}
                          {username?.length ? username : user?.name}
                        </div>
                      </>
                    ) : (
                      <li className="header-btn">
                        <Link to="#" onClick={toggleLoginForm}>
                          SIGN IN
                        </Link>
                      </li>
                    )}

                    {modalSigninVisible && <SigninForm />}
                    {showOverlay && <Overlay onClick={handleOverlayClick} />}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
