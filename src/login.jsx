import {
  Box,
  Container,
  Paper,
} from '@mui/material';
import LoginForm from './components/LoginForm';

const LoginPage = () => {

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
            <LoginForm />
          
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;