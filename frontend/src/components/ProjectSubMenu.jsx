
import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import ListIcon from  '@material-ui/icons/List';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import {NavLink} from 'react-router-dom';

const ProjectSubMenu = () => {

  const [openModal, setOpenModal] = useState(false);  

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  return(
    <div>
      <Grid container className='mt-5'>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Button
            fullWidth variant="outlined" size="large" startIcon={<ListIcon />}
            style={{ textTransform: "none", padding: "50px 50px" }}
            component={NavLink} to={"/menu/projects/projectlist"}>
              Gestión de Proyectos 
          </Button>

          <Button className='mt-5'
            fullWidth variant="outlined" size="large" startIcon={<HomeWorkIcon />}
            style={{ textTransform: "none", padding: "50px 50px" }}
            component={NavLink} to={"/menu/projects/workorderlist"}>
              Gestión de Partes de Trabajo 
          </Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default ProjectSubMenu;