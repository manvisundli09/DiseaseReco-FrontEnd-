import numpy as np
import pandas as pd
from sklearn import svm
import pickle
from flask import Flask

app = Flask(__name__)

@app.route('/diabetes_values/<Pregnancies>,<Glucose>,<BloodPressure>,<SkinThickness>,<Insulin>,<BMI>,<DiabetesPedigreeFunction>,<Age>')
def dia_pred(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age):
    diabetes_dataset = pd.read_csv('diabetes.csv')
    X = diabetes_dataset.drop(columns='Outcome', axis=1)
    Y = diabetes_dataset['Outcome']
    loaded_model = pickle.load(open('diabetes_model.sav', 'rb'))
    input_data = [Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    prediction = loaded_model.predict(input_data_reshaped)
    if prediction[0] == 0:
        return 'The Person does not have diabetes'
    else:
        return 'The Person has diabetes'

@app.route('/heart_values/<age>/<sex>/<cp>/<trestbps>/<chol>/<fbs>/<restecg>/<thalach>/<exang>/<oldpeak>/<slope>/<ca>/<thal>')
def heart_pred(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal):
    heart_dataset = pd.read_csv("heart.csv")
    X = heart_dataset.drop(columns='target', axis=1)
    Y = heart_dataset['target']    
    loaded_model = pickle.load(open('heart_disease_model.sav', 'rb'))
    input_data = (age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal)
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    prediction = loaded_model.predict(input_data_reshaped)
    if prediction[0] == 0:
        return 'The Person does not have a Heart Disease'
    else:
        return 'The Person has Heart Disease'

@app.route('/parkinsons_values/<MDVPFoHz>,<MDVPFhiHz>,<MDVPFloHz>,<MDVPJitter>,<MDVPJitterAbs>,<MDVPRAP>,<MDVPPPQ>,<JitterDDP>,<MDVPShimmer>,<MDVPShimmerdB>,<ShimmerAPQ3>,<ShimmerAPQ5>,<MDVPAPQ>,<ShimmerDDA>,<NHR>,<HNR>,<RPDE>,<DFA>,<spread1>,<spread2>,<D2>,<PPE>')
def parkinson_pred(MDVPFoHz, MDVPFhiHz, MDVPFloHz, MDVPJitter, MDVPJitterAbs, MDVPRAP, MDVPPPQ, JitterDDP, MDVPShimmer, MDVPShimmerdB, ShimmerAPQ3, ShimmerAPQ5, MDVPAPQ, ShimmerDDA, NHR, HNR, RPDE, DFA, spread1, spread2, D2, PPE):
    input_data = (MDVPFoHz, MDVPFhiHz, MDVPFloHz, MDVPJitter, MDVPJitterAbs, MDVPRAP, MDVPPPQ, JitterDDP, MDVPShimmer, MDVPShimmerdB, ShimmerAPQ3, ShimmerAPQ5, MDVPAPQ, ShimmerDDA, NHR, HNR, RPDE, DFA, spread1, spread2, D2, PPE)
    parkinsons_data = pd.read_csv('parkinsons.csv')
    X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
    Y = parkinsons_data['status']
    loaded_model = pickle.load(open('parkinsons_model.sav', 'rb'))
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    prediction = loaded_model.predict(input_data_reshaped)
    if prediction[0] == 0:
        return "The Person does not have Parkinsons Disease"
    else:
        return "The Person has Parkinsons"

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
