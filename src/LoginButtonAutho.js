import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LoginButtonAutho = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="w-100" variant="outline-primary" onClick={() => loginWithRedirect()}>Log In to start your Digital Bookshelf</Button>;
};

export default LoginButtonAutho;
