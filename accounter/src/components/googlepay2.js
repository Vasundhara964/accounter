import React, { useState } from 'react';
import { Card } from 'shards-react';
import { useNavigate } from 'react-router-dom';
const googlepay2= () => {
    const [formData, setFormData] = useState({
        amount: '',
        pin: '',
    
      });
  const [displayText, setDisplayText] = useState('');
  const navigate = useNavigate();

  /*const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process your form data or perform any required actions

    // Set the text to be displayed
   // setDisplayText(`Payment Successfull ${formData}`);
   //setDisplayText("payment sucessfull")
  };*/
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process your form data or perform any required actions

    // Navigate to AnotherComponent
    navigate('/googlepay3'); // Make sure you have a route set up for AnotherComponent
  };

  return (
    <div style={{padding:50,height:400}}>
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20,height:300}} variant='outlined'>
    <div>
    <h1 style={{color:'green'}}>Confirm Transaction Page</h1>
    <form onSubmit={handleFormSubmit}>
        <div style={{paddingLeft:350,paddingTop:10}}>
        <input
          type="number"
          placeholder="Enter Amount"
          value={formData.amount}
          required
          onChange={(e) => setFormData(e.target.value)}
        />
        </div>
        <div style={{paddingTop:10,paddingLeft:350}}>
        <input
          type="password"
          placeholder="Enter pin"
          value={formData.pin}
          required
          onChange={(e) => setFormData(e.target.value)}
        />
        </div>
        <div style={{paddingLeft:410,paddingTop:20}}>
        <button type="submit" style={{color:'green'}}>Confirm</button>
        </div>
      </form>
    </div>
    </Card>
    </div>
  );
};

export default googlepay2;
