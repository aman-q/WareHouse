// import hook here
import { Link } from "react-router-dom";
export const NotFound = () => {
  // create back funtion here

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

     <Link  to="/"> <button>Back to Home</button></Link>
    </div>
  );
};
