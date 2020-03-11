import { Router } from 'express';
import {presupuestoControlador} from '../../controlador/administrativoPresupuesto/presupuestoControlador'

class PresupuestoRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',presupuestoControlador.listar);
       this.router.get('/:id',presupuestoControlador.listarUno);
       this.router.post('/',presupuestoControlador.crear);
       this.router.put('/:id',presupuestoControlador.actualiar);
       this.router.get('/clientes',presupuestoControlador.listarCliente);
       this.router.get('/productos',presupuestoControlador.listarProducto);
       this.router.get('/productosvista',presupuestoControlador.listarProductoVista);
   }
}

const presupuestoRutas = new PresupuestoRutas();
 export default presupuestoRutas.router;