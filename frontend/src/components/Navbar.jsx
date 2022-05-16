
import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';

const useStyle = makeStyles((theme) =>({
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        }
    },
    tittle:{
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        }  
    }
}));

const Navbar = (props) => {
    const classes =useStyle()
      return(
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton} onClick={()=> props.openDrawer()}>
                        <MenuIcon />
                    </IconButton>
                    <Hidden mdDown>
                        <Typography variant='h2' className={classes.tittle}> 
                            Gisbert Bañó Electricidad
                        </Typography>
                    </Hidden>
                    <Hidden lgUp>
                        <Typography variant='h5' className={classes.tittle}> 
                            Gisbert Bañó Electricidad
                        </Typography>
                    </Hidden>

                    <Button variant='text' color='inherit'>
                        <NavLink to="/login">SALIR</NavLink>
                    </Button>
             </Toolbar>
           </AppBar>
        </div>
    )
}

export default Navbar
