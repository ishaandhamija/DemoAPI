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

app.get('/getarraylist', (req, res) => {
	var arr = []
	var obj = {}
	obj.a = "abc"
	obj.b = {}
	obj.b.p = "xyz"
	obj.b.q = []
	obj.b.q[0] = 'asas'
	obj.b.q[1] = 'asas'
	arr[0] = obj
	arr[1] = obj
	arr[2] = obj
	arr[3] = obj
	arr[4] = obj

	res.send(arr)
})

app.listen(process.env.PORT || 5000, () => {
	console.log('Listening to port 5000...')
})
