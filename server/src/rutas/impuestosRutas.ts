import { Router } from 'express';
import {impuestoControlador} from '../controlador/impuestosControlador'

class ImpuestosRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',impuestoControlador.listar);
       this.router.get('/:id',impuestoControlador.listarUno);
       this.router.post('/',impuestoControlador.crear);
       this.router.delete('/:id',impuestoControlador.eliminar);
       this.router.put('/:id',impuestoControlador.actualiar);
   }
}

const impuestosRutas = new ImpuestosRutas();
 export default impuestosRutas.router;