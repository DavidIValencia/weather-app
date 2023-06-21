import React, { useState } from 'react'
import { fetchData } from './apiClient'

interface FormProps {
  onDataFetch: (data: any, error: any) => void
}

interface Change {
  (event: React.ChangeEvent<HTMLInputElement>): void
}

const Form: React.FC<FormProps> = ({ onDataFetch }) => {
  const [city, setCity] = useState('')

  const handleButtonClick = async () => {
    let data = null
    let error = null
    try {
      data = await fetchData(city)
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = 'An unexpected error occurred.';
      }
    } finally {
      onDataFetch(data, error)
      setCity("")
    }
  };


  const handleChange: Change = event => setCity(event.target.value)

  return (
    <div className="form">
      <div>City</div>
      <input type="text" value={city} onChange={handleChange} placeholder="Enter your city" />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default Form
