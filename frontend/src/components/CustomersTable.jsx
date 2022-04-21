
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getCustomers } from '../services/customer.services';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'dni', headerName: 'DNI', width: 100 },
  { field: 'name', headerName: 'Nombre', width: 230 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'phone', headerName: 'Teléfono', width: 100 },
  { field: 'address', headerName: 'Dirección', width: 220 },
  { field: 'city', headerName: 'Ciudad', width: 120 },
  { field: 'province', headerName: 'Provincia', width: 120 },
  { field: 'cp', headerName: 'CP', width: 100 },
  { field: 'state', headerName: 'Estado', width: 130 },
];

export default function CustomersTable() {

    const [customers, setCustomers] = useState([]);
    useEffect( () =>{
        const getAllCustomers = async() => {
          setCustomers(await getCustomers());
        }
        getAllCustomers();
      }, []);

  return (
    <div style={{ height: 650, width: '100%'}}>
      <DataGrid
        rows={customers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
