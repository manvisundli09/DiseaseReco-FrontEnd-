import React, { useState } from 'react';
import diabetesimg from './image/diabetes.jpeg';
import './Diabetes.css';

function Diabetes() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Extracting only values from formData
    
    const values = Array.from(formData.values()).map(value => parseFloat(value));
    const formattedValues = values.map(value => value.toFixed(2)); // Example: Round to 2 decimal places

    // Constructing query parameters string
    const queryParams = formattedValues.join(',');
    console.log("Form Data: ", formData);
    console.log("Query Params: ", queryParams); // Log query parameters

  // Sending GET request to Flask server
  fetch(`http://localhost:8080/diabetes_values/${queryParams.toString()}`)
    .then(response => {
      console.log("Response Status: ", response.status); // Log response status
      return response.text();
    })
    .then(data => {
      console.log("Response Data: ", data); // Log response data
      setResult(data);
    })
    .catch(error => console.error('Error:', error));
  }
  return (
    <section id="diabetes">
      <div className='heading'>
        <h1>Diabetes Report Analysis</h1>
        <img src={diabetesimg} id="myimg" alt="" />
      </div>
      <div className="second-page">
        <div className="symptoms">
          <h1 className="p-primary">INPUT YOUR SYMPTOMS</h1>
          <form className="symptoms-form" onSubmit={handleSubmit}>
            <div className="input-value">
              <label htmlFor="name" className="p-primary">Name:</label>
              <input type="text" id="name" />
            </div>
            <div className="input-value">
              <label htmlFor="pregnancies" className="p-primary">Pregnancies:</label>
              <input type="text" id="pregnancies" name='pregnancies' />
            </div>
            <div className="input-value">
              <label htmlFor="glucose" className="p-primary">Glucose:</label>
              <input type="text" id="glucose" name='glucose' />
            </div>
            <div className="input-value">
              <label htmlFor="bloodPressure" className="p-primary">BloodPressure:</label>
              <input type="text" id="bloodPressure" name='bloodPressure' />
            </div>
            <div className="input-value">
              <label htmlFor="skinThickness" className="p-primary">SkinThickness:</label>
              <input type="text" id="skinThickness" name='skinThickness' />
            </div>
            <div className="input-value">
              <label htmlFor="insulin" className="p-primary">Insulin:</label>
              <input type="text" id="insulin" name='insulin' />
            </div>
            <div className="input-value">
              <label htmlFor="BMI" className="p-primary">BMI:</label>
              <input type="text" id="BMI" name='bmi' />
            </div>
            <div className="input-value">
              <label htmlFor="diabetesPedigreeFunction" className="p-primary">DiabetesPedigreeFunction:</label>
              <input type="text" id="diabetesPedigreeFunction" name='diabetesPedigreeFunction' />
            </div>
            <div className="input-value">
              <label htmlFor="age" className="p-primary">Age:</label>
              <input type="text" id="age" name='age' />
            </div>
            <input type="submit" className="submit-button" style={{width:'45%'}} />
          </form>
          <p>{result}</p>
        </div>
      </div>
    </section>
  );
}
export default Diabetes;
