require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
app.use(express.json())

const pexelsClient = axios.create({
    baseURL: `https://api.pexels.com/v1/`,
    headers:{
        Authorization: process.env.PEXELS_KEY
    }
})

app.get('/search', async (req,res) => {
    try{
        const result = await pexelsClient.get('/search', {
            params: {
                query: req.query.query,
                per_page: req.query.per_page || 16
            }
        }
        )
        res.status(200).json(result.data)
    }
    catch(e){
        res.status(500).end()
    }
    console.log(req.query.query)
    
})

const port = 3000

app.listen(
    port,
    console.log(`Back ok. Porta ${port}.`)
)