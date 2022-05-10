
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProjectsTable from './ProjectsTable';
import CreateButton from './CreateButton';
import ProjectsFormModal from './ProjectsFormModal';

const ProjectsBox = () => {

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
            <CreateButton createHandler={openModalHandler}/>
            <ProjectsTable />
            <ProjectsFormModal open={openModal} handleClose={closeModalHandler}/>
          </Grid>
      </Grid>
    </div>
  )
};

export default ProjectsBox;
