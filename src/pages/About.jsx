import React from "react";
import CountryFact from "../Api/CountryData.json";

function About() {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Here are the Interesting Facts <br />
        <span className="text-green-600">we're proud of</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {CountryFact.map((country) => {
          const {
            id,
            countryName,
            capital,
            population,
            interestingFact,
          } = country;

          return (
            <div
              key={id}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/20"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-green-500 transition">
                {countryName}
              </h3>

              <p className="text-gray-800">
                <span className="font-semibold">{capital}:</span> Dhaka
              </p>

              <p className="text-gray-800 mt-1">
                <span className="font-semibold">{population}:</span> 173,480,000
              </p>

              <p className="text-gray-800 mt-3">
                <span className="font-semibold">{interestingFact}:</span>
                <br />
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
