import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Population = () => {
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';

  // State variables
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCountries(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
        setIsLoaded(true);
      });
  }, []);

  const chartData = {
    labels: countries.map((country) => country.name),
    datasets: [
      {
        label: 'Population (in millions)',
        data: countries.map((country) => country.population / 1_000_000),
        backgroundColor: 'rgba(83, 102, 255, 0.8)',
        borderColor: 'rgba(83, 102, 255, 1)',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Population of South American Countries',
      },
    },
  };

  // Styling object
  const styles = {
    chartContainer: {
      maxWidth: '500px',
      width: '500%',
      height: '500%',
      margin: '50px auto',
    },
  };

  return (
    <section className="container">
      <h2>South American Countries Population</h2>
      {!isLoaded ? (
        <div>Loading chart...</div>
      ) : (
        <div style={styles.chartContainer}>
          <Bar data={chartData} options={options} />
        </div>
      )}
    </section>
  );
};

export default Population;
