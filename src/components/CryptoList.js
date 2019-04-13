import React from "react";
import PropTypes from "prop-types";

export default function CryptoList(props) {
  const { removeCrypto, cryptos, toggleCrypto } = props;
  return (
    <>
      {cryptos.map(crypto => (
        <>
          <button
            type="button"
            key={crypto}
            value={crypto}
            onClick={toggleCrypto}
          >
            {crypto}
          </button>
          <button
            key={`${crypto}-remove`}
            value={crypto}
            type="button"
            onClick={removeCrypto}
          >
            X
          </button>
        </>
      ))}
    </>
  );
}

CryptoList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleCrypto: PropTypes.func.isRequired,
  removeCrypto: PropTypes.func.isRequired
};
