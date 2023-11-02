import React, { useContext, useState } from 'react';
import { WarehouseContext } from '../context/data';
import '../index';

const EditModel = ({code, warehouse, onClose }) => {
  const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });

  const {updateWarehouseByCode} = useContext(WarehouseContext);

  console.log(warehouse);
  console.log(editedWarehouse);

  const handleInputChange = (e, fieldName) => {
    setEditedWarehouse({ ...editedWarehouse, [fieldName]: e.target.value });
  };

  const handleSave = () => {
    updateWarehouseByCode(code , editedWarehouse);
    alert('Changes Done! ');
  };

  return (
    <div className="edit-warehouse-form">
      <label>
        Name:
        <input
          type="text"
          value={editedWarehouse.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
      </label>

      <label>
        Code:
        <input
          type="text"
          value={editedWarehouse.code}
          onChange={(e) => handleInputChange(e, 'code')}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={editedWarehouse.city}
          onChange={(e) => handleInputChange(e, 'city')}
        />
      </label>
      <label>
        Space Available:
        <input
          type="text"
          value={editedWarehouse.space_available}
          onChange={(e) => handleInputChange(e, 'space_available')}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          value={editedWarehouse.type}
          onChange={(e) => handleInputChange(e, 'type')}
        />
      </label>
      <label>
        Cluster:
        <input
          type="text"
          value={editedWarehouse.cluster}
          onChange={(e) => handleInputChange(e, 'cluster')}
        />
      </label>
      <label>
        Registered:
        <input
          type="text"
          value={editedWarehouse.is_registered}
          onChange={(e) => handleInputChange(e, 'is_registered')}
        />
      </label> 

      <label>
        Live:
        <input
          type="text"
          value={editedWarehouse.is_live}
          onChange={(e) => handleInputChange(e, 'is_live')}
        />
      </label><br/>
      
      

      

      <button className="button2" onClick={handleSave}>Save</button>
      <button className="button2"  onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditModel;
