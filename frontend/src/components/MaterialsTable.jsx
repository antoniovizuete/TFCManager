

import * as React from 'react';
import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import { getMaterials} from '../services/material.services';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'reference', headerName: 'Referencia', width: 150, editable: true, 
    preProcessEditCellProps: (params) => {
      const idProps = params.otherFieldsProps.id;
      const hasError = idProps.value && !params.props.value;
      return { ...params.props, error: hasError };
    },
  },
  { field: 'brand', headerName: 'Marca', width: 150, editable: true },
  { field: 'description', headerName: 'Descripción', width: 500, editable: true },
  { field: 'pvp', headerName: 'Precio', type: 'number', width: 80,  editable: true },
  { field: 'ecotax', headerName: 'Ecotasa',  type: 'singleSelect', valueOptions: ['Si', 'No'],width: 100, editable: true }
];

export default function MaterialsTable() {

      const [materials, setMaterials] = useState([]);
      useEffect( () =>{
        const getAllMaterials = async() => {
          setMaterials(await getMaterials());
        }
        getAllMaterials();
      }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        editMode="row"
        rows={materials}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        
      />
    </div>
  );
}
