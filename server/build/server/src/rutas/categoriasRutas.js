"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasControlador_1 = require("../controlador/categoriasControlador");
class CategoriaRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/familia', categoriasControlador_1.categoriaControlador.listarFamilia);
        this.router.get('/', categoriasControlador_1.categoriaControlador.listar);
        this.router.get('/:id', categoriasControlador_1.categoriaControlador.listarUno);
        this.router.post('/', categoriasControlador_1.categoriaControlador.crear);
        this.router.delete('/:id', categoriasControlador_1.categoriaControlador.eliminar);
        this.router.put('/:id', categoriasControlador_1.categoriaControlador.actualiar);
    }
}
const categoriaRutas = new CategoriaRutas();
exports.default = categoriaRutas.router;
