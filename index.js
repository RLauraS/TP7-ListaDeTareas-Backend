import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import path from 'path'
import 'dotenv/config'
import'./src/database/dbConnection'
import tareaRouter from './src/routes/tarea.routes'

const app = express();
app.set('port',process.env.PORT || 4000);
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto'+app.get('port'))
})

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'/public')));
app.use('/apitareas',tareaRouter)