"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sucursalControlador_1 = require("../controlador/sucursalControlador");
class SucursalesRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sucursalControlador_1.sucursalControlador.listar);
        this.router.get('/empresa', sucursalControlador_1.sucursalControlador.listarEmpresa);
        this.router.get('/:id', sucursalControlador_1.sucursalControlador.listarUno);
        this.router.post('/', sucursalControlador_1.sucursalControlador.crear);
        this.router.delete('/:id', sucursalControlador_1.sucursalControlador.eliminar);
        this.router.put('/:id', sucursalControlador_1.sucursalControlador.actualiar);
    }
}
const sucursalesRutas = new SucursalesRutas();
exports.default = sucursalesRutas.router;
