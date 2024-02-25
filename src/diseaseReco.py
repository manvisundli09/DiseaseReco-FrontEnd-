import numpy as np
import pandas as pd
from sklearn import svm

import pickle

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route('/diabetes_values/<Pregnancies>,<Glucose>,<BloodPressure>,<SkinThickness>,<Insulin>,<BMI>,<DiabetesPedigreeFunction>,<Age>')
def dia_pred(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age):
    
    diabetes_dataset = pd.read_csv('diabetes.csv')
    X = diabetes_dataset.drop(columns = 'Outcome', axis=1)
    Y = diabetes_dataset['Outcome']

    loaded_model = pickle.load(open('diabetes_model.sav', 'rb'))
   
    input_data = [Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]
    
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the array as we are predicting for one instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    prediction = loaded_model.predict(input_data_reshaped)
    print(prediction)

    if (prediction[0]== 0):
      return 'The Person does not have diabetes'
    else:
      return 'The Person has diabetes'
  
@app.route('/heart_values/<age>,<sex>,<cp>,<trestbps>,<chol>,<fbs>,<restecg>,<thalach>,<exang>,<oldpeak>,<slope>,<ca>,<thal>')
def heart_pred(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal):
   
    heart_dataset = pd.read_csv("heart.csv")
    X = heart_dataset.drop(columns='target', axis=1)
    Y = heart_dataset['target']    
    
    loaded_model = pickle.load(open('heart_disease_model.sav', 'rb'))
    input_data = (age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal)

    # change the input data to a numpy array
    input_data_as_numpy_array= np.asarray(input_data)

    # reshape the numpy array as we are predicting for only on instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    prediction = loaded_model.predict(input_data_reshaped)
    print(prediction)

    if (prediction[0]== 0):
      return 'The Person does not have a Heart Disease'
    else:
      return 'The Person has Heart Disease'
    # has 58,1,1,120,284,0,0,160,0,1.8,1,0,2
    # does not 62,0,0,140,268,0,0,160,0,3.6,0,2,2

@app.route('/parkinsons_values/<MDVPFoHz>,<MDVPFhiHz>,<MDVPFloHz>,<MDVPJitter>,<MDVPJitterAbs>,<MDVPRAP>,<MDVPPPQ>,<JitterDDP>,<MDVPShimmer>,<MDVPShimmerdB>,<ShimmerAPQ3>,<ShimmerAPQ5>,<MDVPAPQ>,<ShimmerDDA>,<NHR>,<HNR>,<RPDE>,<DFA>,<spread1>,<spread2>,<D2>,<PPE>')
def parkinson_pred(MDVPFoHz, MDVPFhiHz, MDVPFloHz, MDVPJitter, MDVPJitterAbs, MDVPRAP, MDVPPPQ, JitterDDP, MDVPShimmer, MDVPShimmerdB, ShimmerAPQ3, ShimmerAPQ5, MDVPAPQ, ShimmerDDA, NHR, HNR, RPDE, DFA, spread1, spread2, D2, PPE):
    
    input_data = (MDVPFoHz, MDVPFhiHz, MDVPFloHz, MDVPJitter, MDVPJitterAbs, MDVPRAP, MDVPPPQ, JitterDDP, MDVPShimmer, MDVPShimmerdB, ShimmerAPQ3, ShimmerAPQ5, MDVPAPQ, ShimmerDDA, NHR, HNR, RPDE, DFA, spread1, spread2, D2, PPE)
    parkinsons_data = pd.read_csv('parkinsons.csv')
    X = parkinsons_data.drop(columns=['name','status'], axis=1)
    Y = parkinsons_data['status']
    
    loaded_model = pickle.load(open('parkinsons_model.sav', 'rb'))
    # changing input data to a numpy array
    input_data_as_numpy_array = np.asarray(input_data)
    
    # reshape the numpy array
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)
    
    prediction = loaded_model.predict(input_data_reshaped)
    print(prediction)
    
    
    if (prediction[0] == 0):
      return "The Person does not have Parkinsons Disease"
    
    else:
      return "The Person has Parkinsons"
    # 197.07600,206.89600,192.05500,0.00289,0.00001,0.00166,0.00168,0.00498,0.01098,0.09700,0.00563,0.00680,0.00802,0.01689,0.00339,26.77500,0.422229,0.741367,-7.348300,0.177551,1.743867,0.085569
if __name__ == '__main__':
    app.run(host= 'localhost', port=8080, debug=True)


