// WarehouseContext.js
import { warehouses } from '../data';
import React, { createContext, useState } from 'react';

// Create a context
export const WarehouseContext = createContext();

// Create a provider
export const WarehouseProvider = ({ children }) => {
    const [foundWarehouses, setFoundWarehouses] = useState(warehouses);

    const updateFoundWarehouses = (newWarehouses) => {
        setFoundWarehouses(newWarehouses);
    };

    const search = (query) => {
        // Handle the search logic here.
        console.log("Searching for:", query);

        const found = foundWarehouses.filter(warehouse =>
            warehouse.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(found);
        setFoundWarehouses(found);
    };

    const filterWarehouses = (filterCriteria) => {
        const { city, availableSpace, cluster } = filterCriteria;

        const filteredData = foundWarehouses.filter(warehouse => {
            const matchCity = !city || warehouse.city.toLowerCase().includes(city.toLowerCase());
            const matchSpace = !availableSpace || warehouse.space_available >= parseInt(availableSpace);
            const matchCluster = !cluster || warehouse.cluster.toLowerCase().includes(cluster.toLowerCase());
            return matchCity && matchSpace && matchCluster;
        });

        setFoundWarehouses(filteredData);
    };

    const updateWarehouseByCode = (code, editedValues) => {
        const updatedWarehouses = foundWarehouses.map(warehouse => {
            if (warehouse.code === code) {
                return { ...warehouse, ...editedValues };
            }
            return warehouse;
        });

        setFoundWarehouses(updatedWarehouses);
        
    };


    return (
        <WarehouseContext.Provider value={{ foundWarehouses, updateFoundWarehouses, search, filterWarehouses, updateWarehouseByCode }}>
            {children}
        </WarehouseContext.Provider>
    );
};
