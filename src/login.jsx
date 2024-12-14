import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
} from '@mui/material';
import LoginForm from './components/LoginForm';
import { loginUser } from '../backend/utils';
import { Http } from '@mui/icons-material';
import { redirect } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');

  async function logUser({email, password}) {
    try {
      const res =  await loginUser({email, password});
      if (res) {
        console.log("User logged in successfully");
        return "True";
      }else{
        console.log("User not logged in");
        return "False";
      }
    } catch (error) {
      console.error("Error logging in user:", error.message);
      return "Error logging in user";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = logUser({email, password});
    if (res === "True") {
      console.log("User logged in successfully");
    } else {
      console.log("User not logged in");
    }
    console.log({ email, password, role });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg" sx={{ m: 0, p: 0 }}>
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            minHeight: '80vh',
            minWidth: '97vw',
            overflow: 'hidden',
          }}
        >
          {/* Left side - Image */}
          <Box
            sx={{
              flex: 1,
            //   background: 'url(../src/assets/login_img.svg) center/contain no-repeat',
              background: 'url(https://i.pinimg.com/736x/9b/43/8f/9b438f4b380f6fc52a96fb7169b20cd1.jpg) center/contain no-repeat',
            }}
          />
            <LoginForm onSubmit={handleSubmit} />
          {/* Right side - Login Form */}
          {/* <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Admin Login
            </Typography>

            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControl component="fieldset">
              <FormLabel component="legend">Role</FormLabel>
              <RadioGroup
                row
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="superadmin"
                  control={<Radio />}
                  label="Super Admin"
                />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              size="large"
              background="#6C63FF"
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box> */}
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;