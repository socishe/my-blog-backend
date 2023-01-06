import express from 'express'

const app = express()
const PORT = 8000;
app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}`);
    
})
