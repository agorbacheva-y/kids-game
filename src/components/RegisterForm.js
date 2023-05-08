import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterForm = ({ myName, setMyName, email, setEmail, username, setUsername, password, setPassword, handleSubmit }) => {
  return (
    <Card>
      <Form>
        <h1>Register User</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={myName}
              onChange={(e) => setMyName(e.target.value)}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Label>
        </Form.Group>

        <Button
          type="submit"
          onClick={handleSubmit}
          >Submit
        </Button>
      </Form>
    </Card>
  );
};
export default RegisterForm;