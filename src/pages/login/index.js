import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Col, Input, Label, Row } from 'reactstrap';
import Form from '../../components/Form';
import { Services } from '../../config/services';
import { token } from '../../config/token';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (_) => {
    const { name, value } = _.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (_) => {
    _.preventDefault();
    Services()
      .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', {
        ...state,
      })
      .then((response) => {
        const { data } = response;
        localStorage.setItem('ACCESS_TOKEN', data.access_token);
        window.location.replace('/');
      })
      .catch((err) => err.message);
  };
  if (token) return <Navigate to="/home" />;
  return (
    <div
      className="d-flex justify-content-center align-items-center px-4"
      style={{ height: '100vh' }}
    >
      <Form onSubmit={handleSubmit}>
        <div className="py-4">
          <div className="logo-login-cms"></div>
        </div>
        <div>
          <h2 className="font-title-cms">Welcome Back</h2>
        </div>
        <Row>
          <Col md={12} className="pb-2">
            <Label>Email</Label>
            <Input
              onChange={handleChange}
              name="email"
              label={'Email'}
              required
              placeholder="Masukan Email"
              className="form-control"
            />
          </Col>
          <Col md={12} className="pb-2">
            <Label>Password</Label>
            <Input
              onChange={handleChange}
              name="password"
              label={'Password'}
              required
              type="password"
              placeholder="Masukan Password"
              className="form-control"
            />
          </Col>
          <Col md={12} className="pt-2 d-flex flex-column gap-4 text-center">
            <Button type="submit" className="w-100" style={{ backgroundColor: '#0D28A6' }}>
              Sign In
            </Button>
            <span className="sign-up-font">
              Don't have an account? <Link to="/registrasi">Sign Up for free</Link>
            </span>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
