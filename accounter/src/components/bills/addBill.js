/*import React from 'react'

export default function AddBill() {
  return (
    <div>Add bill form</div>
  )
}*/
import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
//import InventoryData from '../services/inventryData';
import Databill from '../services/dataofbill';
import { useNavigate,useParams } from 'react-router-dom';
function FormComponent() {
  const navigate =useNavigate()
 // const billsData= Databill.getBillsData()
//const billId=billsData.length+1
  const [formDat, setFormDat] = useState({id:'',
  name:'',
  bill_No:'',
  date:'',
  address:'',
  particular:'',
  rate:'',
  tax:'',
  total:'',
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
      const data = await Databill.updateBill(formDat)
    }else{
      const data = await Databill.addBill(formDat)
    }
 
    navigate('/bills')
  };

  useEffect(()=>{
    const billData= Databill.getBillData(id)
    if(billData){
     const data={
      id:billData.id,
      name:billData.name,
      bill_No:billData.bill_No,
      date:billData.date,
      address:billData.address,
      particular:billData.particular,
      rate:billData.rate,
      tax:billData.tax,
      total:billData.total
     }
     setFormDat(data)
    }
  },[])

  formDat.total = (formDat.rate * (1 + formDat.tax / 100)).toFixed(2);
 

  return (
    //<Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,margin:20}}>
       <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:50,height:900,width:1000}}>
    <CardHeader
        title=" BILL DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'#ffb3f2',color:'blue',boxShadow:3,style:{padding:50,height:500,width:1000}}}>
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
        <label htmlFor="bill_No"><strong>bill_No:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="bill_No"
          name="bill_No"
          value={formDat.bill_No}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10,paddingRight:200,boxSizing:900,flexDirection: 'column',height:70,margin:20}}>
        <label htmlFor="name" ><strong>Customer Name:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formDat.name}
          required
          onChange={handleInputChange}
          style={{width:500}}
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
      <div style={{padding:2,paddingLeft:35}}>
        <label htmlFor="particular" style={{float:'left'}}><strong>Particulars:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="particular"
          name="particular"
          style={{margin:10}}
          value={formDat.particular}
          required
          onChange={handleInputChange}

        />
      </div>
      <div style={{padding:10}}>
        <label htmlFor="rate"><strong>Rate:</strong><span style={{color:'red'}}> *</span></label>
        <input
          type="number"
          id="rate"
          name="rate"
          value={formDat.rate}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:10}}>
        <label htmlFor="tax"><strong>Tax:</strong>(in %)<span style={{color:'red'}}> *</span></label>
          <input
          type="number"
          id="tax"
          name="tax"
          value={formDat.tax}
          required
          onChange={handleInputChange}
          style={{width:60}}
          />
      </div>
      <div style={{padding:20,paddingLeft:250,height:30}}>
        <label htmlFor="total"><strong>Total(in Rs):</strong><span style={{color:'red'}}> *</span></label>
        <input type="text" id="total" value={formDat.total} readOnly />
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


