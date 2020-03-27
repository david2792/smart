"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presupuestoControlador_1 = require("../../controlador/administrativoPresupuesto/presupuestoControlador");
class PresupuestoRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', presupuestoControlador_1.presupuestoControlador.listar);
        this.router.get('/:id', presupuestoControlador_1.presupuestoControlador.listarUno);
        this.router.post('/', presupuestoControlador_1.presupuestoControlador.crear);
        this.router.put('/:id', presupuestoControlador_1.presupuestoControlador.actualiar);
        this.router.get('/clientes', presupuestoControlador_1.presupuestoControlador.listarCliente);
        this.router.get('/productos', presupuestoControlador_1.presupuestoControlador.listarProducto);
        this.router.get('/productosvista', presupuestoControlador_1.presupuestoControlador.listarProductoVista);
        this.router.get('/:id', presupuestoControlador_1.presupuestoControlador.listarUnProducto);
    }
}
const presupuestoRutas = new PresupuestoRutas();
exports.default = presupuestoRutas.router;
