import React, { useState } from 'react';
import { Card } from 'shards-react';
//import './App.css'; // Add your own styles
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';

const card = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',

  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };*/
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process your form data or perform any required actions

    // Navigate to AnotherComponent
    navigate('/card2'); // Make sure you have a route set up for AnotherComponent
  };
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div style={{padding:50,height:550,backgroundColor:"beige"}}>
    <h1 style={{color:'blue'}}>Welcome to the Transaction through Card</h1>
    <div style={{paddingTop:50,padding:30}}>
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20,height:400}} variant='outlined'>
    <div className="form-container">
      <h3>Fill the Approprite Details Below</h3>
      <form onSubmit={handleFormSubmit}>
      <label style={{paddingLeft:330,color:"red"}}>
          <input
            type="radio"
            value="CreditCard"
            checked={selectedOption === 'CreditCard'}
            onChange={handleOptionChange}
          />
          CreditCard<FaCreditCard/>
        </label>
        <label style={{paddingLeft:20,color:"red"}}>
          <input
            type="radio"
            value="debitCard"
            checked={selectedOption === 'debitCard'}
            onChange={handleOptionChange}
          />
          DebitCard<FaCreditCard/>
        </label>
        <br />
        <div className="input-group" style={{paddingLeft:350}}> 
          <input
            type="number"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter CardNumber"
            required
          />
        </div>
        <div className="input-group" style={{paddingLeft:350,paddingTop:10}}>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter CountryName"
            required
          />
        </div>
        <div style={{paddingLeft:410,paddingTop:20}}>
        <button type="submit" style={{color:"red"}}>Login</button>
        </div>
      </form>
    </div>
    </Card>
    </div>
    </div>
  );
};

export default card;
