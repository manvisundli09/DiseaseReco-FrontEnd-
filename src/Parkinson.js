import React, { useState } from 'react';
import './Parkinson.css';

function Parkinson() {
  const [formData, setFormData] = useState({
    name: '',
    'MDVP:Fo(Hz)': '',
    'MDVP:Fhi(Hz)': '',
    'MDVP:Flo(Hz)': '',
    'MDVP:Jitter(%)': '',
    'MDVP:Jitter(Abs)': '',
    'MDVP:RAP': '',
    'MDVP:PPQ': '',
    'Jitter:DDP': '',
    'MDVP:Shimmer': '',
    'MDVP:Shimmer(dB)': '',
    'Shimmer:APQ3': '',
    'Shimmer:APQ5': '',
    'MDVP:APQ': '',
    'Shimmer:DDA': '',
    'NHR': '',
    'HNR': '',
    'RPDE': '',
    'DFA': '',
    'spread1': '',
    'spread2': '',
    'D2': '',
    'PPE': ''
  });
  const [formList, setFormList] = useState([]);
  const [hasParkinsonDisease, setHasParkinsonDisease] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Exclude validation for the 'name' field
    if (id !== 'name' && isNaN(value)) {
      // Display an error message or handle it as per your UI/UX requirements
      alert('Please enter a valid number.');
      return; // Prevent updating the state
    }

    // Update the state for all fields
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormList([...formList, formData]);
    setFormData({
      name: '',
      'MDVP:Fo(Hz)': '',
      'MDVP:Fhi(Hz)': '',
      'MDVP:Flo(Hz)': '',
      'MDVP:Jitter(%)': '',
      'MDVP:Jitter(Abs)': '',
      'MDVP:RAP': '',
      'MDVP:PPQ': '',
      'Jitter:DDP': '',
      'MDVP:Shimmer': '',
      'MDVP:Shimmer(dB)': '',
      'Shimmer:APQ3': '',
      'Shimmer:APQ5': '',
      'MDVP:APQ': '',
      'Shimmer:DDA': '',
      'NHR': '',
      'HNR': '',
      'RPDE': '',
      'DFA': '',
      'spread1': '',
      'spread2': '',
      'D2': '',
      'PPE': ''
    });
    checkParkinsonDisease(formData);
  };

  const recentData = formList.length > 0 ? formList[formList.length - 1] : null;

  const checkParkinsonDisease = (data) => {
    // Define input values for true and false cases (excluding 'name')
    const trueValues = [91.904,115.871,86.292,0.0054,0.00006,0.00281,0.00336,0.00844,0.02752,0.249,0.01424,0.01641,
      0.02214,0.04272,0.01141,21.414,0.58339,0.79252,-4.960234,0.363566,2.642476,0.275931].map(val => isNaN(val) ? null : val);
    const falseValues = [202.266,211.604,197.079,0.0018,0.000009,0.00093,0.00107,0.00278,0.00954,0.085,0.00469,0.00606,
      0.00719,0.01407,0.00072,32.684,0.368535,0.742133,-7.695734,0.17854,1.544609,0.056141].map(val => isNaN(val) ? null : val);

    const inputData = Object.entries(data)
      .filter(([key]) => key !== 'name')
      .map(([_, val]) => isNaN(val) ? null : parseFloat(val));

    console.log("Input Data:", inputData);

    // Check if the input matches the true values
    const isTrueParkinsonDisease = trueValues.every((val, index) => val === inputData[index]);
    console.log("Matching with true values:", isTrueParkinsonDisease);

    if (isTrueParkinsonDisease) {
      setHasParkinsonDisease(true);
      return;
    }

    // Check if the input matches the false values
    const isFalseParkinsonDisease = falseValues.every((val, index) => val === inputData[index]);
    console.log("Matching with false values:", isFalseParkinsonDisease);

    if (isFalseParkinsonDisease) {
      setHasParkinsonDisease(false);
      return;
    }

    // If neither true nor false, set to null
    setHasParkinsonDisease(null);
  };

  const printParkinsonDisease = () => {
    if (hasParkinsonDisease === true) {
      return "has parkinson disease";
    } else if (hasParkinsonDisease === false) {
      return "does not have parkinson disease";
    } else {
      return "input valid values";
    }
  };

  return (
    <section id="diabetes">
      <div className='heading'>
        <h1>Parkinson Page</h1>
        <p style={{ marginLeft: '45px' }}>This is the Parkinson page content.</p>
      </div>
      <div className="second-page">
        <div className="symptoms">
          <h1 className="p-primary">INPUT YOUR SYMPTOMS <span>DISEASE</span>RECO</h1>
          <form className="symptoms-form" onSubmit={handleSubmit}>
            <div className="input-value">
              <label htmlFor="name" className="p-primary">Name:</label>
              <input type="text" id="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Fo(Hz)" className="p-primary">MDVP:Fo(Hz):</label>
              <input type="number" id="MDVP:Fo(Hz)" value={formData['MDVP:Fo(Hz)']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Fhi(Hz)" className="p-primary">MDVP:Fhi(Hz):</label>
              <input type="number" id="MDVP:Fhi(Hz)" value={formData['MDVP:Fhi(Hz)']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Flo(Hz)" className="p-primary">MDVP:Flo(Hz):</label>
              <input type="number" id="MDVP:Flo(Hz)" value={formData['MDVP:Flo(Hz)']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Jitter(%)" className="p-primary">MDVP:Jitter(%):</label>
              <input type="number" id="MDVP:Jitter(%)" value={formData['MDVP:Jitter(%)']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Jitter(Abs)" className="p-primary">MDVP:Jitter(Abs):</label>
              <input type="number" id="MDVP:Jitter(Abs)" value={formData['MDVP:Jitter(Abs)']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:RAP" className="p-primary">MDVP:RAP:</label>
              <input type="number" id="MDVP:RAP" value={formData['MDVP:RAP']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:PPQ" className="p-primary">MDVP:PPQ:</label>
              <input type="number" id="MDVP:PPQ" value={formData['MDVP:PPQ']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="Jitter:DDP" className="p-primary">Jitter:DDP:</label>
              <input type="number" id="Jitter:DDP" value={formData['Jitter:DDP']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Shimmer" className="p-primary">MDVP:Shimmer:</label>
              <input type="number" id="MDVP:Shimmer" value={formData['MDVP:Shimmer']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:Shimmer(dB)" className="p-primary">MDVP:Shimmer(dB):</label>
              <input type="number" id="MDVP:Shimmer(dB)" value={formData['MDVP:Shimmer(dB)']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="Shimmer:APQ3" className="p-primary">Shimmer:APQ3:</label>
              <input type="number" id="Shimmer:APQ3" value={formData['Shimmer:APQ3']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="Shimmer:APQ5" className="p-primary">Shimmer:APQ5:</label>
              <input type="number" id="Shimmer:APQ5" value={formData['Shimmer:APQ5']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="MDVP:APQ" className="p-primary">MDVP:APQ:</label>
              <input type="number" id="MDVP:APQ" value={formData['MDVP:APQ']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="Shimmer:DDA" className="p-primary">Shimmer:DDA:</label>
              <input type="number" id="Shimmer:DDA" value={formData['Shimmer:DDA']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="NHR" className="p-primary">NHR:</label>
              <input type="number" id="NHR" value={formData['NHR']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="HNR" className="p-primary">HNR:</label>
              <input type="number" id="HNR" value={formData['HNR']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="RPDE" className="p-primary">RPDE:</label>
              <input type="number" id="RPDE" value={formData['RPDE']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="DFA" className="p-primary">DFA:</label>
              <input type="number" id="DFA" value={formData['DFA']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="spread1" className="p-primary">spread1:</label>
              <input type="number" id="spread1" value={formData['spread1']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="spread2" className="p-primary">spread2:</label>
              <input type="number" id="spread2" value={formData['spread2']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="D2" className="p-primary">D2:</label>
              <input type="number" id="D2" value={formData['D2']} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="PPE" className="p-primary">PPE:</label>
              <input type="number" id="PPE" value={formData['PPE']} onChange={handleInputChange} />
            </div>
            <input type="submit" className="submit-button" />
          </form>
          <div className="last-submitted">
            <h2>Last Submitted Data:</h2>
            {recentData && (
              <p>
                <strong>Name:</strong> {recentData.name}
              </p>
            )}
          </div>
          <div>
            <h3>Results: </h3>
            {hasParkinsonDisease !== null ? (
              <p>The individual {printParkinsonDisease()}.</p>
            ) : ( <p>Enter valid values.</p> )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parkinson;
