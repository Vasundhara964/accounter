/*import React, { useState } from 'react'
import {Card,CardHeader,CardContent,Typography,Button,Grid,IconButton,Divider,Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Invoicedata from '../services/dataofinvoice';

export default function Invoices()
{
    const navigate=useNavigate()
    const Invoicedat= Invoicedata.getinvoiceData()
    const [invoicesdata,setinvoiceData]=useState(Invoicedat) 
  const addinvoice=()=>{
      navigate('/addInvoices')
  }
  
  const onDelete=async(id)=>{
      debugger
  const data =  await Invoicedata.deleteinvoice(id)
  let invoicedata=[...invoicesdata]
  for(let i=0;i<invoicedata.length;i++){
      if(invoicedata[i].id==id){
          invoicedata.splice(i,1)
      }
  }
  setinvoiceData(invoicedata)
  }
  
  const onEdit=(id)=>{
  navigate(`/${id}/editInvoice`)
  }
return (
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
     <CardHeader
     action={
           
                <Button variant='contained' onClick={addinvoice} style={{color:'white'}}>NEW INVOICE</Button>
         
         }
         title="INVOICES"
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
 {invoicesdata.map((invoice,i)=>(
     <Grid container>
    <Grid item sm={1}><Typography>{invoice.id}</Typography></Grid>
    <Grid item sm={3}><Typography>{invoice.name}</Typography></Grid> 
    <Grid item sm={2}>{invoice.date}</Grid> 
    <Grid item sm={3}>{invoice.bill_No}</Grid> 
    <Grid item sm={2}>
     <IconButton onClick={()=>onEdit(invoice.id)}>
         <EditIcon/>
         </IconButton>
 <IconButton style={{padding:10}} onClick={()=>onDelete(invoice.id)}><DeleteIcon/></IconButton>
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
import InvoiceData from '../services/dataofinvoice';
//import Databill ,{databill} from '../services/databill';


export default function Bills() {
const navigate=useNavigate()
  const inventoryData= InvoiceData.getBillsData()
  const [billsData,setBillsData]=useState(inventoryData) 
const addstock=()=>{
    navigate('/addInvoices')
}

const onDelete=async(id)=>{
    debugger
const data =  await InvoiceData.deleteBill(id)
let billdata=[...billsData]
for(let i=0;i<billdata.length;i++){
    if(billdata[i].id==id){
        billdata.splice(i,1)
    }
}
setBillsData(billdata)
}

const onEdit=(id)=>{
navigate(`/${id}/editInvoice`)
}

 /* return (
   <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
    <CardHeader
    action={
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>Add Invoice</Button>
        
        }
        title="INVOICES"
/>
 <Box sx={{bgcolor:'lightblue',boxShadow:3}}>
    <CardContent>
        <div style={{ height: 70, width: '100%' }}>
<Grid container style={{padding:10}}>
   <Grid item sm={2}>ID</Grid> 
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
          
               <Button variant='contained' onClick={addstock} style={{color:'white'}}>ADD INVOICE</Button>
        
        }
        title="INVOICES"
/>
    <div className='design'>
    <table style={{bgcolor:'red'}}>
    <thead>
    <tr>
    <th>ID</th>
    <th>Company Name</th>
    <th>Customer Name</th>
    <th>Date</th>
    <th>phoneNo.</th>
    <th>Company Address</th>
    <th>Customer Address</th>
    <th>Email</th>
    <th>Product details</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Total(in Rs.)</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody style={{bgcolor:'red'}}>
    {billsData.map((bill,i) => (
        <tr key={bill.id}>
            <td>{bill.id}</td>
    <td>{bill.name}</td>
    <td>{bill.cname}</td>
    <td>{bill.date}</td>
    <td>{bill.phone}</td>
    <td>{bill.caddress}</td>
    <td>{bill.address}</td>
    <td>{bill.email}</td>
    <td>{bill.prodeet}</td>
    <td>{bill.quantity}</td>
    <td>{bill.price}</td>
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
