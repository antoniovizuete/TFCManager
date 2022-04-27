
import React from 'react';
import {makeStyles, Hidden} from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Drawercomp from './Drawercomp';
import CustomersBox from './CustomersBox';
import UsersBox from './UsersBox';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}));

const Containercomp = () => {

    const classes = styles();
    const [deployDrawer, setDeployDrawer] = React.useState(false);
    const openDrawer = () => {
        setDeployDrawer(!deployDrawer);
    };

    return(
        <div className={classes.root}>
            <Navbar openDrawer={openDrawer}/>
            <Hidden xsDown>
                <Drawercomp variant='permanent' open={true}/>
            </Hidden>
            <Hidden smUp>
                <Drawercomp variant='temporary' open={deployDrawer} onClose={openDrawer}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Routes>
                    <Route path="/customers" element={<CustomersBox />}/>
                    <Route path="/users" element={<UsersBox />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Containercomp;
