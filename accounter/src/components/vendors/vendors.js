import React, { useState } from 'react'
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider,Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
//import InventoryData, { InventryData } from '../services/inventryData';
import vendordata from '../services/vendordata';
export default function Bills() {
    const navigate=useNavigate()
      const inventoryData= vendordata .getBillsData()
      const [billsData,setBillsData]=useState(inventoryData) 
    const addstock=()=>{
        navigate('/addvendor')
    }
    
    const onDelete=async(id)=>{
        debugger
    const data =  await vendordata.deleteBill(id)
    let billdata=[...billsData]
    for(let i=0;i<billdata.length;i++){
        if(billdata[i].id==id){
            billdata.splice(i,1)
        }
    }
    setBillsData(billdata)
    }
    
    const onEdit=(id)=>{
    navigate(`/${id}/editvendor`)
    }

  /*return (
   <Card sx={{m:1,p:2}}>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={AddVendor}>Add vendor</Button>
        
        }
        title="Vendors"
/>
 
    <CardContent>
<Grid container>
   <Grid item sm={1}>S.No</Grid> 
   <Grid item sm={3}>Name</Grid> 
   <Grid item sm={2}>Bill No</Grid> 
   <Grid item sm={3}>Date</Grid> 
   <Grid item sm={2}>Actions</Grid> 
</Grid>
{billsData.map((vendor,i)=>(
    <Grid container>
   <Grid item sm={1}><Typography>{vendor.id}</Typography></Grid> 
   <Grid item sm={3}><Typography>{vendor.name}</Typography></Grid> 
   <Grid item sm={2}>{vendor.bill_No}</Grid> 
   <Grid item sm={3}>{vendor.Date}</Grid> 
   <Grid item sm={2}>
    <IconButton>
    <EditIcon/>
    </IconButton>
    </Grid> 
</Grid>
))}

    </CardContent>
   </Card>
  )
}*/


return (
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>ADD VENDOR</Button>
        
        }
        title="VENDORS"
/>
    <div className='design'>
    <table style={{bgcolor:'red'}}>
    <thead>
    <tr>
    <th>ID</th>
    <th>Vendor Name</th>
    <th>Company Name</th>
    <th>Product offered</th>
    <th>Price </th>
    <th>Date</th>
    <th>Address</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody style={{bgcolor:'red'}}>
    {billsData.map((bill,i) => (
        <tr key={bill.id}>
            <td>{bill.id}</td>
    <td>{bill.name}</td>
    <td>{bill.cname}</td>
    <td>{bill.prod}</td>
    <td>{bill.price}</td>
    <td>{bill.date}</td>
    <td>{bill.address}</td>
    <td>
    <IconButton onClick={()=>onEdit(bill.id)}>
        <EditIcon/>
        </IconButton>
<IconButton style={{padding:10}} onClick={()=>onDelete(bill.id)}><DeleteIcon/></IconButton>
    </td>
    </tr>
    ))}
    </tbody>
    </table>
    </div>
    </Card>
    );
   }