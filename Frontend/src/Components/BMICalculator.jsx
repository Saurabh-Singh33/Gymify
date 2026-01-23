import React from 'react'
import { useState } from 'react' 
 


const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState("");
  {/*const [message, setMessage] = useState("");}*/}

  const calculateBMI = (e) => {
    e.preventDefault();


    if (!height || !weight|| !gender) {
      toast.error("Please enter valid height and weight");
      return;
    }

      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      
      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    }
  };

  return (
     <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <p>Your BMI is: {bmi}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  )


export default BMICalculator