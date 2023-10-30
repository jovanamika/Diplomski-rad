import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

export default function RegistrationForm() {

    const defaultTheme = createTheme();
    const [firstname, setFirstname] = React.useState();
    const [lastname, setLastname] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [error,setError] = React.useState("");
    const {setAuth} = useAuth();
    const navigate = useNavigate();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    const isAvailable = async () => {
        let url = "http://localhost:8080/users/isAvailable/" + email

        const response = await fetch(url)
        console.log("resposnse", response);
        if (!response.ok) {
            throw new Error('data could not be fetched')
        } else {
            console.log(response)
            return response
        }
    }

    const addUser = async (res) => {
        if(res){
            setError("")
            let url = "http://localhost:8080/users/1";
      
            let user = {firstname, lastname, email, password}
            
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user),
            };
      
            fetch(url, requestOptions).then(res => res.json()).then(res => setAuth({res})).finally(navigate("/"));
            console.log("Success");
          }else{
            setError("Korisnik sa tim e-mailom vec postoji!")
          }
          console.log(error);
    }

    const handleClick = () => {
        console.log("INF: ",
            firstname, lastname, email, password
        );

        if(isValidEmail(email)){
          setError("")
          isAvailable().then((res) => {
            addUser(res)
          }).catch((e) => console.log(e.message))
        }else{
          setError("E-mail nije validan!")
        }
        console.log(error);

    };

   /* const addUser = async () => {
        let url = "http://localhost:8080/user"
        let user = { firstname, lastname, email, password }
        console.log("JSON", JSON.stringify(user));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // 'Authorization': `Bearer ${auth.res.token}`
            body: JSON.stringify(user),
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('data could not be fetched')
        } else {
            window.alert('User added successfully!'); // Add the alert here
            return response;;
        }
    }*/

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
                    <Box component="form" sx={{ mt: 3 }}>
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
                                    onChange={(e) => setFirstname(e.target.value)}
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
                                    onChange={(e) => setLastname(e.target.value)}
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, background: "var(--footer-bg-color)" }}
                            preventDefault
                            onClick={handleClick}
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