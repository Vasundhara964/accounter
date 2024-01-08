/*import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const PaymentsPage = () => {
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePayment = () => {
    // Simulate a successful payment
    setPaymentComplete(true);
  };

  return (
    <div className="payments-page">
      <h1>Payments Page</h1>
      {paymentComplete ? (
        <p>Payment successfully completed! Thank you for your purchase.</p>
      ) : (
        <div>
          <p>Please scan the QR code to complete your payment:</p>
          <div className="qrcode-container">
            <QRCode value="GIRLS:
                          TOP:{7.0 mtrs}
                          BOTTOM:{6 mtrs}
                          CHUNNI:{7.50 mtrs}" size={200} />
          </div>
          <button onClick={handlePayment}>Mark as Paid</button>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <div>
    <h1>My Website</h1>
    <PaymentsPage />
  </div>
);

export default App;*/



import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { FaQrcode, FaGooglePay, FaCreditCard } from 'react-icons/fa';
import {SiPhonepe} from 'react-icons/si'
import { Card, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();


  const paymentOptions = [
    { id: 1, name: 'QR Code', icon: <FaQrcode /> },
    { id: 2, name: 'Phone Pe', icon: <SiPhonepe /> },
    { id: 3, name: 'Google Pay', icon: <FaGooglePay /> },
    { id: 4, name: 'Card', icon: <FaCreditCard /> },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderPaymentMethod = () => {
    switch (selectedOption) {
      case 'QR Code':
       // return <QRCode value="paymentInfoHere" />;
       navigate('/qr');
       break;
      case 'Phone Pe':
        //return <div>Phone Pe Payment Form</div>;
        navigate('/phonepe');
        break;
      case 'Google Pay':
        //return <div>Google Pay Payment Form</div>;
        navigate('/googlepay');
        break;
      case 'Card':
        //return <div>Net Banking Payment Form</div>;
        navigate('/card');
      default:
        return null;
    }
  };

  return (
    <div style={{height:900}}>
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:5}} variant='outlined'>
    <div style={{paddingTop:30}}>
      <h1 style={{color:'darkorchid',paddingLeft:50,paddingBottom:0}}>Payments Page</h1>
      <div style={{padding:60}}>
        <Grid style={{backgroundColor:'lightgreen',height:320}}>
        <h3 style={{paddingTop:30,paddingLeft:100}}>Select Payment Method:</h3>
        <ul style={{paddingTop:10}}>
          <div style={{paddingLeft:400}}>
          {paymentOptions.map((option) => (
            <li key={option.id} style={{paddingTop:10}}>
             
              <button onClick={() => handleOptionSelect(option.name)} style={{color:'blue',paddingLeft:10}}>
                {option.icon} {option.name}
              </button>
            </li>
          ))}
          </div>
        </ul>
        </Grid>
      </div>
      {selectedOption && (
        <div>
          <h2>Scan the QR code:</h2>
          {renderPaymentMethod()}
        </div>
      )}
    </div>
    </Card>
    </div>
  );
};

export default PaymentPage;
