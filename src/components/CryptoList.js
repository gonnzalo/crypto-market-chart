import React from "react";

export default function CryptoList(props) {
  const { cryptos, toggleCrypto } = props;
  return (
    <>
      {cryptos.map(crypto => (
        <button
          type="button"
          key={crypto}
          value={crypto}
          onClick={toggleCrypto}
        >
          {crypto}
        </button>
      ))}
    </>
  );
}
