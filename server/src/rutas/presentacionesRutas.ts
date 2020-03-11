import { Router } from 'express';
import {presentacionControlador} from '../controlador/presentacionesControlador'

class PresentacionRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',presentacionControlador.listar);
       this.router.get('/:id',presentacionControlador.listarUno);
       this.router.post('/',presentacionControlador.crear);
       this.router.delete('/:id',presentacionControlador.eliminar);
       this.router.put('/:id',presentacionControlador.actualiar);
   }
}

const presentacionRutas = new PresentacionRutas();
 export default presentacionRutas.router;