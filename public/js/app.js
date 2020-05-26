const val=document.querySelector('form')
const search=document.querySelector('input')
const message_one=document.querySelector('#message-one')
const message_two=document.querySelector('#message-two')


console.log('Client side javascript file is loaded!')



const loc=search.value
    val.addEventListener('submit',(e)=>{
        e.preventDefault()
        const loc=search.value
        fetch('http://localhost:3000/weather?address='+loc).then((response)=>{
response.json().then((data)=>{
    if(data.error)
    {
        message_one.textContent='Loading...'
        message_two.textContent=JSON.stringify(data.error)
    }
    else
    {
        console.log(data.location)
        message_one.textContent=JSON.parse(JSON.stringify(data.location.name))
        message_two.textContent='wow'
    }
})
})
        console.log(loc)
    })  