import { Router } from 'express';
import {clienteControlador} from '../controlador/clientesControlador'

class ClientesRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/ciudad',clienteControlador.listarCiudad);
       this.router.get('/',clienteControlador.listar);
       this.router.get('/:id',clienteControlador.listarUno);
       this.router.post('/',clienteControlador.crear);
       this.router.put('/:id',clienteControlador.actualiar);
      
   }
}

const clienteRutas = new ClientesRutas();
 export default clienteRutas.router;