import React from 'react';

export const Home = () => {
  return (
    <div className="home page">
      <h3 className="title"><u>WareHouse Manager</u></h3>
      <img
        className="image"
        src="https://tinyurl.com/2rmcfxh4"
        alt="shoe"
      />
      <p className="description">
      The Warehouse Manager app is a powerful and versatile tool designed to streamline 
      and optimize the management of your warehouse or storage facility. With a user-friendly
       interface and a wide range of features,
       it simplifies the often complex and time-consuming task of inventory control.
      </p>
      <p className="description">
      The Warehouse Manager app is an indispensable tool for businesses
       of all sizes, from small startups to large enterprises, looking to maintain control 
       and efficiency in their supply chain and inventory management. Say goodbye to
        inventory headaches and hello to a more organized and productive warehouse
         environment. Try the Warehouse Manager app today and take the 
      first step toward streamlined and efficient inventory management.
      </p>
      <div className="socials">
        <img
          className="social-icon"
          src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
          alt="ig"
        />
        <img
          className="social-icon"
          src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
          alt="twitter"
        />
        <img
          className="social-icon"
          src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
          alt="facebook"
        />
      </div>
    </div>
  );
};




//--------------------------------------------------------------------------------------------------------------------
// import { Link } from "react-router-dom";
// import { items } from "../data";

// export const List = () => {
//   return (
//     <div className="list page">
//       <h3>List page</h3>
//       <div className="item-list">
//         {items.map((i) => (
//           <div className="item" key={i.id}>
//             <Link to={`${i.id}`}>
//               <h3>{i.name}</h3>
//             </Link>
//             <img src={i.image} alt={i.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
