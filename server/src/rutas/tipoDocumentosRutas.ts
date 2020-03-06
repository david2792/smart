import { Router } from 'express';
import {tipodocumentoControlador} from '../controlador/tipodocumentosControlador'

class TipoDocumentosRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.get('/',tipodocumentoControlador.listar);
       this.router.get('/:id',tipodocumentoControlador.listarUno);
       this.router.post('/',tipodocumentoControlador.crear);
       this.router.delete('/:id',tipodocumentoControlador.eliminar);
       this.router.put('/:id',tipodocumentoControlador.actualiar);
      
   }
}

const tipoDocumentosRutas = new TipoDocumentosRutas();
 export default tipoDocumentosRutas.router;