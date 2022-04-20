
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themeConfig';
import Login from './components/Login';
import { Button } from '@material-ui/core';
import {Icon, IconButton, Typography} from '@material-ui/core';
import Containercomp from './components/Containercomp';

const useStyle = makeStyles({
  botonPersonalizado:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: '0 30px',
  }
});

function App() {

  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>   
      <Router>
        <div className='container'>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/menu">
              <Containercomp>
                
              </Containercomp>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
