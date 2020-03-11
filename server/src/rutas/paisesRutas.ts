import { Router } from 'express';
import {paisControlador} from '../controlador/paisesControlador'

class PaisesRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',paisControlador.listar);
       this.router.get('/:id',paisControlador.listarUno);
       this.router.post('/',paisControlador.crear);
       this.router.delete('/:id',paisControlador.eliminar);
       this.router.put('/:id',paisControlador.actualiar);
      
   }
}

const paisesRutas = new PaisesRutas();
 export default paisesRutas.router;