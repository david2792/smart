"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosControlador_1 = require("../controlador/departamentosControlador");
class DepartamentoRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/pais', departamentosControlador_1.departamentoControlador.listarPais);
        this.router.get('/', departamentosControlador_1.departamentoControlador.listar);
        this.router.get('/:id', departamentosControlador_1.departamentoControlador.listarUno);
        this.router.post('/', departamentosControlador_1.departamentoControlador.crear);
        this.router.put('/:id', departamentosControlador_1.departamentoControlador.actualiar);
    }
}
const departamentoRutas = new DepartamentoRutas();
exports.default = departamentoRutas.router;
