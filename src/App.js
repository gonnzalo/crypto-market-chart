import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Chart from "./components/Chart";
import CryptoList from "./components/CryptoList";
import "./App.css";

const useCoinGeckoApi = symbol => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cryptocurrencies, setCryptocurrencies] = useState([
    "eos",
    "litecoin",
    "stellar",
    "cardano",
    "tron"
  ]);
  const [updateChart, setUpdateChart] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const promises = cryptocurrencies.map(async value => {
      const response = await axios({
        url: `https://api.coingecko.com/api/v3/coins/${value}/market_chart?vs_currency=usd&days=max`
      });
      return {
        name: value,
        data: response.data.market_caps,
        display: true
      };
    });

    Promise.all(promises).then(result => {
      setData(...data, result);
      setIsLoading(false);
    });
  }, []);

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
        setCryptocurrencies([...cryptocurrencies, symbol]);
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

  function removeCrypto(e) {
    const { value } = e.target;
    setCryptocurrencies(cryptocurrencies.filter(v => v !== value));
    setData(data.filter(v => v.name !== value));
    setUpdateChart(!updateChart);
  }

  return {
    data,
    isLoading,
    doFetch,
    cryptocurrencies,
    toggleCrypto,
    updateChart,
    removeCrypto
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
    updateChart,
    removeCrypto
  } = useCoinGeckoApi(query);

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
        <CryptoList
          cryptos={cryptocurrencies}
          toggleCrypto={toggleCrypto}
          removeCrypto={removeCrypto}
        />
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
