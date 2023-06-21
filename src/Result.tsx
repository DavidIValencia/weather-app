import React from 'react';

interface ResultProps {
  data: any
  error: any
}

const kToFarenheight = (kTemp: number): string => {
  const farenheightTemp = (kTemp - 273.15) * 9/5 + 32
  return farenheightTemp.toFixed(2)
}

const Result: React.FC<ResultProps> = ({ data, error }) => {
  if (error) return <div>City not found</div>
  if (!data) return <div></div>
  return (
    <div className="result">
      <div className="result__title">
        {data.name}
        <img className="result__title__icon" alt="" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
      </div>
      <br />
      <div>{`Description: ${data.weather[0].description}`}</div>
      <br />
      <div>{`Current temp: ${kToFarenheight(data.main.temp)}°F`}</div>
      <br />
      <div>{`Feels like: ${kToFarenheight(data.main.feels_like)}°F`}</div>
      <br />
      <div>{`Wind speed: ${data.wind.speed}mph`}</div>
    </div>
  )
}

export default Result
