const express = require("express");
const config = require("../../config");
const db = require("../../db");
const utils = require('../../utils')
const router = express.Router();
router.get("/", (req, res) => {
  const statement = `select id , title, description from category`
  db.query(statement,(err,data)=>{
    res.send(utils.createResult(err,data))
  })
});

router.post("/",(req,res) =>{
  const {title,description} = req.body
  const statement = `insert into category (title, description) values (?,?)`
db.query(statement,[title,description] ,(err,data)=>{
  res.send(utils.createResult(err,data))
})
})

router.put("/:id", (req, res) => {
  const {id} = req.params
  const { title, description } = req.body;
  const statement = `update category set  title =${title}',description = '${description}' where id = ${id}`;
  db.query(statement, (err, data) => {
    res.send(utils.createResult(err, data));
  });
});


module.exports = router;
