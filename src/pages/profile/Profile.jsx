import React, { useEffect, useState } from "react";
//
import "../profile/Profile.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserServices from "../../services/UserServices";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../redux/features/userSlide";
import toast from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // console.log("user", user);
  const mutation = useMutation({
    mutationFn: (data) => {
      const { id, access_token, ...rests } = data;
      UserServices.updateUser(id, rests, access_token);
      dispatch(updateUser({ ...data, access_token: user.access_token }));
    },
  });
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
    setAddress(user?.address || "");
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Update successfully");
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      toast.error("Update failed");
    }
  }, [isSuccess, isError]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserServices.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handlechangeName = (e) => {
    setName(e.target.value);
  };
  const handlechangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlechangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlechangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      access_token: user?.access_token,
    });
  };
  return (
    <>
      <div className="banner-profile">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="banner-content">
                <h2 className="banner-title">
                  Profile <span>Us</span>
                </h2>
                <nav className="breadcrumb-box">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">HOMEONE</Link>
                    </li>
                    <li className="breadcrumb-item-activity">Profile</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="profile-form">
        <div className="contact-form-wrapp">
          <div className="contact-title">
            <h2 className="title">Profile</h2>
          </div>
          <div className="contact-form">
            <form action="#">
              <div className="form-detail">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={handlechangeName}
                />
                <button className="btn" onClick={handleUpdate}>
                  Change
                </button>
              </div>
              <div className="form-detail">
                <input
                  type="text"
                  placeholder="Your Email *"
                  value={email}
                  onChange={handlechangeEmail}
                />
                <button className="btn" onClick={handleUpdate}>
                  Change
                </button>
              </div>
              <div className="form-detail">
                <input
                  type="number"
                  placeholder="Phone *"
                  value={phone}
                  onChange={handlechangePhone}
                />
                <button className="btn" onClick={handleUpdate}>
                  Change
                </button>
              </div>
              <div className="form-detail">
                <input
                  type="text"
                  placeholder="Address *"
                  value={address}
                  onChange={handlechangeAddress}
                />
                <button className="btn" onClick={handleUpdate}>
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
