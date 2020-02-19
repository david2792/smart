import { Router } from 'express';
import {ciudadesControlador} from '../controlador/ciudadesControlador'

class CiudadRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/departamento',ciudadesControlador.listarDepartamento);
       this.router.get('/',ciudadesControlador.listar);
       this.router.get('/:id',ciudadesControlador.listarUno);
       this.router.post('/',ciudadesControlador.crear);
       this.router.put('/:id',ciudadesControlador.actualiar);
      
   }
}

const ciudadRutas = new CiudadRutas();
 export default ciudadRutas.router;