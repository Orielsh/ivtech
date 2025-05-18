import {
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Login.module.css';
import { login } from "../../services/authServie"
import { useContext, useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { ToastContext } from '../../contexts/ToastContext/ToastContext';
import { storeTokenLS } from "../../services/LSService";
import { Navigate } from 'react-router';

export default function Login() {

  const toasts = useContext(ToastContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await login({ "email": email, "password": password })
      if (response.success) {
        toasts.addToast({
          success: true,
          headerText: "Login success",
        })
        auth.setToken(response.token);
        storeTokenLS(response.token);
      }
    } catch (error) {
      toasts?.addToast({ headerText: "Failed", message: error.message, success: false });
    }
  }

  return (
    auth.loginDetails ? <Navigate to={"/"} /> :
      <Container my={40} w={420}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Paper withBorder shadow="sm" p={22} mt={30} radius="md" component="form" onSubmit={handleSubmit}>
          <TextInput label="Email" placeholder="you@ivtec" required radius="md" type='email' onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" onChange={(e) => setPassword(e.target.value)} />
          <Group justify="space-between" mt="lg">
          </Group>
          <Button fullWidth mt="xl" radius="md" type='submit'>
            Sign in
          </Button>
        </Paper>
      </Container>
  );
}