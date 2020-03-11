import { Router } from 'express';
import {categoriaControlador} from '../controlador/categoriasControlador'

class CategoriaRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/familia',categoriaControlador.listarFamilia);
       this.router.get('/',categoriaControlador.listar);
       this.router.get('/:id',categoriaControlador.listarUno);
       this.router.post('/',categoriaControlador.crear);
       this.router.delete('/:id',categoriaControlador.eliminar);
       this.router.put('/:id',categoriaControlador.actualiar);
      
   }
}

const categoriaRutas = new CategoriaRutas();
 export default categoriaRutas.router;