import React from "react";
import PropTypes from "prop-types";
import "./cryptoList.css";

export default function CryptoList(props) {
  const { removeCrypto, cryptos, toggleCrypto } = props;
  return (
    <>
      <div className="crypto-container">
        {cryptos.map(crypto => (
          <>
            <button
              type="button"
              key={crypto}
              value={crypto}
              onClick={toggleCrypto}
              className="btn btn-symbol"
            >
              {crypto}
            </button>
            {/* <button
            key={`${crypto}-remove`}
            value={crypto}
            type="button"
            onClick={removeCrypto}
            className="btn-remove"
          >
            X
          </button> */}
          </>
        ))}
      </div>
    </>
  );
}

CryptoList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleCrypto: PropTypes.func.isRequired,
  removeCrypto: PropTypes.func.isRequired
};
