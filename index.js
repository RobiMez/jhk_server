const express =require( 'express')
const { json, urlencoded } =require( 'body-parser')
const morgan =require( 'morgan')
const cors =require( 'cors')

const app = express()
const port = 4242

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('Root route GET request functional.')
})

app.post('/', (req, res) => {
    console.log(req)
    res.json({ "Echo": req.body })
})

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`\nREST API on http://localhost:${port}/`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()