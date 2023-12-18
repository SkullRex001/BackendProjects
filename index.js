// total kidney  , healthy kidney , unhealthy kidney
// get-> display result , put -> make healthy kideny 
// post request -> add the type of kidney you want
// delete request -> delete unheathy kidney

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//My database

const patient = [{
    Name: "Aditya"
}, [{
    isHealthy: true
}, {
    isHealthy: false
}]]

app.get('/', (req, res) => {

    let totalKideny = patient[1].length;
    let totalHealthyKidney = 0;
    for (let i = 0; i < patient[1].length; i++) {
        if (patient[1][i].isHealthy === true) {
            totalHealthyKidney++;
        }
    }
    let totalUnhealthyKidney = totalKideny - totalHealthyKidney;

    res.json({

        totalKideny : totalKideny , 
        totalHealthyKidney : totalHealthyKidney , 
        totalUnhealthyKidney : totalUnhealthyKidney

    })

})

app.put('/' , (req, res)=>{

    for (let i = 0; i < patient[1].length; i++) {
        if (patient[1][i].isHealthy === false) {

            patient[1][i].isHealthy = true;
            
        }
    }

    res.json({
        task : "DONE"
    })

})

app.post('/' , (req , res)=>{

    let kidneyToAdd = req.body.isHealthy;

    patient[1].push({
        isHealthy : kidneyToAdd
    })

    res.json({
        task : "Done"
    })
})

app.delete('/'  ,  (req , res)=>{

    let healthyKidney = [];

    
    for (let i = 0; i < patient[1].length; i++) {
        if (patient[1][i].isHealthy === true) {

            healthyKidney[i] = patient[1][i];
            
        }
    }

    patient[1] = healthyKidney;

    res.json({
        task : "done"
    })

})

app.listen(port);






















