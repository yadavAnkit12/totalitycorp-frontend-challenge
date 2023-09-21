import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { TextField } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().matches(/^[A-Za-z ]+$/, "Name should only contain alphabets").required("Name is required").min(2,"Length must be 2").max(25,"Too longer"),
  email: Yup.string().email('Invalid email address').matches(/^([A-Za-z0-9_\-\.])+\@(?!(?:[A-Za-z0-9_\-\.]+\.)?([A-Za-z]{2,4})\.\2)([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, 'Invalid email').required('Email is required'),
  password: Yup.string().required("Password is required").min(8,"Atleat 8 characters"),
  image: Yup.string().required("Image URL is required"),
});

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate()

  const handleFormSubmit = (values, { setSubmitting }) => {
    if (isLogin) {
      // Handle login
      const storedUser = JSON.parse(localStorage.getItem('profile'));
      if (storedUser && storedUser.password === values.password) {
        // alert("Login Successful");
        navigate('/')
      } else {
        alert("Login Failed");
      }
    } else {
      // Handle signup
      localStorage.setItem('profile', JSON.stringify(values));
      alert("Signup Successful");
      setIsLogin(true)
    }
    setSubmitting(false);
  };

  return (
    <Container className="mt-5">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Row>
            <Col sm='6'>
              <Row className="justify-content-center">
                <Col md={6}>
                  <div style={{ margin: '10%' }}>
                    <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        image: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleFormSubmit}
                    >
                      {(formik) => (
                        <Form onSubmit={formik.handleSubmit}>
                          {!isLogin && (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <TextField
                                id="outlined-basic"
                                className=""
                                style={{ marginTop: '10%' }}
                                name="name"
                                label="Name"
                                variant="outlined"
                                {...formik.getFieldProps("name")}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                              />

                            </div>
                          )}

                          <TextField
                            name="email"
                            className=""
                            style={{ marginTop: '10%' }}
                            type="email"
                            label='Email'
                            {...formik.getFieldProps("email")}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                          />


                          <TextField
                            name="password"
                            className=""
                            style={{ marginTop: '10%' }}
                            type="password"
                            label='Password'
                            {...formik.getFieldProps("password")}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                          />


                          {!isLogin && (
                            <TextField
                              type="text"
                              className=""
                              style={{ marginTop: '10%' }}
                              name="image"
                              label='Image URL'
                              {...formik.getFieldProps("image")}
                              onBlur={formik.handleBlur}
                              error={formik.touched.image && Boolean(formik.errors.image)}
                              helperText={formik.touched.image && formik.errors.image}
                            />
                          )}

                          <Button variant="primary" type="submit" style={{ marginTop: '10%' }}>
                            {isLogin ? "Login" : "Sign Up"}
                          </Button>
                        </Form>
                      )}
                    </Formik>

                    <p className="mt-3">
                      {isLogin ? "Don't have an account?" : "Already have an account?"}
                      <Button
                        variant="link"
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-2"
                      >
                        {isLogin ? "Sign Up" : "Login"}
                      </Button>
                    </p>

                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm='6'>
              <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" height='80%' width='100%'></img>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
