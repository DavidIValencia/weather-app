import React, { useState } from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmission = (fetchData: any, fetchError: any) => {
    setData(fetchData);
    setError(fetchError);
  };

  return (
    <div className="app">
      <Header />
      <Form onFormSubmission={handleFormSubmission} />
      <Result data={data} error={error} />
    </div>
  )
}

export default App
