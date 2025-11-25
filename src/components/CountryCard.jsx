// components/CountryCard.jsx
import React from "react";
import { NavLink } from "react-router-dom";
const CountryCard = ({ country }) => {
  const { 
    name, 
    region, 
    population, 
    capital, 
    flags,
    independent,
    
  } = country;

  

  return (
    <li className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-7 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/20">
    
      <div className="relative mb-4">
        <img
          src={flags.png}
          alt={`${name.common} flag`}
          className="w-full h-48 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
        />
       
      </div>

      {/* Country Info */}
      <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-500 transition">
        {name.common}
      </h2>

      <p className="text-gray-600 text-sm mb-1">
        <span className="font-semibold">Capital:</span> {capital ? capital[0] : "N/A"}
      </p>

      <p className="text-gray-600 text-sm mb-1">
        <span className="font-semibold">Population:</span> {population.toLocaleString()}
      </p>

      <p className="text-gray-600 text-sm mb-1">
        <span className="font-semibold">Region:</span> {region || "N/A"}
      </p>

     <NavLink to={`/country/${name.common}`}> 
        <button className="bg-gray-400 text-gray-200 px-4 py-2 rounded-md mt-2">
            Read More
        </button>
     </NavLink>

    </li>
  );
};

export default CountryCard;
