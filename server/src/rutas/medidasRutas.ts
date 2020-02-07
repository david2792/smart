import { Router } from 'express';
import {medidasControlador} from '../controlador/medidasControlador'

class MedidasRutas 
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',medidasControlador.listar);
       this.router.get('/:id',medidasControlador.listarUno);
       this.router.post('/',medidasControlador.crear);
       this.router.delete('/:id',medidasControlador.eliminar);
       this.router.put('/:id',medidasControlador.actualiar);
   }
}

const medidasRutas = new MedidasRutas();
export default medidasRutas.router;