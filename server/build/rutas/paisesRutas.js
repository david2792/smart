"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisesControlador_1 = require("../controlador/paisesControlador");
class PaisesRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', paisesControlador_1.paisControlador.listar);
        this.router.get('/:id', paisesControlador_1.paisControlador.listarUno);
        this.router.post('/', paisesControlador_1.paisControlador.crear);
        this.router.delete('/:id', paisesControlador_1.paisControlador.eliminar);
        this.router.put('/:id', paisesControlador_1.paisControlador.actualiar);
    }
}
const paisesRutas = new PaisesRutas();
exports.default = paisesRutas.router;
