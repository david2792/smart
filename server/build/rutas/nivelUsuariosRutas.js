"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nivelusuariosControlador_1 = require("../controlador/nivelusuariosControlador");
class NivelRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', nivelusuariosControlador_1.nivelControlador.listar);
        this.router.get('/:id', nivelusuariosControlador_1.nivelControlador.listarUno);
        this.router.post('/', nivelusuariosControlador_1.nivelControlador.crear);
        this.router.delete('/:id', nivelusuariosControlador_1.nivelControlador.eliminar);
        this.router.put('/:id', nivelusuariosControlador_1.nivelControlador.actualiar);
    }
}
const nivelRutas = new NivelRutas();
exports.default = nivelRutas.router;
