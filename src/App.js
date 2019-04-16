import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./components/Chart";
import CryptoList from "./components/CryptoList";
import LoadingProgress from "./components/LoadingProgress";
import AutoComplete from "./components/AutoComplete";
import "./App.css";

const useCoinGeckoApi = symbol => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cryptocurrencies, setCryptocurrencies] = useState([
    "bitcoin",
    "ethereum",
    "ripple",
    "eos",
    "litecoin",
    "stellar",
    "cardano",
    "tron",
    "monero",
    "dash"
  ]);
  const [updateChart, setUpdateChart] = useState(false);

  useEffect(() => {
    const promises = cryptocurrencies.map(async (value, i) => {
      const response = await axios({
        url: `https://api.coingecko.com/api/v3/coins/${value}/market_chart?vs_currency=usd&days=max`
      });
      return {
        name: value,
        data: response.data.market_caps,
        display: i > 2
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
      data.filter(cryptos => {
        const backup = cryptos;
        if (e.target.value === cryptos.name) backup.display = !cryptos.display;
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

  function handleChange(value) {
    setQuery(value);
  }

  function handleSubmit(event) {
    doFetch(
      `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=max`
    );

    event.target.reset();

    event.preventDefault();
  }

  return (
    <div className="app-container">
      <div className="app-wrapper">
        {/* <Search
          query={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        /> */}
        <AutoComplete
          query={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {isLoading ? (
          <LoadingProgress className="loading-progress" />
        ) : (
          <>
            <Chart
              series={data.filter(crypto => crypto.display)}
              update={updateChart}
            />
            <div className="cryptocurrencies">
              <CryptoList
                cryptos={cryptocurrencies}
                toggleCrypto={toggleCrypto}
                removeCrypto={removeCrypto}
                data={data}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
