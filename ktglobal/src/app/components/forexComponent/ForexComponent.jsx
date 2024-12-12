import React, { useState, useEffect } from 'react';
import styles from './ForexComponent.module.css';

const CurrencyRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const API_KEY = '8f65dbf2bd18ec0ea710e6c5';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  const fetchCurrencyRates = () => {
    setLoading(true);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then((data) => {
        setRates(data.conversion_rates);
        setLoading(false);
      })
      .catch((err) => {
        setError('Döviz kurları alınırken bir hata oluştu');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCurrencyRates();
    const intervalId = setInterval(fetchCurrencyRates, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Aç/Kapat Butonu */}
      <button className={styles.toggleButton} onClick={toggleBar}>
        {isOpen ? 'Kapat' : 'Döviz Kuru'}
      </button>

      {/* Yan Menü */}
      <div className={`${styles.ForexContainer} ${isOpen ? styles.open : ''}`}>
        {loading ? (
          <div>Yükleniyor...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            <h2>Döviz Kurları</h2>
            <div className={styles.currencyContainer}>
              <div className={styles.currencyItem}>
                <strong>Dolar:</strong> {rates.TRY}
              </div>
              <div className={styles.currencyItem}>
                <strong>Euro:</strong> {((1 / rates.EUR) * rates.TRY).toFixed(4)}
              </div>
              <div className={styles.currencyItem}>
                <strong>Sterlin:</strong> {((1 / rates.GBP) * rates.TRY).toFixed(4)}
              </div>
              <div className={styles.currencyItem}>
                <strong>Dinar:</strong> {((1 / rates.KWD) * rates.TRY).toFixed(4)}
              </div>
              <div className={styles.currencyItem}>
                <strong>Ruble:</strong> {((1 / rates.RUB) * rates.TRY).toFixed(4)}
              </div>
              <div className={styles.currencyItem}>
                <strong>Riyal:</strong> {((1 / rates.SAR) * rates.TRY).toFixed(4)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyRates;
