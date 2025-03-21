const cors = require('cors');
const express = require('express');
const mysql = require('mysql2');

const app = express();

// Asegúrate de que CORS está habilitado correctamente
app.use(cors({
  origin: 'http://localhost:8100',  // Asegúrate de que esto permita tu origen Angular
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Configura la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',        // Dirección del servidor de la base de datos
  user: 'root',             // Tu usuario de MySQL
  password: '',             // Tu contraseña de MySQL
  database: 'duocmaps'     // Nombre de tu base de datos
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
  

  // Hacemos una consulta simple para comprobar que podemos obtener datos
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) throw err;
    console.log('La consulta fue exitosa. Resultado: ', results);
  });
});

// Ejemplo de ruta para obtener datos
this.http.get('https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/punto_interes')
  .subscribe(response => {
    console.log(response);
  });

app.get('/consejeros', (req, res) => {
  db.query('SELECT * FROM consejeros', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/eventos', (req, res) => {
  db.query('SELECT * FROM eventos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/eventos/:id', (req, res) => {
  const eventId = req.params.id;  // Toma el ID del evento de los parámetros de la URL
  db.query('SELECT * FROM eventos WHERE id = ?', [eventId], (err, result) => {
    if (err) {
      return res.status(500).send('Error al obtener el evento');
    }
    if (result.length === 0) {
      return res.status(404).send('Evento no encontrado');
    }
    res.json(result[0]);  // Devuelve el evento específico por ID
  });
});

app.get('/preguntas_frecuentes', (req, res) => {
  db.query('SELECT * FROM preguntas_frecuentes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/sala', (req, res) => {
  db.query('SELECT * FROM sala', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Arranca el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
