import { Router } from 'express';
import {sucursalControlador} from '../controlador/sucursalControlador'

class SucursalesRutas 
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',sucursalControlador.listar);
       this.router.get('/empresa',sucursalControlador.listarEmpresa);
       this.router.get('/:id',sucursalControlador.listarUno);
       this.router.post('/',sucursalControlador.crear);
       this.router.delete('/:id',sucursalControlador.eliminar);
       this.router.put('/:id',sucursalControlador.actualiar);
   }
}

const sucursalesRutas = new SucursalesRutas();
 export default sucursalesRutas.router;