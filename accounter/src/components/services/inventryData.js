/*import React, { Component } from 'react'

let stockData=[
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

export class InventoryData extends Component {
 
static getstockData(){
    return stockData
}

static async addstock(bill){
    stockData.push(bill)
    return stockData
} 

static getstockData(id){
    let stocksData={}
for(let i=0;i<stockData.length;i++){
    if(stockData[i].id==id){
stocksData=stockData[i]
    }
}
return stocksData
}

static updatestocks(formData){
  
for(let i=0;i<stockData.length;i++){
    if(stockData[i].id==formData.id){
stockData[i]=formData
    }
}
return stockData
}

static async deletestocks(id){
    debugger
    for(let i=0;i<stockData.length;i++){
        if(stockData[i].id==id){
            stockData.splice(i,1)
        }
}
return stockData
}
}

export default InventoryData*/
import React, { Component } from 'react'

let billsData=[
    {id:'1',
    name:'a',
    vname:'b',
    quantity:'10',
    status:'instock'
},
{id:'2',
name:'a',
vname:'b',
    quantity:'10',
    status:'instock'
},
{id:'3',
name:'a',
vname:'b',
    quantity:'10',
    status:'instock'
},
{id:'4',
name:'a',
vname:'b',
    quantity:'10',
    status:'instock'
},
]

export class InventoryData extends Component {
 
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

export default InventoryData

