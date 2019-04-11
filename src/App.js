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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData([
        ...data,
        {
          name: query,
          data: result.data.market_caps
        }
      ]);
    };
    fetchData();
  }, [url]);

  const options = {
    title: {
      text: "market cap"
    },
    tooltip: {
      valueDecimals: 0
    },
    series: [...data]
  };

  return (
    <div>
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

      <Chart options={options} />
    </div>
  );
}

export default App;
