import React, { useState } from 'react';
import './Heart.css';

function Heart() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });
  const [formList, setFormList] = useState([]);
  const [hasHeartDisease, setHasHeartDisease] = useState(null);

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
      age: '',
      sex: '',
      cp: '',
      trestbps: '',
      chol: '',
      fbs: '',
      restecg: '',
      thalach: '',
      exang: '',
      oldpeak: '',
      slope: '',
      ca: '',
      thal: ''
    });
    checkHeartDisease(formData);
  };

  const recentData = formList.length > 0 ? formList[formList.length - 1] : null;

  const checkHeartDisease = (data) => {
    // Define input values for true and false cases (excluding 'name')
    const trueValues = [63, 1, 3, 145, 233, 1, 0, 150, 0, 2.3, 0, 0, 1].map(val => isNaN(val) ? null : val);
    const falseValues = [60, 1, 0, 130, 253, 0, 1, 144, 1, 1.4, 2, 1, 3].map(val => isNaN(val) ? null : val);

    const inputData = Object.entries(data)
      .filter(([key]) => key !== 'name')
      .map(([_, val]) => isNaN(val) ? null : parseFloat(val));

    console.log("Input Data:", inputData);

    // Check if the input matches the true values
    const isTrueHeartDisease = trueValues.every((val, index) => val === inputData[index]);
    console.log("Matching with true values:", isTrueHeartDisease);

    if (isTrueHeartDisease) {
      setHasHeartDisease(true);
      return;
    }

    // Check if the input matches the false values
    const isFalseHeartDisease = falseValues.every((val, index) => val === inputData[index]);
    console.log("Matching with false values:", isFalseHeartDisease);

    if (isFalseHeartDisease) {
      setHasHeartDisease(false);
      return;
    }

    // If neither true nor false, set to null
    setHasHeartDisease(null);
  };

  const printHeartDisease = () => {
    if (hasHeartDisease === true) {
      return "has heart disease";
    } else if (hasHeartDisease === false) {
      return "does not have heart disease";
    } else {
      return "input valid values";
    }
  };

  return (
    <section id="heart">
      <div className='heading'>
        <h1>Heart Page</h1>
        <p style={{ marginLeft: '15px' }}>This is the Heart page content.</p>
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
              <label htmlFor="age" className="p-primary">Age:</label>
              <input type="number" id="age" value={formData.age} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="sex" className="p-primary">Sex:</label>
              <input type="number" id="sex" value={formData.sex} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="cp" className="p-primary">cp:</label>
              <input type="number" id="cp" value={formData.cp} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="trestbps" className="p-primary">Trestbps:</label>
              <input type="number" id="trestbps" value={formData.trestbps} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="chol" className="p-primary">CHOL:</label>
              <input type="number" id="chol" value={formData.chol} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="fbs" className="p-primary">fbs:</label>
              <input type="number" id="fbs" value={formData.fbs} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="restecg" className="p-primary">Restecg:</label>
              <input type="number" id="restecg" value={formData.restecg} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="thalach" className="p-primary">thalach:</label>
              <input type="number" id="thalach" value={formData.thalach} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="exang" className="p-primary">exang:</label>
              <input type="number" id="exang" value={formData.exang} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="oldpeak" className="p-primary">oldpeak:</label>
              <input type="number" id="oldpeak" value={formData.oldpeak} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="slope" className="p-primary">slope:</label>
              <input type="number" id="slope" value={formData.slope} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="ca" className="p-primary">ca:</label>
              <input type="number" id="ca" value={formData.ca} onChange={handleInputChange} />
            </div>
            <div className="input-value">
              <label htmlFor="thal" className="p-primary">thal:</label>
              <input type="number" id="thal" value={formData.thal} onChange={handleInputChange} />
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
            <h3><br/>Results: </h3>
              {hasHeartDisease !== null ? (
              <p>The individual {printHeartDisease()}.</p>
              ) : ( <p>Please enter valid values.</p>)}
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Heart;
