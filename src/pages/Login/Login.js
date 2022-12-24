import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import puLogo from '../../image/pu-logo.png';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        console.log(user)
      }
      const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    };

    return (
        <Container>
            <Row>

                <Col className='p-5 d-flex align-items-center' md="6" sm="12">
                    <div>
                        <img src={puLogo} className='w-25' alt="puLogo" />
                        <h2>Welcome</h2>
                        <h3>To Admin Panel Of Library Management</h3>
                        <h1 className='text-primary'>Presidency University</h1>
                    </div>
                </Col>

                <Col className='login-form p-5 d-flex align-items-center' md="6" sm="12" >
                    <div className='w-100'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Control className='btn btn-primary' type="submit" value="LOGIN" />

                        </Form>
                    </div>
                </Col>

            </Row>

        </Container>
    );
};

export default Login;