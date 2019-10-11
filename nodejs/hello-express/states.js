const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('welcome to states application!'))

//data store in memory. in production, it can be in database
let allStates = [ 
	{ code: 'MN', name:'Minnesota'},
	{ code: 'WI', name: 'Wisconsin'},
	{ code: 'IL', name: 'Illinois'}
]
//getting all states
app.get('/states', (req, res) => {
	console.log('getting all states')
	res.send(allStates)
}) 

app.get('/states/:code', (req, res) => {
	console.log(`getting all states for ${req.params.code}`);
	//validation

	//searching
	let found = allStates.filter( s => s.code == req.params.code)
	
	//
	res.send(JSON.stringify(allStates));
})  

app.post('/states', function(req, res) {
	console.log(`adding state ${JSON.stringify(req.body)}`) //need setup body-parser for it
	res.send(allStates)
})  


app.listen(port, () => console.log(`Example app listening on port ${port}!`))