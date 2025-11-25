import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndData } from "../../Api/postapi";
import { Loader } from "lucide-react";

const CountryDetails = () => {
  const params = useParams();
  const id = params.id;

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(id);
        if (res?.status === 200) {
          // res.data might be an array; take first element safely
          setCountry(res.data?.[0] ?? null);
        } else {
          setCountry(null);
          console.error("Failed to fetch country", res);
        }
      } catch (err) {
        console.error("Error fetching country", err);
        setCountry(null);
      }
    });
  }, [id]); // re-run when URL id changes

  if (isPending || !country)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-12 h-12 text-green-500" />
      </div>
    );

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols gap-8 items-start">
          <img
            src={country.flags?.svg}
            alt={country.flags?.alt ?? `${country.name?.common ?? "flag"}`}
            className="flag w-full max-w-md object-contain rounded-lg shadow-md"
          />

          <div className="country-content">
            <p className="card-title text-2xl font-semibold mb-4">
              {country.name?.official ?? country.name?.common}
            </p>

            <div className="infoContainer space-y-2 text-sm text-gray-700">
              <p>
                <span className="card-description font-semibold">Native Names: </span>
                {country.name?.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Population: </span>
                {country.population ? country.population.toLocaleString() : "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Region: </span>
                {country.region ?? "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Sub Region: </span>
                {country.subregion ?? "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Capital: </span>
                {country.capital?.[0] ?? "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Top Level Domain: </span>
                {country.tld?.[0] ?? "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Currencies: </span>
                {country.currencies
                  ? Object.keys(country.currencies)
                      .map((cur) => country.currencies[cur].name)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="card-description font-semibold">Languages: </span>
                {country.languages
                  ? Object.keys(country.languages)
                      .map((k) => country.languages[k])
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="country-card-backBtn mt-8">
          <NavLink to="/country" className="backBtn">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
