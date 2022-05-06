import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const TableDeleteButton = ({createHandler}) => {
  return (
    
    <Button variant="text" startIcon={<DeleteIcon color="error"/>} onClick={createHandler}></Button>

  )
}

export default TableDeleteButton;
