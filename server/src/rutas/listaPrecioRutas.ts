import { Router } from 'express';
import {listaPrecioControlador} from '../controlador/listaPrecioControlador';

class ListaPrecioRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
     //  this.router.get('/',listaPrecioControlador.listar);
       this.router.get('/:id',listaPrecioControlador.listarUno);
       this.router.post('/:id',listaPrecioControlador.crear);
   }
}

const listaPrecioRutas = new ListaPrecioRutas();
 export default listaPrecioRutas.router;