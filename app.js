const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running onport ${PORT}`)
} )

const Users = [{
    name: "Mukil",
    age:"21"
},
{
    name:"Navin",
    age:"22"
},

{
    name:"Kumar",
    age:"33"
},

{
    name: "Siva",
    age: "22"
},

{
    name: "Arun",
    age: "25"
},

{
    name: "Kumaran",
    age:"43"
},

{
    name: "Ravi",
    age: "40"
},

{
    name: "Kathir",
    age: "25"
},

{
    name: "Joe",
    age: "70"
},

{
    name: "Biden",
    age: "43"
},

{
    name: "Kavin",
    age: "32"
}
]

app.get('/', (req, res )=>{

    res.send("Hello")
})

app.get('/find', (req, res)=>{
    
    // const User = Users.find( o=>o.age>req.query.age)
    // console.log(User)
    // console.log(Users)
    // console.log(req.query)


    var User = Users.filter(function (el)
{
  return el.age>=req.query.age
}
);
console.log(User)
    res.send(User).status(200)
})

