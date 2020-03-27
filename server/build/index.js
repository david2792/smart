"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRutas_1 = __importDefault(require("./rutas/indexRutas"));
const marcasRutas_1 = __importDefault(require("./rutas/marcasRutas"));
const medidasRutas_1 = __importDefault(require("./rutas/medidasRutas"));
const impuestosRutas_1 = __importDefault(require("./rutas/impuestosRutas"));
const presentacionesRutas_1 = __importDefault(require("./rutas/presentacionesRutas"));
const familiasRutas_1 = __importDefault(require("./rutas/familiasRutas"));
const categoriasRutas_1 = __importDefault(require("./rutas/categoriasRutas"));
const productosRutas_1 = __importDefault(require("./rutas/productosRutas"));
const empresasRutas_1 = __importDefault(require("./rutas/empresasRutas"));
const sucursalesRutas_1 = __importDefault(require("./rutas/sucursalesRutas"));
const paisesRutas_1 = __importDefault(require("./rutas/paisesRutas"));
const departamentosRutas_1 = __importDefault(require("./rutas/departamentosRutas"));
const ciudadesRutas_1 = __importDefault(require("./rutas/ciudadesRutas"));
const _clientesRutas_1 = __importDefault(require("./rutas/ clientesRutas"));
const usuariosRutas_1 = __importDefault(require("./rutas/usuariosRutas"));
const nivelUsuariosRutas_1 = __importDefault(require("./rutas/nivelUsuariosRutas"));
const tipoDocumentosRutas_1 = __importDefault(require("./rutas/tipoDocumentosRutas"));
const presupuestosRutas_1 = __importDefault(require("./rutas/administrativoPresupuesto/presupuestosRutas"));
const listaPrecioRutas_1 = __importDefault(require("./rutas/listaPrecioRutas"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use(indexRutas_1.default);
        this.app.use('/api/marcas', marcasRutas_1.default);
        this.app.use('/api/unidades', medidasRutas_1.default);
        this.app.use('/api/impuestos', impuestosRutas_1.default);
        this.app.use('/api/presentaciones', presentacionesRutas_1.default);
        this.app.use('/api/familias', familiasRutas_1.default);
        this.app.use('/api/categorias', categoriasRutas_1.default);
        this.app.use('/api/productos', productosRutas_1.default);
        this.app.use('/api/empresas', empresasRutas_1.default);
        this.app.use('/api/sucursales', sucursalesRutas_1.default);
        this.app.use('/api/paises', paisesRutas_1.default);
        this.app.use('/api/departamentos', departamentosRutas_1.default);
        this.app.use('/api/ciudades', ciudadesRutas_1.default);
        this.app.use('/api/clientes', _clientesRutas_1.default);
        this.app.use('/api/usuarios', usuariosRutas_1.default);
        this.app.use('/api/nivelusuarios', nivelUsuariosRutas_1.default);
        this.app.use('/api/tipodocumentos', tipoDocumentosRutas_1.default);
        this.app.use('/api/presupuestos', presupuestosRutas_1.default);
        this.app.use('/api/listaprecio', listaPrecioRutas_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get('port'), () => {
            console.log("se inicio el servidor");
        });
    }
}
const servidor = new Server();
servidor.iniciar();
