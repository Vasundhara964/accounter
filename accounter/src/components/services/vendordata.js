import React, { Component } from 'react'

let billsData=[
    {id:'1',
    name:'Kelvin',
    cname:'kelvin Electronics',
    prod:'hp laptop',
    price:'120000',
    address:'NRT',
    date:'09-06-2023'
},
{id:'2',
name:'John',
cname:'John tech.',
    prod:'samsung Refridgerator',
    price:'124000',
    address:'NRT',
    date:'09-06-2023'
},
{id:'3',
name:'hello',
cname:'All solutions',
    prod:'dell laptop',
    price:'34000',
    address:'NRT',
    date:'09-06-2023'
},
{id:'4',
name:'Horatio',
cname:'Horatio company',
    prod:'vivo mobile',
    price:'7000',
    address:'NRT',
    date:'09-06-2023'
},
{id:'5',
name:'Joseph',
cname:'Happy Mobiles',
    prod:'Apple iphones',
    price:'160000',
    address:'NRT',
    date:'09-06-2023'
},

]

export class vendordata extends Component {
 
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

export default vendordata
