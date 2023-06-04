import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { authentication } from "../../store/actions/login-aunthetication";

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "customer@bcr.io",
    password: "123456",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authentication(state));
  };

  return (
    <div className="d-flex justify-content-center" style={{ padding: "10rem" }}>
      <Form onSubmit={handleSubmit}>
        <Row className="p-5 login-content">
          <Col md={12} className="pb-4">
            <Input onChange={handleChange} type="text" name="email" value={state.email} />
          </Col>
          <Col md={12} className="pb-4">
            <Input onChange={handleChange} type="password" name="password" value={state.password} />
          </Col>
          <Col md={12}>
            <Button className="w-100" outline color="primary">
              Sign In
            </Button>
            <p className="d-flex justify-content-center w-100" style={{ padding: "5px" }}>
              Don't have an account? Sign Up for free
            </p>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
