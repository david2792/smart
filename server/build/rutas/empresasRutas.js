"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresasControlador_1 = require("../controlador/empresasControlador");
class EmpresasRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', empresasControlador_1.empresaControlador.listar);
        this.router.get('/:id', empresasControlador_1.empresaControlador.listarUno);
        this.router.post('/', empresasControlador_1.empresaControlador.crear);
        this.router.delete('/:id', empresasControlador_1.empresaControlador.eliminar);
        this.router.put('/:id', empresasControlador_1.empresaControlador.actualiar);
    }
}
const empresasRutas = new EmpresasRutas();
exports.default = empresasRutas.router;
