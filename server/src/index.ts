import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRutas  from './rutas/indexRutas';
import marcasRutas from './rutas/marcasRutas';
import medidasRutas from './rutas/medidasRutas';
import impuestosRutas  from './rutas/impuestosRutas';
import presentacionesRutas from './rutas/presentacionesRutas';
import familiasRutas from './rutas/familiasRutas';
import categoriasRutas  from './rutas/categoriasRutas';
import productosRutas from './rutas/productosRutas';
import empresasRutas from './rutas/empresasRutas';
import sucursalesRutas from './rutas/sucursalesRutas';
import paisesRutas from './rutas/paisesRutas';
import departamentoRutas from './rutas/departamentosRutas';
import ciudadRutas from './rutas/ciudadesRutas';
import clienteRutas from './rutas/ clientesRutas';
import usuarioRutas from './rutas/usuariosRutas';
import nivelRutas from './rutas/nivelUsuariosRutas';
import tipoDocumentosRutas from './rutas/tipoDocumentosRutas';
import presupuestosRutas from './rutas/administrativoPresupuesto/presupuestosRutas'
class Server
{
   public app: Application;
    constructor()
    {
       this.app = express();
       this.config();
       this.rutas();
    }
    config():void
    {
        this.app.set('port',process.env.PORT||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    rutas():void
    {
        this.app.use(indexRutas);
        this.app.use('/api/marcas',marcasRutas);
        this.app.use('/api/unidades',medidasRutas);
        this.app.use('/api/impuestos',impuestosRutas);
        this.app.use('/api/presentaciones',presentacionesRutas);
        this.app.use('/api/familias',familiasRutas);
        this.app.use('/api/categorias',categoriasRutas);
        this.app.use('/api/productos',productosRutas);
        this.app.use('/api/empresas',empresasRutas);
        this.app.use('/api/sucursales',sucursalesRutas);
        this.app.use('/api/paises',paisesRutas);
        this.app.use('/api/departamentos',departamentoRutas);
        this.app.use('/api/ciudades',ciudadRutas);
        this.app.use('/api/clientes',clienteRutas);
        this.app.use('/api/usuarios',usuarioRutas);
        this.app.use('/api/nivelusuarios',nivelRutas);
        this.app.use('/api/tipodocumentos',tipoDocumentosRutas)
        this.app.use('/api/presupuestos',presupuestosRutas)
    }
    iniciar():void
    {
        this.app.listen(this.app.get('port'),()=>{
            console.log("se inicio el servidor")
        });
    }
}
const servidor =  new Server();
servidor.iniciar();