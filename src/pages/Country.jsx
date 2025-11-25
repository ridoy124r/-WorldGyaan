
import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/postapi";
import { Loader } from "lucide-react";
import CountryCard from "../components/CountryCard";

export const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-12 h-12 text-green-500" />
      </div>
    );

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Explore Countries <br />
        <span className="text-green-600">and their Facts</span>
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {countries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
