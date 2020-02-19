"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ciudadesControlador_1 = require("../controlador/ciudadesControlador");
class CiudadRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/departamento', ciudadesControlador_1.ciudadesControlador.listarDepartamento);
        this.router.get('/', ciudadesControlador_1.ciudadesControlador.listar);
        this.router.get('/:id', ciudadesControlador_1.ciudadesControlador.listarUno);
        this.router.post('/', ciudadesControlador_1.ciudadesControlador.crear);
        this.router.put('/:id', ciudadesControlador_1.ciudadesControlador.actualiar);
    }
}
const ciudadRutas = new CiudadRutas();
exports.default = ciudadRutas.router;
