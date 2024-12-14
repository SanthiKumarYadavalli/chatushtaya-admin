import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  InputAdornment,
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
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
            mb: 1
          }}
        >
          Welcome Back
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#666',
            mb: 3
          }}
        >
          Please sign in to continue
        </Typography>
      </Box>

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

      {/* <FormControl 
        component="fieldset" 
        sx={{ 
          '& .MuiFormLabel-root': {
            color: '#666',
            fontSize: '0.9rem',
          },
        }}
      >
        <FormLabel component="legend">Select Role</FormLabel>
        <RadioGroup
          row
          name="role"
          value={formData.role}
          onChange={handleChange}
          sx={{
            justifyContent: 'center',
            '& .MuiRadio-root': {
              color: '#666',
            },
          }}
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
      </FormControl> */}

      <StyledButton
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Sign In
      </StyledButton>
    </Box>
  );
};

export default LoginForm;