import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Chart from "./components/Chart";
import CryptoList from "./components/CryptoList";
import "./App.css";

const useCoinGeckoApi = (initialUrl, initialData, symbol) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [cryptocurrencies, setcryptocurrencies] = useState([]);
  const [updateChart, setUpdateChart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (cryptocurrencies.indexOf(symbol) < 0) {
        setIsLoading(true);

        const result = await axios(url);
        setData([
          ...data,
          {
            name: symbol,
            data: result.data.market_caps,
            display: true
          }
        ]);
        setIsLoading(false);
        setcryptocurrencies([...cryptocurrencies, symbol]);
      }
    };
    fetchData();
  }, [url]);

  const doFetch = myUrl => {
    setUrl(myUrl);
  };

  function toggleCrypto(e) {
    setData(
      data.filter(crypto => {
        const backup = crypto;
        if (e.target.value === crypto.name) backup.display = !crypto.display;
        return backup;
      })
    );
    setUpdateChart(!updateChart);
  }

  return {
    data,
    isLoading,
    doFetch,
    cryptocurrencies,
    toggleCrypto,
    updateChart
  };
};

function App() {
  const [query, setQuery] = useState("eos");
  const {
    data,
    isLoading,
    cryptocurrencies,
    doFetch,
    toggleCrypto,
    updateChart
  } = useCoinGeckoApi(
    "https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=max",
    [],
    query
  );

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    doFetch(
      `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=max`
    );

    event.preventDefault();
  }

  return (
    <div className="app-container">
      <Search
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="cryptocurrencies">
        <CryptoList cryptos={cryptocurrencies} toggleCrypto={toggleCrypto} />
      </div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Chart
          series={data.filter(crypto => crypto.display)}
          update={updateChart}
        />
      )}
    </div>
  );
}

export default App;
