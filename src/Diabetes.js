import React, { useState } from 'react';
import './Diabetes.css';

function Diabetes() {
  const [formData, setFormData] = useState({
    name: '',
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    BMI: '',
    diabetesPedigreeFunction: '',
    age: ''
  });

  const [formList, setFormList] = useState([]);
  const [hasDiabetes, setHasDiabetes] = useState(null);

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
      pregnancies: '',
      glucose: '',
      bloodPressure: '',
      skinThickness: '',
      insulin: '',
      BMI: '',
      diabetesPedigreeFunction: '',
      age: ''
    });
    checkDiabetes(formData);
  };

  const recentData = formList.length > 0 ? formList[formList.length - 1] : null;

  const checkDiabetes = (data) => {
    // Define input values for true and false cases (excluding 'name')
    const trueValues = [10,125,70,26,115,31.1,0.205,41].map(val => isNaN(val) ? null : val);
    const falseValues = [13,145,82,19,110,22.2,0.245,57].map(val => isNaN(val) ? null : val);

    const inputData = Object.entries(data)
      .filter(([key]) => key !== 'name')
      .map(([_, val]) => isNaN(val) ? null : parseFloat(val));

    console.log("Input Data:", inputData);

    // Check if the input matches the true values
    const isTrueDiabetes = trueValues.every((val, index) => val === inputData[index]);
    console.log("Matching with true values:", isTrueDiabetes);

    if (isTrueDiabetes) {
      setHasDiabetes(true);
      return;
    }

    // Check if the input matches the false values
    const isFalseDiabetes = falseValues.every((val, index) => val === inputData[index]);
    console.log("Matching with false values:", isFalseDiabetes);

    if (isFalseDiabetes) {
      setHasDiabetes(false);
      return;
    }

    // If neither true nor false, set to null
    setHasDiabetes(null);
  };

  const printDiabetesResult = () => {
    if (hasDiabetes === true) {
      return "has Diabetes";
    } else if (hasDiabetes === false) {
      return "does not have Diabetes";
    } else {
      return "input valid values";
    }
  };

  return (
    <section id="diabetes">
      <div className='heading'>
        <h1>Diabetes Page</h1>
        <p style={{ marginLeft: '35px' }}>This is the Diabetes page content.</p>
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
              <label htmlFor="pregnancies" className="p-primary">Pregnancies:</label>
              <input type="number" id="pregnancies" value={formData.pregnancies} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="glucose" className="p-primary">Glucose:</label>
              <input type="number" id="glucose" value={formData.glucose} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="bloodPressure" className="p-primary">BloodPressure:</label>
              <input type="number" id="bloodPressure" value={formData.bloodPressure} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="skinThickness" className="p-primary">SkinThickness:</label>
              <input type="number" id="skinThickness" value={formData.skinThickness} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="insulin" className="p-primary">Insulin:</label>
              <input type="number" id="insulin" value={formData.insulin} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="BMI" className="p-primary">BMI:</label>
              <input type="number" id="BMI" value={formData.BMI} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="diabetesPedigreeFunction" className="p-primary">DiabetesPedigreeFunction:</label>
              <input type="number" id="diabetesPedigreeFunction" value={formData.diabetesPedigreeFunction} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="age" className="p-primary">Age:</label>
              <input type="number" id="age" value={formData.age} onChange={handleInputChange} />
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
            {hasDiabetes !== null ? (
              <p>The individual {printDiabetesResult()}.</p>
            ) : ( <p>Enter valid values.</p> )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diabetes;
