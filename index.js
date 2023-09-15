const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
app.use(cors())

const corn = {
          'mii':{
                    'corn-name':'which mia hahahaha?',
                     'corn-country':'USA Or Lebanon'
          },
          'riley':{
                     'corn-name':'riley r',
                     'corn-country':'USA'
          },
          'val':{
                    'corn-name':'valeria',
                     'corn-country':'USA'
          },
          'loli':{
                    'corn-name':'lolita',
                     'corn-country':'USSR'
          },
          'error':{
                    'corn-name':'do they exist ?',
                     'corn-country':'do they tho?'
          }  
}

app.get('/',(request, response)=>{
          response.sendFile(__dirname + '/index.html')
})

app.get('/api/:cornName', (request, response)=>{
     //    response.json(corn['error'])
    //const pName = request.params.name
    const cornNames = request.params.cornName.toLowerCase()
    if( corn[cornNames] ){
          response.json(corn[cornNames])
    }else{
          response.json(corn['error'])
    }
})
// app.get('/api/:yearNum',(request, response)=>{
//           const yearsNum = request.params.yearNum
//           //console.log(request.params.yearNum)
//           if ( corn[cornNames] ){
//           response.json(corn[cornNames])
//           }else{
//           response.json(goldenBoot['error'])
//           }
// })

app.listen(process.env.PORT || PORT, ()=>{
          console.log(`The server is running on port ${PORT} and go and catch it!`)
})