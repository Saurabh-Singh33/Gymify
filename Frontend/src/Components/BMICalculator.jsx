import React from 'react'
import { useState } from 'react' 
import { toast } from 'react-toastify';
 


const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState("");
   

  const calculateBMI = (e) => {
    e.preventDefault();


    if (!height || !weight|| !gender) {
      toast.warning("Please enter valid height and weight");
      return;
    }

      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        toast.warning("You are underweight , we should focus on gaining weight  ");
      }else if(bmiValue >= 18.5 && bmiValue < 24.9){
        toast.success("You have a normal weight , keep going in same way  ");
      }
      else if(bmiValue >= 25 && bmiValue < 29.9){
        toast.warning("You are overweight , You should focus on losing weight  ");
      }
      else{
        toast.error("You are obese , consult a doctor for better guidance  ");
      }
  };
 return (
  <section className='bmi'>
    <h1>BMI Calculator</h1>
    <div className="container">
      <div className="wrapper">
        <form onSubmit={calculateBMI}>
          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button type="Submit">Calculate BMI</button>
        </form>
      </div>

      <div className="wrapper">
        <video src="/OIG1.mp4" autoPlay loop muted playsInline alt="BMI Illustration" />
      </div>
    </div>
  </section>
);
};
export default BMICalculator