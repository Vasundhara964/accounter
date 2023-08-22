/*import React from 'react'

export default function AddVendor() {
  return (
    <div>add vendor form</div>
  )
}*/


import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
//import InventoryData from '../services/inventryData';
import vendordata from '../services/vendordata';
import { useNavigate,useParams } from 'react-router-dom';
function FormComponent() {
  const navigate =useNavigate()
 // const billsData= Databill.getBillsData()
//const billId=billsData.length+1
  const [formDat, setFormDat] = useState({id:'',
  name:'',
  cname:'',
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
      const data = await vendordata.updateBill(formDat)
    }else{
      const data = await vendordata.addBill(formDat)
    }
 
    navigate('/vendors')
  };

  useEffect(()=>{
    const billData= vendordata.getBillData(id)
    if(billData){
     const data={
      id:billData.id,
      name:billData.name,
      cname:billData.cname,
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
       <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:50,height:900,width:1000}}>
    <CardHeader
        title=" VENDOR DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'lightblue',boxShadow:3,style:{padding:50,height:500,width:1000}}}>
      <div style={{alignItems:'center'}}>
        <Grid container style={{padding:50,height:650,width:1000,display:'flex'}}>
    <div style={{padding:10,alignContent:'center'}}>
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
        <div style={{padding:2}}>
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
      <div style={{padding:5}}>
        <label htmlFor="name"><strong>Vendor Name:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formDat.name}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10,paddingRight:200,boxSizing:900,flexDirection: 'column',height:70,margin:20}}>
        <label htmlFor="cname" ><strong>Company Name:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="cname"
          name="cname"
          value={formDat.cname}
          required
          onChange={handleInputChange}
          style={{width:500}}
        />
      </div>
      <div style={{padding:2,paddingLeft:35}}>
        <label htmlFor="prod" style={{float:'left'}}><strong>product offered:</strong><span style={{color:'red'}}> *</span></label>
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
      <div style={{padding:10}}>
        <label htmlFor="price"><strong>Price:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="number"
          id="price"
          name="price"
          value={formDat.price}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingLeft:83,paddingRight:200,height:70}}>
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
      <button type="submit" style={{display:'flex',margin:50}} ><strong>Submit</strong></button>
      </div>
      </Grid>
      </div>
      </Box>
    </form>
    </Card>
  );
}

export default FormComponent;
