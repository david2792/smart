"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcasControlador_1 = require("../controlador/marcasControlador");
class MarcaRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', marcasControlador_1.marcasControlador.listar);
        this.router.get('/:id', marcasControlador_1.marcasControlador.listarUno);
        this.router.post('/', marcasControlador_1.marcasControlador.crear);
        this.router.delete('/:id', marcasControlador_1.marcasControlador.eliminar);
        this.router.put('/:id', marcasControlador_1.marcasControlador.actualiar);
    }
}
const marcasRutas = new MarcaRutas();
exports.default = marcasRutas.router;
