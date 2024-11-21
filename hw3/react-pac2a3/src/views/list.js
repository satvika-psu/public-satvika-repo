import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";
const List = ({ title }) => {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";

  // state variables
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setList(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
        setIsLoaded(true);
      });
  }, []);

  return (
    <main>
      <h1>{title}</h1>
      {!isLoaded && <div>Loading... </div>}
      <div className="card-grid">
        {list.map((country) => {
          return (
            <div className="card" key={country.id}>
              <h2>
                {country.name ? country.name : "Country Name Unavailable"}
              </h2>

              {country.flag_png ? (
                <img
                  src={country.flag_png}
                  alt={country.flag_alt || "Flag"}
                  width="100"
                  className="flag"
                />
              ) : (
                <p>Flag Unavailable</p>
              )}

              <p>
                <strong>Official Languages:</strong>{" "}
                {country.official_languages
                  ? country.official_languages.join(", ")
                  : "Data Unavailable"}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population
                  ? country.population.toLocaleString()
                  : "Data Unavailable"}
              </p>

              <p>
                <strong>GDP:</strong>{" "}
                {country.gdp_billions
                  ? `$${country.gdp_billions} billion`
                  : "Data Unavailable"}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default List;
