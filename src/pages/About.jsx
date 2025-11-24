import React, { useState } from "react";

function CountryByName() {
  const [countryName, setCountryName] = useState("");
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_HOST = "country-facts.p.rapidapi.com";
  const API_KEY = "376c64e1a2mshc2952a4d1b74161p1a427djsnbbe8200cc61c"; // Replace with your key

  const getCountry = async () => {
    if (!countryName) return;

    setLoading(true);
    setError("");
    setCountry(null);

    const API_URL = `https://country-facts.p.rapidapi.com/flags/search/${encodeURIComponent(
      countryName
    )}`;

    try {
      const res = await fetch(API_URL, {
        method: "GET",
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY,
        },
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();

      // Check for results array
      if (data.results && data.results.length > 0) {
        setCountry(data.results[0].result); // Important: use .result to access flag & name
      } else {
        setError("Country not found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-6">
      {/* Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          className="px-4 py-2 border rounded-lg w-64"
        />
        <button
          onClick={getCountry}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Fetch
        </button>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm text-center">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : country ? (
          <>
            <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
            <img
              src={country.flag}
              alt={country.name}
              className="w-48 h-32 mx-auto rounded shadow mb-4"
            />
          </>
        ) : (
          <p className="text-gray-500">Enter a country name to fetch data</p>
        )}
      </div>
    </div>
  );
}

export default CountryByName;
