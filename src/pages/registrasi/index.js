import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Input, Label, Row } from "reactstrap";
import Form from "../../components/Form";
import { Services } from "../../config/services";
import { token } from "../../config/token";

import banner from "../../assets/images/binary-mg.png";
import kotak from "../../assets/images/img-top.png";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (_) => {
    const { name, value } = _.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (_) => {
    _.preventDefault();
    Services()
      .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/register", {
        ...state,
        role: "Admin",
      })
      .then((response) => {
        navigate("/sign-in");
      })
      .catch((err) => err.message);
  };
  if (token) return <Navigate to="/home" />;
  return (
    <Row>
      <Col md={6}>
        <div className="d-flex justify-content-center align-items-center px-4" style={{ height: "100vh" }}>
          <Form onSubmit={handleSubmit}>
            <div className="py-4">
              <div className="logo-login-cms"></div>
            </div>
            <div className="width:100%">
              <img src={kotak} alt="kotak" width={100} height={34} />
            </div>
            <div>
              <h2 className="font-title-cms">Sign Up</h2>
            </div>
            <Row>
              <Col md={12} className="pb-2">
                <Label>Name*</Label>
                <Input onChange={handleChange} name="namadepan" label={"Nama Depan"} required placeholder="Nama lengkap" className="form-control" />
              </Col>
              <Col md={12} className="pb-2">
                <Label>Email*</Label>
                <Input
                  onChange={handleChange}
                  name="email"
                  label={"Email"}
                  required
                  placeholder="Contoh: johndee@gmail.com"
                  className="form-control"
                />
              </Col>
              <Col md={12} className="pb-2">
                <Label>Create Password*</Label>
                <Input
                  onChange={handleChange}
                  name="password"
                  label={"Password"}
                  required
                  type="password"
                  placeholder="6+ karakter"
                  className="form-control"
                />
              </Col>
              <Col md={12} className="pt-2 d-flex flex-column gap-4 text-center">
                <Button type="submit" className="w-100" style={{ backgroundColor: "#0D28A6" }}>
                  Sign Up
                </Button>
                <span className="sign-up-font">
                  Already have an account ? <Link to="/sign-in">Sign In</Link>
                </span>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
      <Col md={6}>
        <div className="width:100%">
          <img src={banner} alt="kotak" style={{ width: "100%" }} />
        </div>
      </Col>
    </Row>
  );
};

export default Register;
