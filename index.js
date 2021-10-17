const express = require('express')
const app = express()
app.use(express.json())
app.get('/factorial/:n',(req,res)=>{
    let n = parseInt(req.params.n);
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    res.json({result:fact})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('running on port :' + PORT)
})