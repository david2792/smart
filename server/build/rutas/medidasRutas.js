"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medidasControlador_1 = require("../controlador/medidasControlador");
class MedidasRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', medidasControlador_1.medidasControlador.listar);
        this.router.get('/:id', medidasControlador_1.medidasControlador.listarUno);
        this.router.post('/', medidasControlador_1.medidasControlador.crear);
        this.router.delete('/:id', medidasControlador_1.medidasControlador.eliminar);
        this.router.put('/:id', medidasControlador_1.medidasControlador.actualiar);
    }
}
const medidasRutas = new MedidasRutas();
exports.default = medidasRutas.router;
