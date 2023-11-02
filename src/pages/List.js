import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { warehouses } from "../data";
import { WarehouseContext } from "../context/data";

const List = () => {
  const { foundWarehouses , filterWarehouses } = useContext(WarehouseContext);
  

  const [filterCriteria, setFilterCriteria] = useState({
    city: "",
    availableSpace: "",
    cluster: "",
  });

  const handleFilterChange = (e) => {
    setFilterCriteria({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  console.log(filterCriteria);

  useEffect(() => {
    filterWarehouses(filterCriteria);
  });


  console.log(foundWarehouses);
  return (

    <div className="list page">
      <h3>List of Warehouses</h3>
      <div className="filter-form">
        <input
          type="text"
          placeholder="Filter by City"
          name="city"
          value={filterCriteria.city}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Filter by Available Space"
          name="availableSpace"
          value={filterCriteria.availableSpace}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Filter by Cluster"
          name="cluster"
          value={filterCriteria.cluster}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>
      <div className="item-list">
        {foundWarehouses.map((warehouse) => (
          <div className="item" key={warehouse.id}>
            <Link to={`/list/${warehouse.id}`}>
              <h3>Name: {warehouse.name}</h3>
            </Link>
            <p>Code: {warehouse.code}</p>
            <p>City: {warehouse.city}</p>
            <p>Space Available: {warehouse.space_available}</p>
            <p>Type: {warehouse.type}</p>
            <p>Cluster: {warehouse.cluster}</p>
            <p>Registered: {warehouse.is_registered ? "Yes" : "No"}</p>
            <p>Live: {warehouse.is_live ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { List };
