import React from 'react';
import DiseaseRecoImage from './image/DiseaseReco.png';
import './Body.css';

function Body() {
  return (
    <div>
      <section id="body">
        <img src={DiseaseRecoImage} id="myimg" alt="" />
      </section>
      <section id="key-achievements">
        <div className="heading">
          <h1 className="h-primary">
            <span> OUR </span><br />
            GOALS
            <hr />
          </h1>
          <br /><br />
          <p className="p-primary">Analysing various diseases using open datasets
            <br />
            and by using ML algorithms creating models for further predictions through symptoms.
          </p>
        </div>
        <div className="third">
          <div className="left">
            <div className="heading-third">
              <h1 className="h-primary">BROWSE OUR DATASET TO GET TO KNOW YOUR SYMPTOMS</h1>
            </div>
          </div>
          <div className="right">
            <div className="car-grid">
              <img src="https://www.fsm.ac.in/blog/wp-content/uploads/2021/12/Blog-7-Image-1-Feature-Image.jpg" alt="" id="img-1" className="imgs" />
              <img src="https://www.ptc.com/-/media/Images/blog/post/thingworx-blog/big-data-analytics-healthcare-900x450.jpeg" alt="" id="img-2" className="imgs" />
              <img src="https://img.freepik.com/premium-photo/parkinson-s-disease-text-paper-white-background_77684-76058.jpg" alt="" id="img-3" className="imgs" />
              <img src="https://www.hospitalmanagementasia.com/wp-content/uploads/2021/10/Big-data-1.png" alt="" id="img-4" className="imgs" />
              <img src="https://images.squarespace-cdn.com/content/v1/5daddb33ee92bf44231c2fef/e163d977-3fe5-42da-b959-5b5319027458/machine-learning-in-healthcare.jpg" alt="" id="img-5" className="imgs" />
              <img src="https://d14b9ctw0m6fid.cloudfront.net/ugblog/wp-content/uploads/2021/03/1986.png" alt="" id="img-6" className="imgs" />
            </div>
            <div className="box">
              <i className="fa-solid fa-box-open"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
