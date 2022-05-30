
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import DescriptionIcon from '@material-ui/icons/Description';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import {NavLink} from 'react-router-dom';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const Lists = () => {
  return(
    <div>
        <List component='nav'>
            
                <ListItem button component={NavLink} to={"/menu/customers"}>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                
                    <ListItemText primary='Clientes'/>
                </ListItem>
            
                <ListItem button component={NavLink} to={"/menu/users"}>
                    <ListItemIcon>
                        <AccessibilityNewIcon />
                    </ListItemIcon>
                    <ListItemText primary='Empleados'/>
                </ListItem>

            <ListItem button component={NavLink} to={"/menu/projects"}>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary='Proyectos'/>
            </ListItem>

            <ListItem button component={NavLink} to={"/menu/materials"}>
                <ListItemIcon>
                    <AllInboxIcon />
                </ListItemIcon>
                <ListItemText primary='Materiales'/>
            </ListItem>

            <ListItem button component={NavLink} to={"/menu/inactives"}>
                <ListItemIcon>
                    <DeleteSweepIcon />
                </ListItemIcon>
            
                <ListItemText primary='Gestión de Inactivos'/>
            </ListItem>

            <Divider />
        </List>
    </div>
  )
}

export default Lists;
