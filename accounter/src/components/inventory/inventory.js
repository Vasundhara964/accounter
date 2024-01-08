/*import React, { useState } from 'react'
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider,Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import InventoryData, { InventryData } from '../services/inventryData';


export default function Inventory() {
const navigate=useNavigate()
  const inventoryData= InventoryData.getstockData()
  const [stockData,setstockData]=useState(inventoryData) 
const addstocks=()=>{
    navigate('/addstock')
}

const onDelete=async(id)=>{
    debugger
const data =  await InventoryData.deletestocks(id)
let stocksdata=[...stockData]
for(let i=0;i<stocksdata.length;i++){
    if(stocksdata[i].id==id){
        stocksdata.splice(i,1)
    }
}
setstockData(stocksdata)
}

const onEdit=(id)=>{
navigate(`/${id}/editstock`)
}

  return (
   <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstocks} style={{color:'white'}}>Add stock</Button>
        
        }
        title="Inventory Items"
/>
 <Box sx={{bgcolor:'lightblue',boxShadow:3}}>
    <CardContent>
        <div style={{ height: 70, width: '100%' }}>
<Grid container style={{padding:10}}>
   <Grid item sm={1}>ID</Grid> 
   <Grid item sm={3}>name</Grid> 
   <Grid item sm={2}>date</Grid> 
   <Grid item sm={3}>bill_no</Grid> 
   <Grid item sm={2}>Actions</Grid> 
   
</Grid>
<Divider/>
</div>
{stockData.map((stock,i)=>(
    <Grid container>
   <Grid item sm={1}><Typography>{stock.id}</Typography></Grid>
   <Grid item sm={3}><Typography>{stock.name}</Typography></Grid> 
   <Grid item sm={2}>{stock.date}</Grid> 
   <Grid item sm={3}>{stock.bill_No}</Grid> 
   <Grid item sm={2}>
    <IconButton onClick={()=>onEdit(stock.id)}>
        <EditIcon/>
        </IconButton>
<IconButton style={{padding:10}} onClick={()=>onDelete(stock.id)}><DeleteIcon/></IconButton>
    </Grid>
</Grid>

))}

    </CardContent>
    </Box>
   </Card>
  )
}*/
import React, { useState } from 'react'
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider,Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import InventoryData, { InventryData } from '../services/inventryData';
//import Databill ,{databill} from '../services/databill';


export default function Bills() {
const navigate=useNavigate()
  const inventoryData= InventoryData.getBillsData()
  const [billsData,setBillsData]=useState(inventoryData) 
const addstock=()=>{
    navigate('/addstock')
}
const onDelete=async(id)=>{
    debugger
const data =  await InventoryData.deleteBill(id)
let billdata=[...billsData]
for(let i=0;i<billdata.length;i++){
    if(billdata[i].id==id){
        billdata.splice(i,1)
    }
}
setBillsData(billdata)
}

const onEdit=(id)=>{
navigate(`/${id}/editstock`)
}

  /*return (
   <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>Add stock</Button>
        
        }
        title="Inventory Items"
/>
 
 <Box sx={{bgcolor:'lightblue',boxShadow:3}}>
    <CardContent>
        <div style={{ height: 70, width: '100%' }}>
<Grid container style={{padding:10}}>
   <Grid item sm={1}>ID</Grid> 
   <Grid item sm={3}>name</Grid> 
   <Grid item sm={2}>date</Grid> 
   <Grid item sm={3}>bill_no</Grid> 
   <Grid item sm={2}>Actions</Grid> 
   
</Grid>
<Divider/>
</div>
{billsData.map((bill,i)=>(
    <Grid container>
   <Grid item sm={1}><Typography>{bill.id}</Typography></Grid>
   <Grid item sm={3}><Typography>{bill.name}</Typography></Grid> 
   <Grid item sm={2}>{bill.date}</Grid> 
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
  )
}*/

return (
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>ADD STOCK</Button>
        
        }
        title="INVENTORY ITEMS"
/>
    <div className='design'>
    <table style={{bgcolor:'red'}}>
    <thead>
    <tr>
    <th>ID</th>
    <th>Product Name</th>
    <th>Vendor Name</th>
    <th>Quantity</th>
    <th>Status</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody style={{bgcolor:'red'}}>
    {billsData.map((bill,i) => (
        <tr key={bill.id}>
            <td>{bill.id}</td>
    <td>{bill.name}</td>
    <td>{bill.vname}</td>
    <td>{bill.quantity}</td>
    <td>{bill.status}</td>
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