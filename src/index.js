import app  from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT)
console.log('server esta operando en el puerto' ,PORT);

//dividir la aplicacion en secciones con route 
//separar los mediante enrutadores en este caso con la carpeta src
//se mueven las rutas a una carpeta y se importan y exportan
//ahora vamos a pasar a otra rutas los "req,res" dentro de src en la carpeta controllers
//como crear un dato y popnerlo en una tabla
//listar los empleados creados
//listar un solo empleado
//eliminar un empleado
//actualizar un empleado
//manejo de errores
//crear una ruta que muestre "ruta no encontrada"
//variables de entorno en el .env
//despliegue de proyecto