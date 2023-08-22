/*import React from 'react'
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
export default function Bills() {
const navigate=useNavigate()
    const billsData=[
        {id:'1',
        name:'a',
        Date:'15-09-2023',
        bill_No:'cvg01'
    },
    {id:'2',
    name:'a',
    Date:'15-09-2023',
    bill_No:'cvg01'
},
{id:'3',
name:'a',
Date:'15-09-2023',
bill_No:'cvg01'
},
{id:'4',
name:'a',
Date:'15-09-2023',
bill_No:'cvg01'
},
    ]


const addBill=()=>{
    navigate('/addBill')
}

  return (
   <Card sx={{m:1,p:3,bgcolor:'beige',color:'green'} } style={{padding:20}}>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addBill} style={{color:'white'}}>Add Bill</Button>
        
        }
        title="Bills"
/>
 
    <CardContent>
        <div style={{ height: 70, width: '100%' }}>
<Grid container style={{padding:10}}>
   <Grid item sm={1}>S.No </Grid> 
   <Grid item sm={3}>Name</Grid> 
   <Grid item sm={2}>Bill No</Grid> 
   <Grid item sm={3}>Date</Grid> 
   <Grid item sm={2}>Actions</Grid> 
</Grid>
<Divider/>
</div>
{billsData.map((bill,i)=>(
    <Grid container>
   <Grid item sm={1}><Typography>{bill.id}</Typography></Grid> 
   <Grid item sm={3}><Typography>{bill.name}</Typography></Grid> 
   <Grid item sm={2}>{bill.bill_No}</Grid> 
   <Grid item sm={3}>{bill.Date}</Grid> 
   <Grid item sm={2}>
    <IconButton>
    <EditIcon/>
    </IconButton>
    <IconButton style={{padding:20}}><DeleteIcon/></IconButton>
    </Grid> 
</Grid>

))}

    </CardContent>
   </Card>
  )
}*/
import React, { useState } from 'react'
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider,Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
//import InventoryData, { InventryData } from '../services/inventryData';
import Databill,{databill} from '../services/dataofbill';
import "./billstyle.css";

export default function Bills() {
const navigate=useNavigate()
  const inventoryData= Databill .getBillsData()
  const [billsData,setBillsData]=useState(inventoryData) 
const addstock=()=>{
    navigate('/addbill')
}

const onDelete=async(id)=>{
    debugger
const data =  await Databill.deleteBill(id)
let billdata=[...billsData]
for(let i=0;i<billdata.length;i++){
    if(billdata[i].id==id){
        billdata.splice(i,1)
    }
}
setBillsData(billdata)
}

const onEdit=(id)=>{
navigate(`/${id}/editBill`)
}

/* return (
   <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>NEW BILL</Button>
        
        }
        title="BILLS"
/>
 <Box sx={{bgcolor:'lightblue',boxShadow:3}}>
    <CardContent>
        <div style={{ height: 70, width: '100%' }}>
<Grid container style={{padding:10}}>
   <Grid item sm={3}>ID</Grid> 
   <Grid item sm={3}>Customer Name</Grid> 
   <Grid item sm={3}>bill_no</Grid> 
   <Grid item sm={2} >date</Grid> 
   <Grid item sm={2}>Address</Grid>
   <Grid item sm={2}>Particulars</Grid> 
   <Grid item sm={2} >Rate</Grid> 
   <Grid item sm={2}>TAX</Grid> 
   <Grid item sm={2}>Total</Grid> 
   <Grid item sm={2}>Actions</Grid> 
   
</Grid>
<Divider/>
</div>
{billsData.map((bill,i)=>(
    <Grid container>
   <Grid item sm={3}><Typography>{bill.id}</Typography></Grid>
   <Grid item sm={3}><Typography>{bill.name}</Typography></Grid> 
   <Grid item sm={2}>{bill.date}</Grid> 
   <Grid item sm={2}>{bill.address}</Grid> 
   <Grid item sm={2}>{bill.particular}</Grid> 
   <Grid item sm={2}>{bill.rate}</Grid> 
   <Grid item sm={2}>{bill.tax}</Grid> 
   <Grid item sm={2}>{bill.total}</Grid> 
   <Grid item sm={3}>{bill.bill_No}</Grid> 
   <Grid item sm={2}>
    <IconButton onClick={()=>onEdit(bill.id)}>
        <EditIcon/>
        </IconButton>
<IconButton style={{padding:10}} onClick={()=>onDelete(bill.id)}><DeleteIcon/></IconButton>
    </Grid>
</Grid>

))}

    </CardContent>
    </Box>
   </Card>
  )*/
  return (
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>NEW BILL</Button>
        
        }
        title="BILLS"
/>
    <div className='design'>
    <table style={{bgcolor:'red'}}>
    <thead>
    <tr>
    <th>ID</th>
    <th>Customer Name</th>
    <th>Bill_no</th>
    <th>Date</th>
    <th>Address</th>
    <th>Particulars</th>
    <th>Rate</th>
    <th>Tax(in %)</th>
    <th>Total(in Rs.)</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody style={{bgcolor:'red'}}>
    {billsData.map((bill,i) => (
        <tr key={bill.id}>
            <td>{bill.id}</td>
    <td>{bill.name}</td>
    <td>{bill.bill_No}</td>
    <td>{bill.date}</td>
    <td>{bill.address}</td>
    <td>{bill.particular}</td>
    <td>{bill.rate}</td>
    <td>{bill.tax}</td>
    <td>{bill.total}</td>
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




