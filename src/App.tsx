import React, { useState } from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleDataFetch = (fetchedData: any, fetchError: any) => {
    setData(fetchedData);
    setError(fetchError);
  };

  return (
    <div className="app">
      <Header />
      <Form onDataFetch={handleDataFetch} />
      <Result data={data} error={error} />
    </div>
  )
}

export default App
