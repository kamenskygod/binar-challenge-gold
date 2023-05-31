import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Col, Input, Label, Row } from 'reactstrap';
import Form from '../../components/Form';
import { Services } from '../../config/services';
import { token } from '../../config/token';

const Register = () => {
  const [state, setState] = useState({
    name: '',
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
  const navigate = useNavigate();
  const handleSubmit = (_) => {
    _.preventDefault();
    Services()
      .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', {
        ...state,
        role: 'Admin',
      })
      .then((response) => {
        navigate('/masuk');
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
          <h2 className="font-title-cms">Sign Up</h2>
        </div>
        <Row>
          <Col md={12} className="pb-2">
            <Label>
              Name<span className="text-danger">*</span>
            </Label>
            <Input
              onChange={handleChange}
              name="name"
              required
              placeholder="Masukan Nama"
              className="form-control"
            />
          </Col>
          <Col md={12} className="pb-2">
            <Label>
              Email<span className="text-danger">*</span>
            </Label>
            <Input
              onChange={handleChange}
              name="email"
              required
              placeholder="Masukan Email"
              className="form-control"
            />
          </Col>
          <Col md={12} className="pb-2">
            <Label>
              Create Password<span className="text-danger">*</span>
            </Label>
            <Input
              onChange={handleChange}
              name="password"
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
              Already have an account? <Link to="/masuk">Sign In here</Link>
            </span>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Register;
