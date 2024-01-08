import { Card } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [resetLinkSent, setResetLinkSent] = useState(false);

  const handleSendResetLink = (e) => {
    e.preventDefault();
    // Simulate sending a reset link
    // For demonstration purposes, just set the resetLinkSent state
    setResetLinkSent(true);
  };

  return (
    <div style={{padding:0}}>
    <Card sx={{m:2,p:10,bgcolor:'#d3bcc0',color:'black'} } style={{padding:20}} variant='outlined'>
    <div style={{paddingLeft:500}}>
      <h2 style={{color:'red'}}>Reset Password</h2>
      {!resetLinkSent ? (
        <form onSubmit={handleSendResetLink}>
          <label style={{paddingRight:10}}>Email:</label>
          <input
            type="email"
            value={email}
            placeholder='enter email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div style={{paddingLeft:50,paddingTop:10}}>
          <button type="submit">Send Reset Link</button>
          </div>
        </form>
      ) : (
        <div style={{paddingLeft:0,textAlign:'left'}}>
        <p style={{textAlign:'left'}}>Reset link sent to {email}.<br/>Check your email inbox.</p>
        </div>
      )}
      <div style={{paddingTop:10,paddingLeft:50}}>
      <Link to="/">Go back to Login</Link>
      </div>
    </div>
    </Card>
    </div>
  );
}

export default ForgotPassword;

