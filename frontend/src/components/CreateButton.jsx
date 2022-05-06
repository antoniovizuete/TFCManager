import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const CreateButton = ({createHandler}) => {
  return (
    
    <div className='float-md-end'>
 
      <Button variant="text" startIcon={<CreateNewFolderIcon color="primary"/>} onClick={createHandler}>Crear Registro</Button>

    </div>
  )
}

export default CreateButton;
