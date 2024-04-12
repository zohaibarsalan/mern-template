import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Section,
  Text,
  TextField,
} from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import ParralaxBackground from '../Components/ParralaxBackground.jsx';
import { EmailCheck } from '../Utils/EmailCheck.jsx';
import { PasswordCheck } from '../Utils/PasswordCheck.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!EmailCheck(email)) {
      return false; // Return false if email is invalid
    }

    if (!PasswordCheck(password)) {
      return false; // Return false if password is invalid
    }

    console.log('Logged in');
  };

  return (
    <>
      {/*<ParralaxBackground />*/}

      <Section
        style={{
          display: 'flex',
          direction: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ParralaxBackground />

        <Box width="450px" height="700px">
          <Card size="3" style={{ background: 'var(--mint-1)' }}>
            <Flex gap="4" direction="column" align="left">
              <Heading size="7">Login</Heading>

              <Text>Email</Text>
              <TextField.Root
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField.Root>

              <Flex direction="row" style={{ justifyContent: 'space-between' }}>
                <Text>Password</Text>
                <Text color="plum">Forgot Password?</Text>
              </Flex>
              <TextField.Root
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField.Root>

              <Flex gap="4" direction="row" style={{ justifyContent: 'left' }}>
                <Button onClick={login}>Login</Button>
                <Button variant="soft">
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    Create Account
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Box>
      </Section>
    </>
  );
};
export default Login;
