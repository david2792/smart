import { Router } from 'express';
import {departamentoControlador} from '../controlador/departamentosControlador'

class DepartamentoRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/pais',departamentoControlador.listarPais);
       this.router.get('/',departamentoControlador.listar);
       this.router.get('/:id',departamentoControlador.listarUno);
       this.router.post('/',departamentoControlador.crear);
       this.router.put('/:id',departamentoControlador.actualiar);
      
   }
}

const departamentoRutas = new DepartamentoRutas();
 export default departamentoRutas.router;