import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="container py-3">
        <div className="d-flex text-white justify-content-center align-items-center">
          <h3>
            <Link to="/" className="text-white text-decoration-none">Home</Link>
          </h3>
          <h3 className="ps-3">
            <Link to="/portfolio" className="text-white text-decoration-none">Portfolio</Link>
          </h3>
          
        </div>
      </div>
    </div>
  );
}
