import { NavLink, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import SearchBar from "./Searchbar";
import '../index'
import { WarehouseContext } from "../context/data";

export const Navbar = () => {
  
  const { search , foundWarehouses} = useContext(WarehouseContext);
  console.log(foundWarehouses);
  const onSearch = (query) => {
    console.log("Searching for:", query);

    search(query);
  };

  return (
    <div>
      <div className="navbar">
        <img
          src="https://tinyurl.com/k46xadr2"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>Warehouse Manager</span>

        <nav>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                  border: "2px solid #fff",
                  backgroundColor: "#e1d1f976"
                }
                : null
            }
            to="/"
          >
            About
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                  border: "2px solid #fff",
                  backgroundColor: "#e1d1f976"
                }
                : null
            }
            to="/list"
          >
            List
          </NavLink>
        </nav>
        <SearchBar onSearch={onSearch} />
      </div>
      <Outlet />
    </div>
  );
};
