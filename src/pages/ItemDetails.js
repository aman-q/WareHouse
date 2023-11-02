import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { warehouses } from "../data";
import EditModel from "../components/EditModel";

export const ItemDetails = () => {
  const [editModel, setEditModel] = useState(false);
  const { itemId } = useParams();

  const warehouse = warehouses.find((w) => w.id === Number(itemId));

  if (!warehouse) {
    return <h3>Warehouse details not found.</h3>;
  }

  const handleEdit = () =>{
    setEditModel(true);
  }

  const onClose = () =>{
    setEditModel(false);
  }

  if(editModel){
    return (
      <>
        <EditModel code={warehouse.code} warehouse={warehouse} onClose={onClose} />
      </>
    )
  }

  return (
    <div className="containerStyle">
      <h3 className="headingStyle">{warehouse.name}</h3>
      <p  className="textStyle">Code: {warehouse.code}</p>
      <p className="textStyle">City: {warehouse.city}</p>
      <p className="textStyle">Space Available: {warehouse.space_available}</p>
      <p className="textStyle">Type: {warehouse.type}</p>
      <p className="textStyle">Cluster: {warehouse.cluster}</p>
      <p className="textStyle">Registered: {warehouse.is_registered ? "Yes" : "No"}</p>
      <p className="textStyle">Live: {warehouse.is_live ? "Yes" : "No"}</p>

      <button className="editButton" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};
