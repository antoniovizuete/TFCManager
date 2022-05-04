

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getUsers } from '../services/user.services';
import { useEffect, useState } from 'react'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Nombre', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'role', headerName: 'Rol', width: 150 },
  { field: 'state', headerName: 'Estado', width: 130 },
];

export default function UserTable() {

    const [users, setUsers] = useState([]);
    useEffect( () =>{
        const getAllUsers = async() => {
          setUsers(await getUsers());
        }
        getAllUsers();
      }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
