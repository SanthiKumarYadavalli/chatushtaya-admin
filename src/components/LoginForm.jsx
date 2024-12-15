import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../backend/utils'; // Ensure this function is implemented correctly

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#f8f9fa',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 0',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'admin',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isAuthenticated = await loginUser(formData); // Validate email and password
      if (isAuthenticated) {
        // Store user data in session storage
        sessionStorage.setItem('user', JSON.stringify({ email: formData.email, role: formData.role }));
        navigate('/admin'); // Redirect to Admin page
      } else {
        setErrorMessage('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flex: 1,
        p: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        maxWidth: '500px',
      }}
    >
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: '#000',
            fontSize: '3rem',
            mb: 1,
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            mb: 3,
          }}
        >
          Please sign in to continue
        </Typography>
      </Box>

      {errorMessage && (
        <Typography
          color="error"
          sx={{
            textAlign: 'center',
            mb: 2,
          }}
        >
          {errorMessage}
        </Typography>
      )}

      <StyledTextField
        required
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email sx={{ color: '#666' }} />
            </InputAdornment>
          ),
        }}
      />

      <StyledTextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock sx={{ color: '#666' }} />
            </InputAdornment>
          ),
        }}
      />

      <StyledButton type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Sign In
      </StyledButton>
    </Box>
  );
};

export default LoginForm;
