import React from 'react';
import {
    Button,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
    Container,
    TextField,
    Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AddTeacher() {
    const [selectedRole, setSelectedRole] = React.useState('user');
    const [firstname, setFirstname] = React.useState(null);
    const [lastname, setLastname] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const defaultTheme = createTheme();

    const handleDelete = () => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setSelectedRole('user');
    }

    const handleSubmit = () => {
        console.log(firstname, lastname, email, password, selectedRole);
        addUser();
        handleDelete();
    }


    const addUser = async () => {
        let url;
        if (selectedRole === 'user') {
            url = "http://localhost:8080/users/1";
        } else
            url = "http://localhost:8080/users/2";

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
            window.alert('Post request sent successfully!');
            return response;;
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" alignIContent='center' justifyContent='center' >

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60%',
                        ml:'190px'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Forma za unos korisnika
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="Ime"
                            name="firstname"
                            value={firstname}
                            autoFocus
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="Prezime"
                            name="lastname"
                            value={lastname}
                            autoFocus
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            value={email}
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Lozinka"
                            type="password"
                            id="password"
                            value={password}
                            autoFocus
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
                                    sx={{ ml: '15vh', mr: '6vh' }}
                                />
                                <FormControlLabel
                                    value="teacher"
                                    control={<Radio />}
                                    label="Predavač"
                                    sx={{ ml: '5vh' }}
                                />
                                <FormControlLabel
                                    value="admin"
                                    control={<Radio />}
                                    label="Administrator"
                                    sx={{ ml: '5vh' }}
                                />
                            </RadioGroup>
                        </Grid>
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
                                onClick={handleDelete}
                            >
                                Odustani
                            </Button>
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ width: '48%', bgcolor: 'var(--footer-bg-color)', borderRadius: '25px' }}
                                onClick={handleSubmit}
                            >
                                Sačuvaj
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}