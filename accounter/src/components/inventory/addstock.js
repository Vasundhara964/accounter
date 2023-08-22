import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
import InventoryData from '../services/inventryData';
import { useNavigate,useParams } from 'react-router-dom';
function FormComponent() {
  const navigate =useNavigate()
 // const billsData= InventoryData.getBillsData()
//const billId=billsData.length+1
  const [formData, setFormData] = useState({id:'',
  name:'',
  vname:'',
  quantity:'',
  status:'',
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
      const data = await InventoryData.updateBill(formData)
    }else{
      const data = await InventoryData.addBill(formData)
    }
 
    navigate('/inventory')
  };

  useEffect(()=>{
    const billData= InventoryData.getBillData(id)
    if(billData){
     const data={
      id:billData.id,
      name:billData.name,
      vname:billData.vname,
      quantity:billData.quantity,
      status:billData.status,
     }
     setFormData(data)
    }
  },[])

  return (
    <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,margin:20,height:500}}>
    <CardHeader
        title="STOCK DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'lightblue',boxShadow:3,style:{padding:10,height:400}}}>
      <div style={{alignItems:'center'}}>
        <Grid container style={{padding:50,height:300}}>
    <div style={{padding:10,alignContent:'center',paddingRight:300,paddingLeft:300}}>
        <label htmlFor="id"style={{alignItems:'center'}}>ID:<span style={{color:'red'}}> *</span></label>
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
      <div style={{padding:10,paddingLeft:220,paddingRight:200}}>
        <label htmlFor="name">Product Name:<span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingLeft:225,paddingRight:200}}>
        <label htmlFor="vname">Vendor Name:<span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="vname"
          name="vname"
          value={formData.vname}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingLeft:260,paddingRight:200}}>
        <label htmlFor="quantity">Quantity:<span style={{color:'red'}}> *</span></label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingLeft:265,paddingRight:200}}>
        <label htmlFor="status">Status:<span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="status"
          name="status"
          style={{margin:10}}
          value={formData.status}
          required
          onChange={handleInputChange}
        />
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

export default FormComponent;

