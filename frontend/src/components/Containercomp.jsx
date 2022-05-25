
import React from 'react';
import {makeStyles, Hidden} from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './Navbar';
import Drawercomp from './Drawercomp';
import CustomersBox from './CustomersBox';
import UsersBox from './UsersBox';
import MaterialsBox from './MaterialsBox';
import ProjectSubMenu from './ProjectSubMenu';
import ProjectsBox from './ProjectsBox';
import WorkordersBox from './WorkordersBox';
import ProjectsDetailsView from './ProjectsDetailsView';
import CustomersDetailsView from './CustomersDetailsView';
import UsersDetailsView from './UsersDetailsView';
import CustomersDeleteModal from './CustomersDeleteModal';
import MaterialsDeleteModal from './MaterialsDeleteModal';
import UsersDeleteModal from './UsersDeleteModal';
import ProjectsDeleteModal from './ProjectsDeleteModal';
import WorkordersDeleteModal from './WorkordersDeleteModal';
import { getUserData } from '../services/login.services';
import CustomersEditForm from './CustomersEditForm';
import MaterialsEditForm from './MaterialsEditForm';
import UsersEditForm from './UsersEditForm';
import ProjectsEditForm from './ProjectsEditForm';
import WorkordersEditForm from './WorkordersEditForm';

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

    const jwtToken = getUserData();

    return jwtToken ?
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
                    <Route path="/customers/:id/details" element={<CustomersDetailsView /> }/>
                    <Route path="/customers/:id/edit" element={<CustomersEditForm /> }/>
                    <Route path="/customers/:id/delete" element={<CustomersDeleteModal /> }/>
                    <Route path="/users" element={<UsersBox />}/>
                    <Route path="/users/:id/details" element={<UsersDetailsView /> }/> 
                    <Route path="/users/:id/edit" element={<UsersEditForm /> }/>
                    <Route path="/users/:id/delete" element={<UsersDeleteModal /> }/>
                    <Route path="/materials" element={<MaterialsBox />}/>
                    <Route path="/materials/:id/edit" element={<MaterialsEditForm /> }/>
                    <Route path="/materials/:id/delete" element={<MaterialsDeleteModal /> }/>
                    <Route path="/projects" element={<ProjectSubMenu  />}/>
                    <Route path="/projects/projectlist" element={<ProjectsBox /> }/>
                    <Route path="/projects/project/:id/delete" element={<ProjectsDeleteModal /> }/>
                    <Route path="/projects/project/:id/edit" element={<ProjectsEditForm /> }/>
                    <Route path="/projects/workorderlist" element={<WorkordersBox /> }/>
                    <Route path="/projects/workorder/:id/delete" element={<WorkordersDeleteModal /> }/>
                    <Route path="/projects/workorder/:id/edit" element={<WorkordersEditForm /> }/>
                    <Route path="/projects/:id/details" element={<ProjectsDetailsView /> }/>
                    
                </Routes>
            </div>
        </div> : <Navigate to={{pathname: '/'}} replace={true}/>
    
}

export default Containercomp;
