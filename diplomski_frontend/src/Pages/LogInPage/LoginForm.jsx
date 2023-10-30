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
    const { setAuth } = useAuth();
    const [selectedRole, setSelectedRole] = React.useState('user');
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [error, setError] = React.useState("");
    const defaultTheme = createTheme();
    const navigate = useNavigate();

    const onRegisterSubmit = () => {
        navigate("/registration");
    }

    const handleLogIn = () => {
        console.log("Podaci:");
        console.log(email, password, selectedRole);
        fetch(`http://localhost:8080/users/${email}/${password}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
              // Dodajte dodatne zaglavlja ovdje prema potrebi
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            // Ovdje rukujete podacima koji su vraćeni
            setAuth({data});
            console.log("Data:",data); // Ispisuje podatke korisnika ako je zahtjev uspješan
          })
          .catch(error => {
            // Ovdje rukujete greškama koje se mogu pojaviti tokom zahtjeva
            console.error('There has been a problem with your fetch operation:', error);
          });
    }

    const getLoggedUser = async () => {
        let url = `http://localhost:8080/users/${email}/${password}`;
        console.log("URL:", url);

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(url, requestOptions)
            .then(res => {
                console.log("Res", res);
                return res.json();
            })

    }

    const setData = async (res) => {
        console.log("RESULT:", res);
        if (res) {
            setError("")
            setAuth({ res })
            navigate("/")
        } else {
            setError("Netacna lozinka!")
        }
        console.log(error);
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
                        <Grid item xs={12} spacing={10}>
                            <RadioGroup
                                row
                                name="role"
                                value={selectedRole}
                                onChange={(event) => setSelectedRole(event.target.value)}
                            >
                                <FormControlLabel
                                    value="user"
                                    control={<Radio />}
                                    label="Korisnik"
                                    sx={{ ml: '5vh' }}
                                />
                                <FormControlLabel
                                    value="teacher"
                                    control={<Radio />}
                                    label="Predavač"
                                    sx={{ ml: '5vh' }}
                                />
                            </RadioGroup>
                        </Grid>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '16px', // Adjust the margin as needed
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
                                type="button" // Change the type to "button" if it's not a form submission
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
