import { useState } from "react";

export default function WorkordersMaterialsSelect() {

    const List = () => {
    const [material, setMaterial] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [list, setList] = useState([]);

    const onAddMaterial = () => {
        setList((prevList) => [...prevList, { material, cantidad }]);
        setMaterial("");
        setCantidad("");
    };

    const onRemoveMaterial = (index) => {
        setList((prevList) => prevList.filter((_, arrIndex) => index !== arrIndex));
    };

    const onMaterialChange = (ev) => {
        setMaterial(ev.target.value);
    };

    const onCantidadChange = (ev) => {
        setCantidad(ev.target.value);
    };

    return (
        <div>
            <ul>
                {list.map((el, index) => (
                <li>
                    <button onClick={() => onRemoveMaterial(index)}>X</button>
                    {el.material} {el.cantidad}
                </li>
                ))}
            </ul>
            <input
                placeholder={"material"}
                onChange={onMaterialChange}
                value={material}
            />
            <input
                placeholder={"cantidad"}
                onChange={onCantidadChange}
                type="number"
                value={cantidad}
            />
            <button onClick={onAddMaterial}>Añadir</button>
        </div>
        );
    };
}