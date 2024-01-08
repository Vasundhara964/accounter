import React, { Component } from 'react'

let billsData=[
    {id:'1',
    name:'Ram',
    date:'15-09-2023',
    bill_No:'cvg01',
    address:'NRT',
    particular:'hp laptop',
    rate:'60000',
    tax:'10',
    total:'66000'
},
{id:'2',
name:'Ravi',
date:'15-09-2023',
bill_No:'cvg02',
address:'GNT',
    particular:'samsung Refridgerator',
    rate:'160000',
    tax:'5',
    total:'168000'
},
{id:'3',
name:'Latha',
date:'15-09-2023',
bill_No:'cvg03',
address:'BLR',
    particular:'Dell Laptop',
    rate:'34999',
    tax:'10',
    total:'38498'
},
{id:'4',
name:'Priya',
date:'15-09-2023',
bill_No:'cvg04',
address:'NRT',
    particular:'hp laptop',
    rate:'45000',
    tax:'10',
    total:'49500'
},
{id:'5',
name:'Justin',
date:'15-09-2023',
bill_No:'cvg05',
address:'NRT',
    particular:'Vivo mobile',
    rate:'11999',
    tax:'2',
    total:'12238'
},
{id:'6',
name:'Dustin',
date:'15-09-2023',
bill_No:'cvg06',
address:'GNT',
    particular:'Apple iphone 6s',
    rate:'55000',
    tax:'5',
    total:'57750'
},
{id:'7',
name:'K.Ram',
date:'15-09-2023',
bill_No:'cvg07',
address:'NRT',
    particular:'iphone 13',
    rate:'165000',
    tax:'2',
    total:'168300'
},
]

export class Databill extends Component {
 
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

export default Databill
