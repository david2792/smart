import { Router } from 'express';
import {marcasControlador} from '../controlador/marcasControlador'

class MarcaRutas 
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',marcasControlador.listar);
       this.router.get('/:id',marcasControlador.listarUno);
       this.router.post('/',marcasControlador.crear);
       this.router.delete('/:id',marcasControlador.eliminar);
       this.router.put('/:id',marcasControlador.actualiar);
   }
}

const marcasRutas = new MarcaRutas();
 export default marcasRutas.router;