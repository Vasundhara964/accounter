/*import React from 'react'

export default function AddVendor() {
  return (
    <div>add vendor form</div>
  )
}*/


import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
//import InventoryData from '../services/inventryData';
import customerdata from '../services/customerdata';
import Customers from './customers';
import { useNavigate,useParams } from 'react-router-dom';
function Addcustomer() {
  const navigate =useNavigate()
 // const billsData= Databill.getBillsData()
//const billId=billsData.length+1
  const [formDat, setFormDat] = useState({id:'',
  name:'',
  prod:'',
  price:'',
  date:'',
  address:'',
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
      const data = await customerdata.updateBill(formDat)
    }else{
      const data = await customerdata.addBill(formDat)
    }
 
    navigate('/customers')
  };

  useEffect(()=>{
    const billData= customerdata.getBillData(id)
    if(billData){
     const data={
      id:billData.id,
      name:billData.name,
      prod:billData.prod,
      price:billData.price,
    date:billData.date,
      address:billData.address,
     }
     setFormDat(data)
    }
  },[])

  return (
    //<Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,margin:20}}>
       <Card sx={{m:1,p:3,bgcolor:'beige',color:'#3c6ca7'} } style={{padding:50,height:900,width:1000}}>
    <CardHeader
        title=" CUSTOMER DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'#ffb3f2',boxShadow:3,style:{padding:50,height:500,width:1000}}}>
      <div style={{alignItems:'center'}}>
        <Grid container style={{padding:50,height:650,width:1000,display:'flex'}}>
    <div style={{padding:10,alignContent:'center',paddingRight:300,paddingLeft:250}}>
        <label htmlFor="id"style={{alignItems:'center'}}><strong>ID : </strong><span style={{color:'red'}}> *</span>
        <input
          type="number"
          id="id"
          name="id"
          value={formDat.id}
         // disabled
         required
          onChange={handleInputChange}
        />
        </label>
        </div>
        <div style={{padding:2,paddingRight:400,paddingLeft:235}}>
        <label htmlFor="date"><strong>Date:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="date"
          name="date"
          value={formDat.date}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:5,paddingRight:300,paddingLeft:155}}>
        <label htmlFor="name"><strong>Customer Name:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formDat.name}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingRight:300,paddingLeft:130}}>
        <label htmlFor="prod" ><strong>Product Purchased:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="prod"
          name="prod"
          style={{margin:10}}
          value={formDat.prod}
          required
          onChange={handleInputChange}

        />
      </div>
      <div style={{padding:2,paddingLeft:210,paddingRight:100,height:70}}>
        <label htmlFor="address"><strong>Address:</strong><span style={{color:'red',font:'bold'}}> *</span></label>
        <input
          type="text"
          id="address"
          name="address"
          value={formDat.address}
          required
          onChange={handleInputChange}
          style={{width:500}}
        />
      </div>
      <div style={{paddingLeft:350}}>
      <button type="submit" style={{display:'flex',color:'red'}} ><strong>Submit</strong></button>
      </div>
      </Grid>
      </div>
      </Box>
    </form>
    </Card>
  );
}

export default Addcustomer;
