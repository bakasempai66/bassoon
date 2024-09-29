import { useState, useEffect } from 'react';

export const CurrencyConverterPage = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(null);

  const fetchConversionRate = async () => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    setConversionRate(data.rates[toCurrency]);
  };

  useEffect(() => {
    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    return (amount * conversionRate).toFixed(2);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="RUB">RU</option>
        </select>
        <span> to </span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="RUB">RU</option>
        </select>
      </div>
      <h2>
        {amount} {fromCurrency} = {conversionRate ? handleConvert() : '...'} {toCurrency}
      </h2>
    </div>
  );
}
