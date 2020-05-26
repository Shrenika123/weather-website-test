const request = require('request')

const forecast=(place,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=be54425381aabfaccbfacb4403ce4c96&query='+place

console.log(url)
request({url,json:true},(error,{body})=>{
    //console.log(response)
if(!error){
    callback(undefined,body)
    //console.log(trim.current)
}
    else
    callback(body.error,undefined)


})
}



module.exports = forecast