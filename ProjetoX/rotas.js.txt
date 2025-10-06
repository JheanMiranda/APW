import express from 'express'
import path from 'path'
import Crud from 'crud.js'

const app = express()
const port = 3000

app.get('/gravar', (req,res) => {

	//Instância
	const cd = Crud()

	//chamar o método
	cd.inserir()


})




app.listen(port, () => {
 console.log('http://localhost:${port}')
})
