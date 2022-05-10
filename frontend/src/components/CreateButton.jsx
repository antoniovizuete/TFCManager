import React from 'react';
import { Button } from '@material-ui/core';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const CreateButton = ({createHandler}) => {

  return (
    
    <div className='float-md-end'>
 
      <Button variant="text" startIcon={<CreateNewFolderIcon color="primary"/>} onClick={createHandler}>Nuevo </Button>

    </div>
  )
}

export default CreateButton;
