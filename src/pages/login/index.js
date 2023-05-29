import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { TriggerFunction } from "../../store/actions/login-aunthetication";

const Login = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.AuthLogin);
  const [setState] = useState({
    username: "",
    password: "",
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
    dispatch(TriggerFunction(count));
  };
  console.log(count);

  return (
    <div className="d-flex justify-content-center" style={{ padding: "10rem" }}>
      <Form onSubmit={handleSubmit}>
        <Row className="p-5 login-content">
          <Col md={12} className="pb-4">
            <Input onChange={handleChange} type="text" name="username" />
          </Col>
          <Col md={12} className="pb-4">
            <Input onChange={handleChange} type="password" name="password" />
          </Col>
          <Col md={12}>
            <Button className="w-100" outline color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
