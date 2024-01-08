/*import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
import Invoicedata from '../services/dataofinvoice';
import { useNavigate,useParams } from 'react-router-dom';
function FormComponent() {
  const navigate =useNavigate()
  const [formDat, setFormDat] = useState({id:'',
  name:'',
  date:'',
  bill_No:'',
  });
  const {id}=useParams()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDat({
      ...formDat,
      [name]: value,
    });
  };
  const handleSubmit =async (event) => {
    event.preventDefault();
    if(id){
      const data = await Invoicedata.updateinvoice(formDat)
    }else{
      const data = await Invoicedata.addinvoice(formDat)
    }
 
    navigate('/invoices')
  };
  useEffect(()=>{
    const invoiceData= Invoicedata.getinvoiceData(id)
    if(invoiceData){
     const data={
      id:invoiceData.id,
      name:invoiceData.name,
      date:invoiceData.date,
      bill_No:invoiceData.bill_No
     }
     setFormDat(data)
    }
  },[])
  return (
    <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,margin:20}}>
    <CardHeader
        title="ADD NEW INVOICE DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'lightblue',boxShadow:3,style:{padding:10}}}>
      <div style={{alignItems:'center'}}>
        <Grid container style={{padding:50,height:300}}>
    <div style={{padding:10,alignContent:'center'}}>
        <label htmlFor="id"style={{alignItems:'center'}}>ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={formDat.id}
          disabled
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10}}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formDat.name}
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,height:70}}>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={formDat.date}
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,height:70}}>
        <label htmlFor="bill_No">bill_No:</label>
        <input
          type="text"
          id="bill_No"
          name="bill_No"
          value={formDat.bill_No}
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,height:70,float:'right'}}>
        <label htmlFor="purchaseprice">Purchase price:</label>
        <input
          type="text"
          id="purchaseprice"
          name="purchaseprice"
          style={{margin:10}}
          value={formDat.purchaseprice}
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,height:70}}>
        <label htmlFor="salesprice" style={{float:'left'}}>Sales price:</label>
        <input
          type="text"
          id="salesprice"
          name="salesprice"
          style={{margin:10}}
          value={formDat.salesprice}
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10}}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formDat.email}
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,height:70}}>
        <label htmlFor="Tax">Tax:</label>
        <select
          id="Tax"
          name="Tax"
          value={formDat.Tax}
          onChange={handleInputChange}
        >
          <option value="GST(10)">GST(10)</option>
          <option value="VAT(20%)">VAT(20%)</option>
        </select>
      </div>
      <div style={{paddingLeft:350}}>
      <button type="submit" style={{display:'flex',margin:50}} >Submit</button>
      </div>
      </Grid>
      </div>
      </Box>
    </form>
    </Card>
  );
}

export default FormComponent;*/

import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
import InvoiceData from '../services/dataofinvoice';
import { useNavigate,useParams } from 'react-router-dom';
function FormComponent() {
  const navigate =useNavigate()
 // const billsData= InventoryData.getBillsData()
//const billId=billsData.length+1
  const [formData, setFormData] = useState({id:'',
  name:'',
  cname:'',
 date :'',
 phone:'',
 address:'',
 caddress:'',
 email:'',
 prodeet:'',
 quantity:'',
 price:'',
 total:'',
  });


  const {id}=useParams()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    if(id){
      const data = await InvoiceData.updateBill(formData)
    }else{
      const data = await InvoiceData.addBill(formData)
    }
 
    navigate('/invoices')
  };


 

  useEffect(()=>{
    const billData= InvoiceData.getBillData(id)
    if(billData){
     const data={
      id:billData.id,
      name:billData.name,
      cname:billData.cname,
      date:billData.date,
      phone:billData.phone,
      address:billData.address,
      caddress:billData.caddress,
      email:billData.email,
      prodeet:billData.prodeet,
      quantity:billData.quantity,
      price:billData.price,
      total:billData.total
     }
     setFormData(data)
    }
  },[])
formData.total=formData.quantity*formData.price;

  return (
    <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,height:900,margin:20}}>
    <CardHeader
        title="INVOICE DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'lightblue',color:'black',boxShadow:3,style:{padding:10,height:700}}}>
      <div style={{alignItems:'center'}}>
        <Grid container style={{padding:50,height:700}}>
    <div style={{padding:10,alignContent:'center',paddingRight:20,paddingLeft:200}}>
        <label htmlFor="id"style={{alignItems:'center'}}><strong>INVOICE ID:</strong><span style={{color:"red"}}>*</span></label>
        <input
          type="number"
          id="id"
          name="id"
          value={formData.id}
          //disabled
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10,paddingRight:100}}>
        <label htmlFor="date"><strong>DATE:</strong><span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.date}
          required
          onChange={handleInputChange}
        />
      </div>
      <span style={{color:'darkviolet'}}><strong>BILLING INFORMATION</strong></span>
          <span style={{paddingLeft:500,color:'darkviolet'}}><strong>SHIPPING INFORMATION</strong></span>
      <div style={{padding:15,paddingRight:300}}>
        <label htmlFor="name">Company Name:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:12}}>
        <label htmlFor="cname">Customer Name:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="cname"
          name="cname"
          value={formData.cname}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingRight:290}}>
        <label htmlFor="address">Company Address:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2}}>
        <label htmlFor="caddress">Customer Address:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="caddress"
          name="caddress"
          value={formData.caddress}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingRight:600,paddingLeft:60}}>
        <label htmlFor="phone">PhoneNo:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingRight:400,paddingLeft:75}}>
        <label htmlFor="email">Email:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="email"
          name="email"
          style={{margin:10}}
          value={formData.email}
          required
          onChange={handleInputChange}
        />
      </div>
      <div>   <hr style={{color:'darkblack',paddingLeft:0,width:900,height:10}}/></div>
      <div style={{padding:2,paddingLeft:60}}>
        <label htmlFor="prodeet">Product details:<span style={{color:"red"}}>*</span></label>
        <input
          type="text"
          id="prodeet"
          name="prodeet"
          style={{margin:10}}
          value={formData.prodeet}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10}}>
        <label htmlFor="quantity">Quantity:<span style={{color:"red"}}>*</span></label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10}}>
        <label htmlFor="price">Price:<span style={{color:"red"}}>*</span></label>
        <input
        type="number"
          id="price"
          name="price"
          value={formData.price}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{paddingLeft:350,paddingTop:40}}>
          <label htmlFor="total">Total:</label>
          <input type="text" id="total" value={formData.total} readOnly />
        </div>
      <div style={{paddingLeft:390}}>
      <button type="submit" style={{display:'flex',margin:50,color:'red'}} > Submit </button>
      </div>
      </Grid>
      </div>
      </Box>
    </form>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Via ACCOUNTER </p>
      </div>
    </Card>
  );
}

export default FormComponent;

