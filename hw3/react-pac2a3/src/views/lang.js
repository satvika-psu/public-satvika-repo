import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const Lang = () => {
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';

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
  // Process the data to count number of languages per country
  const languagesCount = {
    OneLanguage: 0,
    TwoLanguages: 0,
    ThreeOrMoreLanguages: 0,
  };

  countries.forEach((country) => {
    const languageCount = country.official_languages.length;
    if (languageCount === 1) {
      languagesCount.OneLanguage++;
    } else if (languageCount === 2) {
      languagesCount.TwoLanguages++;
    } else {
      languagesCount.ThreeOrMoreLanguages++;
    }
  });

  // Data for Doughnut chart
  const chartData = {
    labels: ['1 Language', '2 Languages', '3+ Languages'],
    datasets: [
      {
        label: 'Number of Official Languages per Country',
        data: Object.values(languagesCount),

        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
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
        text: 'Number of Official Languages per Country',
      },
    },
  };

  // Chart Styles
  const styles = {
    chartContainer: {
      maxWidth: '500px',
      width: '60%',
      height: '60%',
      margin: '20px auto',
    },
  };

  return (
    <div>
      <h2>Official Languages Distribution</h2>
      {!isLoaded ? (
        <div>Loading chart...</div>
      ) : (
        <div style={styles.chartContainer}>
          <Doughnut data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default Lang;
