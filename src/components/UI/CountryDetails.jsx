// import React, { useEffect, useState, useTransition } from "react";
// import { useParams, NavLink } from "react-router-dom";
// import { getCountryIndData } from "../../Api/postapi";
// import { Loader } from "lucide-react";

// const CountryDetails = () => {
//   const params = useParams();
//   const id = params.id;

//   const [isPending, startTransition] = useTransition();
//   const [country, setCountry] = useState(null);

//   useEffect(() => {
//     startTransition(async () => {
//       try {
//         const res = await getCountryIndData(id);
//         if (res?.status === 200) {
          
//           setCountry(res.data?.[0] ?? null);
//         } else {
//           setCountry(null);
//           console.error("Failed to fetch country", res);
//         }
//       } catch (err) {
//         console.error("Error fetching country", err);
//         setCountry(null);
//       }
//     });
//   }, [id]); 

//   if (isPending || !country)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader className="animate-spin w-12 h-12 text-green-500" />
//       </div>
//     );

//   return (
//     <section className=" bg-gray-300 flex flex-col items-center  h-screen justify-center">
//       <div className="bg-white-box " >
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   bg-amber-500">
//           <img
//             src={country.flags?.svg}
//             alt={country.flags?.alt ?? `${country.name?.common ?? "flag"}`}
//             className="flag w-full max-w-md object-contain rounded-lg shadow-md"
//           />

//           <div className="">
//             <p className="card-title text-2xl font-semibold mb-4">
//               {country.name?.official ?? country.name?.common}
//             </p>

//             <div className="space-y-2 text-sm text-gray-700">
//               <p>
//                 <span className="card-description font-semibold">Native Names: </span>
//                 {country.name?.nativeName
//                   ? Object.keys(country.name.nativeName)
//                       .map((key) => country.name.nativeName[key].common)
//                       .join(", ")
//                   : "N/A"}
//               </p>

//               <p>
//                 <span className=" font-semibold">Population: </span>
//                 {country.population ? country.population.toLocaleString() : "N/A"}
//               </p>

//               <p>
//                 <span className="font-semibold">Region: </span>
//                 {country.region ?? "N/A"}
//               </p>

//               <p>
//                 <span className="font-semibold">Sub Region: </span>
//                 {country.subregion ?? "N/A"}
//               </p>

//               <p>
//                 <span className="font-semibold">Capital: </span>
//                 {country.capital?.[0] ?? "N/A"}
//               </p>

//               <p>
//                 <span className="card-description font-semibold">Top Level Domain: </span>
//                 {country.tld?.[0] ?? "N/A"}
//               </p>

//               <p>
//                 <span className="card-description font-semibold">Currencies: </span>
//                 {country.currencies
//                   ? Object.keys(country.currencies)
//                       .map((cur) => country.currencies[cur].name)
//                       .join(", ")
//                   : "N/A"}
//               </p>

//               <p>
//                 <span className="card-description font-semibold">Languages: </span>
//                 {country.languages
//                   ? Object.keys(country.languages)
//                       .map((k) => country.languages[k])
//                       .join(", ")
//                   : "N/A"}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="country-card-backBtn mt-8">
//           <NavLink to="/country" className="backBtn">
//             <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
//               Go Back
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CountryDetails;


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
  }, [id]); 

  if (isPending || !country)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-12 h-12 text-green-500" />
      </div>
    );

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-400 rounded-xl shadow-2xl max-w-5xl w-full p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="flex items-center justify-center">
            <img
              src={country.flags?.svg}
              alt={country.flags?.alt ?? `${country.name?.common ?? "flag"}`}
              className="w-full max-w-md h-auto p-2 object-cover rounded-lg shadow-lg border-4 border-gray-700"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
              {country.name?.official ?? country.name?.common}
            </h1>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Native Names: </span>
                {country.name?.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Population: </span>
                {country.population ? country.population.toLocaleString() : "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Region: </span>
                {country.region ?? "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Sub Region: </span>
                {country.subregion ?? "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Capital: </span>
                {country.capital?.[0] ?? "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Top Level Domain: </span>
                {country.tld?.[0] ?? "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Currencies: </span>
                {country.currencies
                  ? Object.keys(country.currencies)
                      .map((cur) => country.currencies[cur].name)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Languages: </span>
                {country.languages
                  ? Object.keys(country.languages)
                      .map((k) => country.languages[k])
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <NavLink to="/country">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;