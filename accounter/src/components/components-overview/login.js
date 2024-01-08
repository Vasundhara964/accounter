import React, { useState } from 'react';
import {Navigate,useHref,useNavigate} from "react-router-dom"
import { Card } from 'shards-react'
import {TextField,Button, Grid,FormControl,FormGroup,FormControlLabel,Checkbox} from '@mui/material';
import Alert from '@mui/material/Alert';
import shadows from '@mui/material/styles/shadows';
export default function Login() {
    const navigate=useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [isAuthenticated,setIsAuthenticated] = React.useState(localStorage.getItem("isAuthenticated"))


    const login =()=>{
if(email=="user1@gmail.com" && password== "accounter123" ){
  localStorage.setItem("isAuthenticated",1)
setIsAuthenticated(localStorage.setItem("isAuthenticated",1))
navigate('/blog-overview')
}
else if(email=="customer@gmail.com" && password== "customer123" ){
  localStorage.setItem("isAuthenticated",1)
setIsAuthenticated(localStorage.setItem("isAuthenticated",1))
navigate('/dashboard2')
}
else{
  setError(true)
  
}
      
    }

  return (
    
    <Grid container style={{margin:'auto',display:'flex', justifyContent: 'center',backgroundColor:'#afcbd5', alignItems: 'center'}}>
      <Grid item md='6' sm='8' xs='12' >
        
    <Card style={{padding:"40px" ,margin:'30px',width:'800',height:'700',border:'red',marginTop:'10%',marginBottom:'20%'}}>

      {error? <Alert severity="error">Something wrong,check it out!</Alert>: "" }
    <h3 item  style={{display:'flex',justifyContent:'center',fontFamily:'Monospaced'}}>Login</h3>
    <br></br>
<h4 item style={{fontFamily:'bold',fontSize:'20px',marginLeft:'8px'}}>Email</h4>
<TextField type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} sx={{marginBottom:"20px",marginTop:'10px'}}></TextField>
<h4 item style={{fontFamily:'bold',fontSize:'20px',marginLeft:'8px'}}>Password</h4>
<TextField type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:'20px'}}></TextField>
<FormControl component="fieldset" >
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Remember me"
          labelPlacement="end"
          
        />
      </FormGroup>
      
</FormControl>

  <Grid item style={{display: 'flexbox',width:'auto',textAlign:'center'}}>
  <a href='/forgotpassword' style={{display:'block',textAlign:'right',fontSize:'18px',color:'red',marginTop:'10px'}}> forgot your password ?</a>
    <Button style={{width:'400px',marginTop:'30px'}} variant='contained' onClick={login}>Login</Button>
    
    
  </Grid>


  {/*<Grid item style={{display: 'flexbox',textAlign:'right'}}>
    <Button variant='contained' onClick={login}>Login</Button>
    
    <a href='#' style={{display:'block',textAlign:'center'}}> forgot your password ?</a>
  </Grid>*/}

      
      </Card>
        </Grid>
        </Grid>
  )
}
