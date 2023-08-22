import React, { Component } from 'react'
let billsData=[
    {id:'1',
    name:'Ram',
    prod:'hp laptop',
    address:'NRT',
    date:'09-06-2023'
},
{id:'2',
name:'Ravi',
prod:'Samsung Refridgerator',
    address:'GNT',
    date:'09-06-2023'
},
{id:'3',
name:'Latha',
prod:'Dell laptop',
    address:'BLR',
    date:'09-06-2023'
},
{id:'4',
name:'priya',
prod:'hp laptop',
    address:'NRT',
    date:'09-06-2023'
},
{id:'5',
name:'Justin',
prod:'VIVO mobile',
    address:'NRT',
    date:'09-06-2023'
},
{id:'6',
name:'Dustin',
prod:'Apple iphone 6s',
    address:'GNT',
    date:'09-06-2023'
},
{id:'7',
name:'K.Ram',
prod:'iphone 13',
    address:'NRT',
    date:'09-06-2023'
},
]

export class customerdata extends Component {
 
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

export default customerdata
