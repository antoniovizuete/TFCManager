import React from 'react';
import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';


const TableEditButton = ({createHandler}) => {
  return (
    
    <Button variant="text" startIcon={<CreateIcon color="secondary"/>} onClick={createHandler}></Button>

  )
}

export default TableEditButton;
