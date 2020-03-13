exp=require("express")
app=exp()
app.listen(1234)
mongo=require("mongojs")
bp=require("body-parser")
app.use(bp.json())
conn=mongo("mongodb://localhost:27017/bat6pm")
////Select data
app.get("/getdata",(req,res)=>{
conn.tbl_user.find((err,result)=>{
   res.send(result)
})
})
///Insert data
app.post("/insdata",(req,res)=>{
conn.tbl_user.insert(req.body,()=>{
    res.send({resu:'Inserted'})
})
})
///Remove data
app.post("/delrec",(req,res)=>{
    conn.tbl_user.remove(req.body,()=>{
        res.send({result:'Deleted'})
    })
})
///Update data
////
app.delete("/delallrec",(re,rs)=>{
conn.tbl_user.remove()
rs.send({result:"Delete All"})
})