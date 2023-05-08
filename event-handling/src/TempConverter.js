import React, { useState } from 'react';
import TempInputField from './TempInputField';

const toCelsius = (f) => {
  return (f - 32) * 5 / 9
}

const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32
}

export default function TempConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  function getValueC(number) {
    setCelsius(number);
    setFahrenheit(toFahrenheit(number));
  }
  function getValueF(number) {
    setFahrenheit(number);
    setCelsius(toCelsius(number));
  }
  return (
    <>
      <TempInputField unitofmeasure={'C'} func={getValueC} value={celsius} />
      <TempInputField unitofmeasure={'F'} func={getValueF} value={fahrenheit} />
    </>

  );

}