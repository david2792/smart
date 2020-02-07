import { Router } from 'express';
import {familiaControlador} from '../controlador/familiasControlador'

class FamiliarRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',familiaControlador.listar);
       this.router.get('/:id',familiaControlador.listarUno);
       this.router.post('/',familiaControlador.crear);
       this.router.delete('/:id',familiaControlador.eliminar);
       this.router.put('/:id',familiaControlador.actualiar);
   }
}

const familiaRutas = new FamiliarRutas();
 export default familiaRutas.router;