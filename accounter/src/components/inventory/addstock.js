import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider, Box} from '@mui/material'
import InventoryData from '../services/inventryData';
import { useNavigate,useParams } from 'react-router-dom';
import { red } from '@mui/material/colors';
function FormComponent() {
  const navigate =useNavigate()
 // const billsData= InventoryData.getBillsData()
//const billId=billsData.length+1
  const [formData, setFormData] = useState({id:'',
  name:'',
  vname:'',
  quantity:'',
  status:'',
  stat:'',
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
      stat:billData.stat,
     }
     setFormData(data)
    }
  },[])
  const [selectedOption, setSelectedOption] = useState('');
  const [tableData, setTableData] = useState([]);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTableData([...tableData, selectedOption]);
    setSelectedOption('');
  };

  



  return (
   /* <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,margin:20,height:500}}>
    <CardHeader
        title="STOCK DETAILS"
/>
    <form onSubmit={handleSubmit}>
    <Box sx={{bgcolor:'lightblue',boxShadow:3,style:{padding:10,height:400}}}>
      <div style={{alignItems:'center'}}>
        <Grid container style={{padding:50,height:300}}>
          <div>
    <div style={{padding:10,paddingLeft:360,paddingRight:0,paddingBottom:10}}>
        <label htmlFor="id"style={{paddingLeft:0,marginRight:80,marginLeft:0}}>ID:<span style={{color:'red'}}> *</span></label>
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
      <div style={{padding:10,paddingLeft:280,paddingRight:200,paddingBottom:10}}>
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
      <div style={{padding:2,paddingLeft:280,paddingRight:200,paddingBottom:10}}>
        <label htmlFor="vname" style={{marginRight:5}}>Vendor Name:<span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          id="vname"
          name="vname"
          value={formData.vname}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingLeft:280,paddingRight:200,paddingBottom:10}}>
        <label htmlFor="quantity" style={{marginRight:0}}>Quantity:<span style={{color:'red'}}> *</span></label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={{padding:2,paddingLeft:280,paddingRight:200}}>
        <label htmlFor="status" style={{marginRight:0}}>Status:<span style={{color:'red'}}> *</span></label>
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
      </div>
      </Grid>
      </div>
      </Box>
    </form>
    </Card>*/
    <div style={{height:1000}}>
    <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20,margin:20,height:750,paddingTop:0}}>
    <CardHeader
        title="STOCK DETAILS"
/>
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
      <Box sx={{bgcolor:'lightblue',boxShadow:3,style:{padding:10,height:400}}}>
        <div style={{padding:80,paddingTop:20,paddingLeft:190,paddingRight:190}}>
        <div className="form-group">
          <label htmlFor="id">ID: <span style={{color:"red"}}>*</span></label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="name">Product Name:<span style={{color:'red'}}> *</span></label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          required
          onChange={handleInputChange}
        />
        </div>
        <div className="form-group">
          <label htmlFor="vname">Vendor Name: <span style={{color:"red"}}>*</span></label>
          <input
            type="text"
            className="form-control"
            id="vname"
            name="vname"
            value={formData.vname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity: <span style={{color:"red"}}>*</span></label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status: <span style={{color:"red"}}>*</span></label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
        </Box>
      </form>
    </div>
    </Card>
    </div>
  );
}

export default FormComponent;

