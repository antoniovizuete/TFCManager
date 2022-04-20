
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import DescriptionIcon from '@material-ui/icons/Description';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const Lists = () => {
  return(
    <div>
        <List component='nav'>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText primary='Clientes'/>
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <AccessibilityNewIcon />
                </ListItemIcon>
                <ListItemText primary='Empleados'/>
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary='Proyectos'/>
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <AllInboxIcon />
                </ListItemIcon>
                <ListItemText primary='Materiales'/>
            </ListItem>

            <Divider />
        </List>
    </div>
  )
}

export default Lists;
