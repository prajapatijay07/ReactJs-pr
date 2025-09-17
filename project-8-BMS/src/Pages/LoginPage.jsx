import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = 'admin';
    const validPass = '123456';

    if (username === validUser && password === validPass) {
      localStorage.setItem('user', JSON.stringify({ username }));
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '80vh' }}>
      <Card style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">User Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="primary">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;