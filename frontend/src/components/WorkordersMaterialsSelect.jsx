import { useState, useEffect } from "react";
import { Button, Select, MenuItem, InputLabel, Input } from "@material-ui/core"; 
import { getMaterials } from '../services/material.services';
import DeleteForeverIcon from '@material-ui/icons//DeleteForever'

const WorkordersMaterialsSelect = () => {
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);

  const onAddMaterial = () => {
    setList((prevList) => [...prevList, { material, amount }]);
    setMaterial("");
    setAmount("");
  };

  const [materials, setMaterials] = useState([]);
    useEffect( ()=>{
        const getAllMaterials = async() => {
            setMaterials(await getMaterials());
        }
        getAllMaterials();
  }, []);

  const handleChangeMaterial = (event) => {
      setMaterial(event.target.value);
  }

  const onRemoveMaterial = (index) => {
    setList((prevList) => prevList.filter((_, arrIndex) => index !== arrIndex));
  };

  return (
    <div>
     
      <div>
        <InputLabel className="mt-2" id="material_idInput" style={{width: '30%'}}>Materiales</InputLabel>
        <Select labelId="Materiales" id="material_id" style={{width: '30%'}}
            value={material} label="Materiales" onChange={handleChangeMaterial}> 
        
            {materials.map((material) => (
                <MenuItem value={`${material.material_id}`}>{material.material_reference} - {material.material_description} </MenuItem>
            ))}
            
        </Select>
        <Input
            autoFocus margin="dense" type="number" id="material_amount" style={{width: '30%'}} variant="standard"
            value={amount} className="ms-3"  label="Cantidad"
            onChange={ event => setAmount(event.target.value) }
        />
        <Button className="ms-3" onClick={onAddMaterial}>Añadir</Button>
      </div>

      <ul>
        {list.map((el, index) => (
          <li>
            {el.material} {el.amount}
            <Button onClick={() => onRemoveMaterial(index)} startIcon={<DeleteForeverIcon color="error"/>}></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkordersMaterialsSelect;

