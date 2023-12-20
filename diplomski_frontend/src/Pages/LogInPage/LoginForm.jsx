import React from 'react'
import './LoginStyle.css'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Radio, FormControlLabel, Grid, RadioGroup } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

export default function LoginForm() {
   // const [selectedRole, setSelectedRole] = React.useState('user');
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const onRegisterSubmit = () => {
        navigate("/registration");
    }

    const handleLogIn = () => {
        fetch(`http://localhost:8080/users/${email}/${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAuth({ data });
                navigate("/profil");
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Prijava
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '16px',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{ width: '48%', bgcolor: 'var(--footer-bg-color)', borderRadius: '25px' }}
                                preventDefault
                                onClick={handleLogIn}
                            >
                                Prijavi se
                            </Button>
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ width: '48%', bgcolor: 'var(--footer-bg-color)', borderRadius: '25px' }}
                                onClick={onRegisterSubmit}
                            >
                                Registruj se
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
