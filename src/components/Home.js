import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontWeight: 700,
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
    color: '#111',
  },
  subtitle: {
    fontWeight: 400,
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    color: '#666',
  },
  button: {
    backgroundColor: '#FF8F00',
    color: '#fff',
    fontWeight: 700,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2, 4),
    '&:hover': {
      backgroundColor: '#FFA726',
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        My Web Info App
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        Discover the latest web technologies and trends
      </Typography>
      <Button variant="contained" className={classes.button}>
        Get started
      </Button>
    </Container>
  );
}

export default Home;
