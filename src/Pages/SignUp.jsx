/** @format */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    firstName: {
      value: '',
      error: false,
      regex: /^[a-zA-Z ]*$/,
      helperText: 'Must only contain alphabets',
    },
    lastName: {
      value: '',
      error: false,
      regex: /^[a-zA-Z ]*$/,
      helperText: 'Must only contain alphabets',
    },
    email: {
      value: '',
      error: false,
      regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      helperText: 'Must be a valid email',
    },
    password: {
      value: '',
      error: false,
      regex: /^([a-zA-Z0-9@*#]{8,120})$/,
      helperText: 'Password must be atleast 8 characters',
    },
    isFormValid: false,
  });

  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const showSnackbar = () => {
    setState({
      ...state,
      open: true,
    });

    setTimeout(() => {
      handleClose();
    }, 5000);
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    showSnackbar();

    setFormData({
      ...formData,
      firstName: {
        ...formData.firstName,
        value: '',
      },
      lastName: {
        ...formData.lastName,
        value: '',
      },
      email: {
        ...formData.email,
        value: '',
      },
      password: {
        ...formData.password,
        value: '',
      },
    });
  };

  const validateForm = event => {
    const formName = event.target.name;
    const formValue = event.target.value;
    const formRegex = formData[formName].regex;
    const isDataValid = formRegex.test(formValue);

    setFormData({
      ...formData,
      [formName]: {
        ...formData[formName],
        value: formValue,
        error: !isDataValid,
      },
      isFormValid: shouldDisableSignUpButton(),
    });
  };

  const shouldDisableSignUpButton = () => {
    let isValid = false;

    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const email = formData.email;
    const password = formData.password;

    if (firstName.value === '' || firstName.error) isValid = false;
    else if (lastName.value === '' || lastName.error) isValid = false;
    else if (email.value === '' || email.error) isValid = false;
    else if (password.value === '' || password.error) isValid = false;
    else isValid = true;

    return isValid;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName.value}
                  error={formData.firstName.error}
                  onChange={validateForm}
                  helperText={
                    formData.firstName.error
                      ? formData.firstName.helperText
                      : undefined
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName.value}
                  onChange={validateForm}
                  error={formData.lastName.error}
                  helperText={
                    formData.lastName.error
                      ? formData.lastName.helperText
                      : undefined
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email.value}
                  onChange={validateForm}
                  error={formData.email.error}
                  helperText={
                    formData.email.error ? formData.email.helperText : undefined
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password.value}
                  onChange={validateForm}
                  error={formData.password.error}
                  helperText={
                    formData.password.error
                      ? formData.password.helperText
                      : undefined
                  }
                />
              </Grid>
            </Grid>
            <Button
              disabled={!formData.isFormValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          User Succesfully Registered
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
