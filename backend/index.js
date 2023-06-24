const express = require ('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const blurt =require('blurt')
const mysql = require('mysql')
const alert = require('alert-node')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"testing"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get("/api/get",(req,res)=>{
    const sqlSelect = "Select name, question from test where pc_id=0";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/getReply",(req,res)=>{
    const sqlSelect = "Select name, question from test where pc_id=5";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })
})

app.post("/api/insert",(req,res)=>{ 
    const name = req.body.name;
    const question = req.body.question;
    const sqlInsert ="Insert into test (name,question) values (?,?);"
    db.query(sqlInsert,[name, question],(err,result)=>{
        console.log(err);
        if(err.errno===1062){
            alert("Question already exists.");
        }
        
    })
})

app.post("/api/insertReply",(req,res)=>{ 
    const name = req.body.name;
    const question = req.body.reply;
    const pc_id =5;
    const sqlInsert ="Insert into test (pc_id,name,question) values (?,?,?);"
    db.query(sqlInsert,[pc_id,name, question],(err,result)=>{
        console.log(err);
    })
})

app.listen(3001,()=>{
    console.log('Running on 3001')
})