import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'

const app = express();

// Encuentra direccion global para pasar al app.set()
// el cual me setea la unicacion de la carpeta de los .ejs(html)
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'views'));
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(indexRoutes)

app.use(express.static(join( __dirname ,'public')))

app.listen(process.env.PORT || 3000);
console.log('server on Port, ', process.env.PORT ||3000);



