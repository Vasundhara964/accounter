import { Icon } from '@mui/material';
import React ,{useState} from 'react';
import { Card } from 'shards-react';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const googlepay3 = () => {
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
      <h2 style={{color:'green',paddingTop:5,paddingLeft:280}}>Payment Successful</h2>
    </div>
    </Card>
      <div style={{paddingLeft:450,paddingTop:20}}>
        <button onClick={handleFormSubmit}type="submit" style={{color:'green'}}>Continue</button>
        </div>
      </div>
  );
};

export default googlepay3;


/* React, { Component } from 'react';

class phonepe3 extends Component {
  componentDidMount() {
    // Play the audio when the component is mounted
    this.audioElement.play();
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Audio Page</h1>
        <audio
          ref={(audio) => (this.audioElement = audio)}
          controls
          autoPlay
        >
          <source
            src="phonepeaudio.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default phonepe3;*/

/*import React, { Component } from 'react';
import "./phonepeaudio.mp3";

class phonepe3 extends Component {
  componentDidMount() {
    // Play the audio when the component is mounted
    this.audioElement.play();
  }

  render() {
    return (
      <div className="audio-page">
        <h1>Welcome to the AutoPlay Audio Page</h1>
        <audio
          ref={(audio) => (this.audioElement = audio)}
          autoPlay
        >
          <source
           // src="https://mobcup.net/ringtone/phone-pay-message-tone-60bg7ir7?utm_source=share&utm_medium=web&utm_name=list"
           src="./phonepeaudio.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default phonepe3;*/



