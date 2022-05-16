import React, { useState } from 'react';
import { Container, Row, Card, Button, Form, Dropdown } from 'react-bootstrap';
//import { GetHomepageApiResponse, useGetHomepageQuery } from '@libs/cms-request';
import { UsersPermissionsRegisterResponse, usePostAuthLocalMutation, PostAuthLocalApiArg } from '~lib/hydrogen-auth-api';
import { HydrogenQueryError } from '~lib/api-utils';
import { Loading } from '~components/Loading';

const _identifier = 'test001@local.host';
const _password = 'test000';


export function LoginForm({
  login,
  message,
}: {
  login: (arg: PostAuthLocalApiArg) => Promise<any>;
  message?: string;
}) {
  const [identifier, setIdentifier] = useState(_identifier);
  const [password, setPassword] = useState(_password);
  const [statusMessage, setStatusMessage] = useState(message);

  function onSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!identifier || !password) {
      setStatusMessage(`${!identifier ? 'email' : 'password'} is empty.`);
      return;
    }
    login({ body: {
      identifier,
      password,
    }});
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" onChange={e=>setIdentifier(e.target.value)} />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <Dropdown.Divider />
      <Form.Text muted>
        {statusMessage}
       </Form.Text>
      <Dropdown.Divider />
      <Dropdown.Item href="#">New around here? Sign up</Dropdown.Item>
      <Dropdown.Item href="#">Forgot password?</Dropdown.Item>
    </Container>
  );
}

export function LoggedIn({
  jwtUser: { jwt, user },
}: {
  jwtUser: UsersPermissionsRegisterResponse;
}) {
  function onClickLogout() {

  }
  return (
    <Container>
      <Card className="sml-card">
        <Card.Body>
          <Card.Title>{user?.username}</Card.Title>
          <Card.Text>
            {user?.email}
          </Card.Text>
          <Button variant="primary" onClick={onClickLogout}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export function Login() {
  const [login, loginStatus] = usePostAuthLocalMutation();

  if (loginStatus.isLoading) {
    return <Loading />;
  }

  const { data, isSuccess, status } = loginStatus;
  if (isSuccess && status === 'fulfilled') {
    const { jwt, user } = data as UsersPermissionsRegisterResponse;
    return <LoggedIn jwtUser={{ jwt, user }} />;
  } else {
    const statusMessage = !loginStatus?.error ? undefined : `${(loginStatus?.error as HydrogenQueryError).data.error.name}: ${(loginStatus?.error as HydrogenQueryError).data.error.message}`;
    return <LoginForm login={login} message={statusMessage} />;
  }
}
