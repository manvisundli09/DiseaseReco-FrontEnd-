import React, { useState } from 'react';
import './Diabetes.css';

function Diabetes() {
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
    thal: '',
    target: ''
  });
  const [formList, setFormList] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
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
      thal: '',
      target: ''
    });
  };

  const recentData = formList.length > 0 ? formList[formList.length - 1] : null;

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
            <div className="input-value">
              <label htmlFor="target" className="p-primary">target:</label>
              <input type="number" id="target" value={formData.target} onChange={handleInputChange} />
            </div>
            <input type="submit" className="submit-button" />
          </form>
          <div className="last-submitted">
            <h2>Last Submitted Data:</h2>
            {recentData && (
              <p>
                <strong>Name:</strong> {recentData.name}, <strong>Age:</strong> {recentData.age}, <strong>Sex:</strong> {recentData.sex}, <strong>cp:</strong> {recentData.cp}
                {/* Display other form data similarly */}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diabetes;
