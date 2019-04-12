import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("eos");
  const [url, setUrl] = useState(
    "https://api.coingecko.com/api/v3/coins/eos/market_chart?vs_currency=usd&days=max"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);
      setData([
        ...data,
        {
          name: query,
          data: result.data.market_caps
        }
      ]);
      setIsLoading(false);
      setStocks([...stocks, query]);
    };
    fetchData();
  }, [url]);

  const doFetch = () => {
    setUrl(
      `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=max`
    );
  };

  return (
    <div className="app-container">
      <form
        onSubmit={event => {
          doFetch();

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setUrl(
              `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=max`
            )
          }
        >
          Search
        </button>
      </form>
      <div className="stocks">
        {stocks.map(stock => (
          <div>
            <h1>{stock}</h1>
          </div>
        ))}
      </div>
      {isLoading ? <div>Loading ...</div> : <Chart series={data} />}
    </div>
  );
}

export default App;
