import React, { useState } from 'react';
import parkinson from './image/parkinson.jpeg';
import './Parkinson.css';

function Parkinson() {
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
  fetch(`http://localhost:8080/parkinsons_values/${queryParams.toString()}`)
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
    <section id="parkinson">
      <div className='heading'>
        <h1>Parkinson Report Analysis</h1>
        <img src={parkinson} id="myimg" alt="" />
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
              <label htmlFor="MDVP:Fo(Hz)" className="p-primary">MDVP:Fo(Hz):</label>
              <input type="text" id="MDVP:Fo(Hz)" name='MDVP:Fo(Hz)' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Fhi(Hz)" className="p-primary">MDVP:Fhi(Hz):</label>
              <input type="text" id="MDVP:Fhi(Hz)" name='MDVP:Fhi(Hz)' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Flo(Hz)" className="p-primary">MDVP:Flo(Hz):</label>
              <input type="text" id="MDVP:Flo(Hz)" name='MDVP:Flo(Hz)' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Jitter(%)" className="p-primary">MDVP:Jitter(%):</label>
              <input type="text" id="MDVP:Jitter(%)" name='MDVP:Jitter(%)' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Jitter(Abs)" className="p-primary">MDVP:Jitter(Abs):</label>
              <input type="text" id="MDVP:Jitter(Abs)" name='MDVP:Jitter(Abs)' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:RAP" className="p-primary">MDVP:RAP:</label>
              <input type="text" id="MDVP:RAP" name='MDVP:RAP' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:PPQ" className="p-primary">MDVP:PPQ:</label>
              <input type="text" id="MDVP:PPQ" name='MDVP:PPQ' />
            </div>
            <div className="input-value">
              <label htmlFor="Jitter:DDP" className="p-primary">Jitter:DDP:</label>
              <input type="text" id="Jitter:DDP" name='Jitter:DDP' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Shimmer" className="p-primary">MDVP:Shimmer:</label>
              <input type="text" id="MDVP:Shimmer" name='MDVP:Shimmer' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Shimmer(dB)" className="p-primary">MDVP:Shimmer(dB):</label>
              <input type="text" id="MDVP:Shimmer(dB)" name='MDVP:Shimmer(dB)' />
            </div>
            <div className="input-value">
              <label htmlFor="Shimmer:APQ3" className="p-primary">Shimmer:APQ3:</label>
              <input type="text" id="Shimmer:APQ3" name='Shimmer:APQ3' />
            </div>
            <div className="input-value">
              <label htmlFor="Shimmer:APQ5" className="p-primary">Shimmer:APQ5:</label>
              <input type="text" id="Shimmer:APQ5" name='Shimmer:APQ5' />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:APQ" className="p-primary">MDVP:APQ:</label>
              <input type="text" id="MDVP:APQ" name='MDVP:APQ' />
            </div>
            <div className="input-value">
              <label htmlFor="Shimmer:DDA" className="p-primary">Shimmer:DDA:</label>
              <input type="text" id="Shimmer:DDA" name='Shimmer:DDA' />
            </div>
            <div className="input-value">
              <label htmlFor="NHR" className="p-primary">NHR:</label>
              <input type="text" id="NHR" name='nhr' />
            </div>
            <div className="input-value">
              <label htmlFor="HNR" className="p-primary">HNR:</label>
              <input type="text" id="HNR" name='hnr' />
            </div>
            <div className="input-value">
              <label htmlFor="RPDE" className="p-primary">RPDE:</label>
              <input type="text" id="RPDE" name='rpde' />
            </div>
            <div className="input-value">
              <label htmlFor="DFA" className="p-primary">DFA:</label>
              <input type="text" id="DFA" name='dfa' />
            </div>
            <div className="input-value">
              <label htmlFor="spread1" className="p-primary">spread1:</label>
              <input type="text" id="spread1" name='spread1' />
            </div>
            <div className="input-value">
              <label htmlFor="spread2" className="p-primary">spread2:</label>
              <input type="text" id="spread2" name='spread2' />
            </div>
            <div className="input-value">
              <label htmlFor="D2" className="p-primary">D2:</label>
              <input type="text" id="D2" name='d2' />
            </div>
            <div className="input-value">
              <label htmlFor="PPE" className="p-primary">PPE:</label>
              <input type="text" id="PPE" name='ppe' />
            </div>
            <input type="submit" className="submit-button" style={{width:'45%'}} />
          </form>
          <p>{result}</p>
        </div>
      </div>
    </section>
  );
}

export default Parkinson;
