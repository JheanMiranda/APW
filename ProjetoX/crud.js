import connection from './bd;js'

 export class Crud {

  //M�todo - sele��o
  async inserir() {
	let conn = connection()

	let [row] = conn.query('select * from paciente')
	console.log('Pacientes cadastrados!' + rows)

	} catch (error) {
	    console.error('erro de sele��o')
	    conn.end()
	}
	
  }

