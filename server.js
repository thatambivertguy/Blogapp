const express=require('express')
const {getblogs,insert}=require('./dbb')
const app= express()
app.set('view engine','hbs')
app.use(express.urlencoded({extended: true}))
// const blogs=[]
app.get('/',(req,res)=>{
    getblogs().then(blogs=>{
        const selectedId=req.query.blog
        const selected=blogs.find(b => b._id==selectedId)
        console.log('id is ' +selectedId)
        console.log('selected is'+ selected)
        res.render('index',{blogs,selected})
    })
   
})
app.get('/add',(req,res)=>{
    res.render('add')
})
app.post('/',(req,res)=>{
   
    const newblog={
        title :req.body.title,
        body: req.body.body
    }
    console.log(newblog)
    insert(newblog).then(r=>
        res.redirect('/?blog='+r.ops[0]._id))
   
})


app.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})