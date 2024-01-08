import React, { useState } from 'react';
import { Card } from 'shards-react';
//import './App.css'; // Add your own styles
import { useNavigate } from 'react-router-dom';

const googlepay = () => {
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
    navigate('/googlepay2'); // Make sure you have a route set up for AnotherComponent
  };


  return (
    <div style={{padding:50,height:550,backgroundColor:"beige"}}>
    <h1 style={{color:'green'}}>Welcome to the Transaction through GPay</h1>
    <div style={{paddingTop:50,padding:30}}>
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20,height:300}} variant='outlined'>
    <div className="form-container">
      <h3>Fill the Approprite Details Below</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group" style={{paddingLeft:350}}> 
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter upi id"
            required
          />
        </div>
        <div className="input-group" style={{paddingLeft:350,paddingTop:10}}>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div style={{paddingLeft:410,paddingTop:20}}>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </Card>
    </div>
    </div>
  );
};

export default googlepay;


/*import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

const FormComponent = () => {
  const history = useHistory();
  const [formData, setFormData] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process your form data or perform any required actions

    // Navigate to AnotherComponent
    history.push('/another'); // Make sure you have a route set up for AnotherComponent
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter something"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;*/

