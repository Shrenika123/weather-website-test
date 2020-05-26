const express=require('express')
const path=require('path')
const hbs=require('hbs')
const request=require('request')
const forecast=require('./utils/forecast')


const app=express()
const pub=path.join(__dirname,'../public')
const vie=path.join(__dirname,'../templates/views')

const par=path.join(__dirname,'../templates/partials')
console.log(pub)

app.set('view engine','hbs')
app.set('views',vie)
hbs.registerPartials(par)
app.use(express.static(pub))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/info',(req,res)=>{
    res.send({
        name:'shre',
        age:24
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send('not working')
    }
    else
    {
        forecast(req.query.address,(error,data)=>{
            if(error)
            return res.send('some error')
            else
            {
                //console.log(body)
            res.send(data)
            }
        })
    }
    
})

app.get('/weather/*',(req,res)=>{
    res.send('404 Not Found')

})

app.get('*',(req,res)=>{
    res.send('404 Not Found')

})

app.listen(3000,()=>{
    console.log("server is starting")
})