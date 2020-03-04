from flask import Flask
from flask import jsonify
from flask_mysqldb import MySQL

app =Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'manager'
app.config['MYSQL_PASSWORD'] = 'developer'
app.config['MYSQL_DB'] = 'smart_desarrollo'
mysql = MySQL(app)

@app.route('/')
def Index():
    return "Bienvenido al servidor Python"

@app.route('/presupuestos')
def agregar_presupuesto():
    return 'agregar presupuesto'


@app.route('/api/marcas',methods=['GET'])
def listar_paises():
    consulta = mysql.connection.cursor()
    consulta.execute('SELECT * FROM marcas')
    paises = consulta.fetchall()
    # consulta.close()
    return jsonify(paises)   

if __name__ == '__main__':  
    app.run(port=5000, debug=True)
