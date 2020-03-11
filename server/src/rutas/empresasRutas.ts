import { Router } from 'express';
import {empresaControlador} from '../controlador/empresasControlador'

class EmpresasRutas 
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',empresaControlador.listar);
       this.router.get('/:id',empresaControlador.listarUno);
       this.router.post('/',empresaControlador.crear);
       this.router.delete('/:id',empresaControlador.eliminar);
       this.router.put('/:id',empresaControlador.actualiar);
   }
}

const empresasRutas = new EmpresasRutas();
 export default empresasRutas.router;