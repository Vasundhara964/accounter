import React from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'shards-react';

function RandomQRCodeGenerator() {
  const generateRandomText = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 10; // You can adjust the length of the random text
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process your form data or perform any required actions

    // Navigate to AnotherComponent
    navigate('/payment'); // Make sure you have a route set up for AnotherComponent
  };

  const randomText = generateRandomText();

  return (
    <div style={{padding:20,height:400}}>
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20,height:300}} variant='outlined'>
    <div>
      <h2>Scan the QR Code:</h2><br/>
      <div style={{paddingLeft:400}}>
      <QRCode value={randomText} />
      </div>
    </div>
    </Card>
    <div style={{paddingLeft:450,paddingTop:20}}>
    <button onClick={handleFormSubmit}type="submit" style={{color:'red'}}>Continue</button>
    </div>
    </div>
  );
}

export default RandomQRCodeGenerator;
