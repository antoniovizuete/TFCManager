import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const CrudButtons = ({createHandler}) => {
  return (
    <div>
 
        <Button variant="text" startIcon={<CreateNewFolderIcon color="primary"/>} onClick={createHandler}>Crear</Button>
        <Button variant="text" startIcon={<CreateIcon color="secondary"/>} className='ms-5'>Editar</Button>
        <Button variant="text" startIcon={<DeleteIcon color="error"/>} className='ms-5'>Borrar</Button>

    </div>
  )
}

export default CrudButtons;
