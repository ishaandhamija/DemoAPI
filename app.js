const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/getphoto', (req, res) => {
	var obj = {}
	obj.imageUrl = 'https://avatars3.githubusercontent.com/u/21955039?s=400&v=4'

	res.send(obj)
})

app.post('/getdata', (req, res) => {
	var obj = {}
	obj.name = {}
	obj.name.firstname = 'abc'
	obj.name.lastname = 'xyz'
	obj.age = 20
	obj.college = 'JIIT'
	obj.address = []
	obj.address[0] = 'qwe'
	obj.address[1] = 'iop'
	obj.address[2] = 'bnm'
	if (req.body.id == 10) {
		res.send(obj)
	} else {
		var newobj = {}
		newobj.error_msg = 'wrong id!'
		res.send(newobj)
	}
})

app.listen(3030, () => {
	console.log('Listening to port 3030...')
})
