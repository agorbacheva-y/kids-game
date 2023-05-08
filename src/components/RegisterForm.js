import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterForm = ({ newUser, handleChange, handleSubmit }) => {
  return (
    <Card>
      <Form>
        <h1>Register User</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="myName"
              defaultValue={newUser.myName}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              defaultValue={newUser.email}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              defaultValue={newUser.username}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              defaultValue={newUser.password}
              onChange={handleChange}
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