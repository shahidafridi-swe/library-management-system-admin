import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import puLogo from '../../image/pu-logo.png';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    // login token
    const token = localStorage.getItem("token");

    // redirect login use
    React.useEffect(() => {
        if(token) {
            navigate("/");
        }
    }, [token]);

    // error state
    const [error, setError] = React.useState(undefined);

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // signInWithEmailAndPassword(email, password)
        // request object
        const reqObj = {
            username: email,
            pass: password
        }
        try {
            const res = await fetch(`http://localhost:5000/admin/login`, {
                method: "POST",
                body: JSON.stringify(reqObj),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await res.json();
            if (res.status === 200) {
                console.log(result);
                // set token
                localStorage.setItem('token', result.success.token);
                localStorage.setItem('user', result.success.user);
                setError("");
                navigate("/");

            } else {
                console.log(result);
                // show password/user invalid error
                setError(result.errors.msg);
            }
        } catch (err) {
            // show network error
            console.log(err);
            setError(err);

        }
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
                                <Form.Control name='email' type="email" placeholder="Enter email" required/>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                            </Form.Group>

                            {
                                error &&
                                <p className='text-danger '>{error}</p>
                            }

                            <Form.Control className='btn btn-primary' type="submit" value="LOGIN" />

                        </Form>
                    </div>
                </Col>

            </Row>

        </Container>
    );
};

export default Login;