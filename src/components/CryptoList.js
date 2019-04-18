import React from "react";
import PropTypes from "prop-types";
import "./cryptoList.css";

export default function CryptoList(props) {
  const { removeCrypto, cryptos, toggleCrypto, data } = props;
  return (
    <>
      <div className="crypto-container">
        {cryptos.map((crypto, i) => (
          <div className="btns-container" key={`${crypto}-container`}>
            <button
              type="button"
              value={crypto}
              onClick={toggleCrypto}
              className={`btn btn-symbol ${data[i].display === true &&
                "active "}`}
            >
              {crypto}
            </button>
            <button
              value={crypto}
              type="button"
              onClick={removeCrypto}
              className="btn-remove"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

CryptoList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleCrypto: PropTypes.func.isRequired,
  removeCrypto: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired
};
