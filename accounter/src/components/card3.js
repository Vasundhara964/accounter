import { Icon } from '@mui/material';
import React ,{useState} from 'react';
import { Card } from 'shards-react';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const card3 = () => {
  //const mp3DataUrl = 'data:audio/mpeg;base64,YourBase64EncodedAudioData';
  const [displayText, setDisplayText] = useState('');
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process your form data or perform any required actions

    // Navigate to AnotherComponent
    navigate('/payment'); // Make sure you have a route set up for AnotherComponent
  };
  return ( 
    <div style={{padding:20,height:400}}>
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20,height:200}} variant='outlined'>
      <div>
    <Icon style={{width:900,height:60}}><CheckCircleSharpIcon/></Icon>
    </div>
    <div>
      <h2 style={{color:'blue',paddingTop:5,paddingLeft:280}}>Payment Successful</h2>
    </div>
    </Card>
      <div style={{paddingLeft:450,paddingTop:20}}>
        <button onClick={handleFormSubmit}type="submit" style={{color:'blue'}}>Continue</button>
        </div>
      </div>
  );
};

export default card3;


