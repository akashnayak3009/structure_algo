import React,  {useState} from 'react'
import './Bmi.css'

const Bmi = () => {

    const [weight, setWeight] =useState('');
    const [height, setHeight] =useState('');
    const [bmi, setBmi] =useState(null)

    function handleSubmit(e){
        e.preventDefault();
        const WeightInKgs = parseFloat(weight);
        const HeightInKgs = parseFloat(height);

        if(!isNaN(WeightInKgs) && !isNaN(HeightInKgs) && HeightInKgs>0){
            const calculatedBmi = WeightInKgs / (HeightInKgs * HeightInKgs);
            setBmi(calculatedBmi.toFixed(2));
        }else{
            alert("Please Enter Valid Height And Weight");
        }
    }

    function handleReset(){
        setWeight('');
        setHeight('');
        setBmi(null);
    };
  return (
    <div className='container'>
    <h1 className='title'>BMI Calculator</h1>
    <form>
      <div>
        <label className='label'>Weight (Kgs)</label>
        <input
          type="number"
          placeholder='Enter weight value'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label className='label'>Height (Meters)</label>
        <input
          type="number"
          placeholder='Enter height value'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit} className='calculate-btn'>
        Calculate BMI
      </button>
      <button type="button" onClick={handleReset} className='reset-btn'>
        Reset
      </button>
    </form>
    <div className='result'>
      <h2>Your BMI is:</h2>
      {bmi !== null ? <p className='bmi-value'>{bmi}</p> : <p className='no-bmi'>Calculate your BMI</p>}
    </div>
  </div>
  )
}

export default Bmi