import React, { useState } from 'react';
import heartimg from './image/heart.jpeg';
import './Heart.css';

function Heart() {
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
  fetch(`http://localhost:8080/heart_values/${queryParams.toString()}`)
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
    <section id="heart">
      <div className='heading'>
        <h1>Heart Report Analysis</h1>
        <img src={heartimg} id="myimg" alt="" />
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
              <label htmlFor="age" className="p-primary">Age:</label>
              <input type="text" id="age" name='age' />
            </div>
            <div className="input-value">
              <label htmlFor="sex" className="p-primary">Sex:</label>
              <input type="text" id="sex" name='sex'  />
            </div>
            <div className="input-value">
              <label htmlFor="cp" className="p-primary">cp:</label>
              <input type="text" id="cp" name='cp' />
            </div>
            <div className="input-value">
              <label htmlFor="trestbps" className="p-primary">Trestbps:</label>
              <input type="text" id="trestbps" name='trestbps' />
            </div>
            <div className="input-value">
              <label htmlFor="chol" className="p-primary">CHOL:</label>
              <input type="text" id="chol" name='chol'  />
            </div>
            <div className="input-value">
              <label htmlFor="fbs" className="p-primary">fbs:</label>
              <input type="text" id="fbs" name='fbs'  />
            </div>
            <div className="input-value">
              <label htmlFor="restecg" className="p-primary">Restecg:</label>
              <input type="text" id="restecg" name='restecg' />
            </div>
            <div className="input-value">
              <label htmlFor="thalach" className="p-primary">thalach:</label>
              <input type="text" id="thalach" name='thalach' />
            </div>
            <div className="input-value">
              <label htmlFor="exang" className="p-primary">exang:</label>
              <input type="text" id="exang" name='exang' />
            </div>
            <div className="input-value">
              <label htmlFor="oldpeak" className="p-primary">oldpeak:</label>
              <input type="text" id="oldpeak" name='oldpeak' />
            </div>
            <div className="input-value">
              <label htmlFor="slope" className="p-primary">slope:</label>
              <input type="text" id="slope" name='slope' />
            </div>
            <div className="input-value">
              <label htmlFor="ca" className="p-primary">ca:</label>
              <input type="text" id="ca" name='ca' />
            </div>
            <div className="input-value">
              <label htmlFor="thal" className="p-primary">thal:</label>
              <input type="text" id="thal" name='thal'  />
            </div>
            <input type="submit" className="submit-button" style={{width:'45%'}} />
          </form>
          <p>{result}</p>
        </div>
      </div>
      
    </section>
  );
}

export default Heart;
