"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const impuestosControlador_1 = require("../controlador/impuestosControlador");
class ImpuestosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', impuestosControlador_1.impuestoControlador.listar);
        this.router.get('/:id', impuestosControlador_1.impuestoControlador.listarUno);
        this.router.post('/', impuestosControlador_1.impuestoControlador.crear);
        this.router.delete('/:id', impuestosControlador_1.impuestoControlador.eliminar);
        this.router.put('/:id', impuestosControlador_1.impuestoControlador.actualiar);
    }
}
const impuestosRutas = new ImpuestosRutas();
exports.default = impuestosRutas.router;
