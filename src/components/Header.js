import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Box, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Search, Account } from '@trejgun/material-ui-icons-google'
import { Link as Scroll } from 'react-scroll';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#191970',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
  },
  goDown: {
    color: '#191970',
    fontSize: '4rem',
  },
  button: {
    margin: theme.spacing(1),
    background: '#fff'
  },
  icon1: {
    marginRight: theme.spacing(1)
  },
}));
export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          Doctor<span className={classes.colorText}>geniX</span>
          </h1>

        </Toolbar>
        
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            "The presence of <br />
            the <span className={classes.colorText}>Doctor</span> is the  <br/>
            beginning of the cure"
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
          <Box>
          <Button 
          variant="outlined"
          className={classes.button} 
          onClick={()=> history.push('/view')}>
          <Search className={classes.icon1} /> Signin with Google
          </Button>
          <Button 
          variant="outlined"
          className={classes.button} 
          onClick={()=>history.push('/login')}>
          <Account className={classes.icon1} /> Administrator Login
          </Button>
          </Box>
        </div>
      </Collapse>
    </div>
  );
}
