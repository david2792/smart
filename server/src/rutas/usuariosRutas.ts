import { Router } from 'express';
import {usuarioControlador} from '../controlador/usuariosControlador'

class UsuarioRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/nivel',usuarioControlador.listarNivel);
       this.router.get('/sucursal',usuarioControlador.listarSucursal);
       this.router.get('/',usuarioControlador.listar);
       this.router.get('/:id',usuarioControlador.listarUno);
       this.router.post('/',usuarioControlador.crear);
       this.router.put('/:id',usuarioControlador.actualiar);
      
   }
}

const usuarioRutas = new UsuarioRutas();
 export default usuarioRutas.router;