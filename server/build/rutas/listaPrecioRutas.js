"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listaPrecioControlador_1 = require("../controlador/listaPrecioControlador");
class ListaPrecioRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //  this.router.get('/',listaPrecioControlador.listar);
        this.router.get('/:id', listaPrecioControlador_1.listaPrecioControlador.listarUno);
        this.router.post('/:id', listaPrecioControlador_1.listaPrecioControlador.crear);
    }
}
const listaPrecioRutas = new ListaPrecioRutas();
exports.default = listaPrecioRutas.router;
