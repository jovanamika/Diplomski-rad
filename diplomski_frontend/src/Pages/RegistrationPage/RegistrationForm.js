import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function RegistrationForm() {

    const defaultTheme = createTheme();
    const [selectedRole, setSelectedRole] = React.useState('user'); 
    const [firstname, setFirstname] = React.useState();
    const [lastname, setLastname] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setFirstname(data.get('firstname'));
        setLastname(data.get('lastname'));
        setEmail(data.get('email'));
        setPassword(data.get('password'))
        console.log(
            firstname, lastname,email, password, selectedRole
        );
    };

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
                        Registracija
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="Ime"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Prezime"
                                    name="lastname"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Lozinka"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
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
                                        sx={{ml:'5vh'}}
                                    />
                                    <FormControlLabel
                                        value="teacher"
                                        control={<Radio/>}
                                        label="Predavač"
                                        sx={{ml:'5vh'}}
                                    />
                                </RadioGroup>
                            </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, background: "var(--footer-bg-color)" }}
                    >
                        Registruj se
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="http://localhost:3000/login" variant="body2" sx={{ color: 'var(--footer-bg-color)' }}>
                                Već si registrovan? Prijavi se
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </ThemeProvider >
    );
}