import React from "react";
import { Button, CssBaseline, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import axios from "axios";
  
const useStyles = makeStyles(theme => ({
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage: "url(/images/init.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%", 
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }

}));

const Login = () => {
  const [post, setPost] = React.useState(null);

  const miPostListURL = "https://jsonplaceholder.typicode.com/posts"
  const formik = useFormik({

    initialValues: {
        email:'',
        password:'',
    },
    onSubmit: values =>{

        axios.post(miPostListURL, JSON.stringify(values,null,2)).then((response) => {setPost(response.data)});
        alert(JSON.stringify(post,null,2));
    },
});
  const classes = useStyles();
  return (
    <Grid container  className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src="/images/komorebi.png" alt="komorebi" width="250" height="120"/>
          <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/agent"
              
            >
              <Typography color="white">
                Log in
              </Typography>
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    
  );
};
  
export default Login;
  