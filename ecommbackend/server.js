const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"ecommerce"
});

// GET Products
app.get("/products",(req,res)=>{
  db.query(
    "SELECT * FROM products",
    (err,result)=>{
      if(err) throw err;
      res.json(result);
    }
  );
});

// POST Product
app.post("/products",(req,res)=>{

  const { name, price } = req.body;

  db.query(
    "INSERT INTO products(name,price) VALUES (?,?)",
    [name, price],
    (err,result)=>{
      if(err) throw err;

      res.json({
        message:"Product Added Successfully"
      });
    }
  );
});

app.listen(3000,()=>{
  console.log("Server Running");
});