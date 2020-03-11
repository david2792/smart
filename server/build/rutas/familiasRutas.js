"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const familiasControlador_1 = require("../controlador/familiasControlador");
class FamiliarRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', familiasControlador_1.familiaControlador.listar);
        this.router.get('/:id', familiasControlador_1.familiaControlador.listarUno);
        this.router.post('/', familiasControlador_1.familiaControlador.crear);
        this.router.delete('/:id', familiasControlador_1.familiaControlador.eliminar);
        this.router.put('/:id', familiasControlador_1.familiaControlador.actualiar);
    }
}
const familiaRutas = new FamiliarRutas();
exports.default = familiaRutas.router;
