/*import React, { Component } from 'react'

let invoicesdata=[
    {id:'1',
    name:'a',
    date:'15-09-2023',
    bill_No:'cvg01'
},
{id:'2',
name:'a',
date:'15-09-2023',
bill_No:'cvg01'
},
{id:'3',
name:'a',
date:'15-09-2023',
bill_No:'cvg01'
},
{id:'4',
name:'a',
date:'15-09-2023',
bill_No:'cvg01'
},
]
export class Invoicedata extends Component {

    static getinvoiceData(){
        return invoicesdata
    }
    
    static async addinvoice(invoice){
        invoicesdata.push(invoice)
        return invoicesdata
    } 
    
    static getinvoiceData(id){
        let invoiceData={}
    for(let i=0;i<invoicesdata.length;i++){
        if(invoicesdata[i].id==id){
    invoiceData=invoicesdata[i]
        }
    }
    return invoiceData
    }
    
    static updateinvoice(formData){
      
    for(let i=0;i<invoicesdata.length;i++){
        if(invoicesdata[i].id==formData.id){
    invoicesdata[i]=formData
        }
    }
    return invoicesdata
    }
    
    static async deleteinvoice(id){
        debugger
        for(let i=0;i<invoicesdata.length;i++){
            if(invoicesdata[i].id==id){
                invoicesdata.splice(i,1)
            }
    }
    return invoicesdata
    }
    }
    
    export default Invoicedata*/

import React, { Component } from 'react'

let billsData=[
    {id:'1',
    name:'a',
    cname:'b',
    date:'15-09-2023',
    phone:'1234567890',
    address:'NRT',
    caddress:'Mumbai',
    email:'abc@gmail.com',
    prodeet:'cloth',
    quantity:'10',
    price:'200',
    total:'2000'
},
{id:'2',
name:'a',
cname:'b',
    date:'15-09-2023',
    phone:'1234567890',
    address:'NRT',
    caddress:'Mumbai',
    email:'abc@gmail.com',
    prodeet:'cloth',
    quantity:'10',
    price:'200',
    total:'2000'
},
{id:'3',
name:'a',
cname:'b',
    date:'15-09-2023',
    phone:'1234567890',
    address:'NRT',
    caddress:'Mumbai',
    email:'abc@gmail.com',
    prodeet:'cloth',
    quantity:'10',
    price:'200',
    total:'2000'
},
{id:'4',
name:'a',
cname:'b',
    date:'15-09-2023',
    phone:'1234567890',
    address:'NRT',
    caddress:'Mumbai',
    email:'abc@gmail.com',
    prodeet:'cloth',
    quantity:'10',
    price:'200',
    total:'2000'
},
]

export class InvoiceData extends Component {
 
static getBillsData(){
    return billsData
}

static async addBill(bill){
    billsData.push(bill)
    return billsData
} 

static getBillData(id){
    let billData={}
for(let i=0;i<billsData.length;i++){
    if(billsData[i].id==id){
billData=billsData[i]
    }
}
return billData
}

static updateBill(formData){
  
for(let i=0;i<billsData.length;i++){
    if(billsData[i].id==formData.id){
billsData[i]=formData
    }
}
return billsData
}

static async deleteBill(id){
    debugger
    for(let i=0;i<billsData.length;i++){
        if(billsData[i].id==id){
            billsData.splice(i,1)
        }
}
return billsData
}
}

export default InvoiceData

