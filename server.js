 const express=require('express')
 const hbs=require('hbs')
 const app=express()
app.set('view engine',hbs)
app.use(date=(req, res, next) => {
    let hours = new Date().getHours()
    console.log(hours)
    if (hours <8 ) {
        return res.sendFile(__dirname + '/public/close.html')
    } else 
    next();
    }
    
    )
 app.use(express.static(__dirname+'/public'))
 //app.use (date=(req,res,next)=>{let requestAt=new Date()
    // next()})
// app.get('/home',(req,res)=>{res.send('hello')})
// app.get('/contact',(req,res)=>{res.send('contact page')})
 //app.get('/user/:nom',(req,res)=>{console.log(req.params.nom)
    //  res.send(req.params.nom +' is connected')})
app.get('/home',(req,res)=>{ res.render(__dirname +'/public/home.html')})
app.get('/ourservice',(req,res)=>{ res.render(__dirname +'/public/ourservices.html')})
app.get('/contact',(req,res)=>{ res.render(__dirname+'/public/contact.html')})

app.listen(3000,(err)=>{if (err)console.log('erreur') 
else console.log('ok')})