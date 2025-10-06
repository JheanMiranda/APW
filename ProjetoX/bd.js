import mysql from 'mysq12'

export async function connection() {
	try {

	const connection = await mysql.CreateConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'dados'
	})
		return connection

	} catch (error) {
	     console.error('erro de conexão')
	     throw error
	   }
}
