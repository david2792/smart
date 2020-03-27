import { Router } from 'express';
import {productoControlador} from '../controlador/productosControlador';

class ProductosRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',productoControlador.listar);
       this.router.get('/agregar',productoControlador.recuperarCodigo);
       this.router.get('/categoria',productoControlador.listarCategoria);
       this.router.get('/marca',productoControlador.listarMarcas);
       this.router.get('/deposito',productoControlador.listarDeposito);
       this.router.get('/unidades',productoControlador.listarMedida);
       this.router.get('/presentacion',productoControlador.listarPresentacion);
       this.router.get('/impuesto',productoControlador.listarImpuesto);
       this.router.get('/:id',productoControlador.listarUno);
       this.router.post('/',productoControlador.crear);
     //  this.router.delete('/:id',categoriaControlador.eliminar);
       this.router.put('/:id',productoControlador.actualizar);
      
   }
}

const productosRutas = new ProductosRutas();
 export default productosRutas.router;