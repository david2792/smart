import { Router } from 'express';
import {nivelControlador} from '../controlador/nivelusuariosControlador'

class NivelRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',nivelControlador.listar);
       this.router.get('/:id',nivelControlador.listarUno);
       this.router.post('/',nivelControlador.crear);
       this.router.delete('/:id',nivelControlador.eliminar);
       this.router.put('/:id',nivelControlador.actualiar);
      
   }
}

const nivelRutas = new NivelRutas();
 export default nivelRutas.router;