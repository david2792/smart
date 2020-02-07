"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presentacionesControlador_1 = require("../controlador/presentacionesControlador");
class PresentacionRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', presentacionesControlador_1.presentacionControlador.listar);
        this.router.get('/:id', presentacionesControlador_1.presentacionControlador.listarUno);
        this.router.post('/', presentacionesControlador_1.presentacionControlador.crear);
        this.router.delete('/:id', presentacionesControlador_1.presentacionControlador.eliminar);
        this.router.put('/:id', presentacionesControlador_1.presentacionControlador.actualiar);
    }
}
const presentacionRutas = new PresentacionRutas();
exports.default = presentacionRutas.router;
