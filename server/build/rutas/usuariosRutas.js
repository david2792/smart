"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosControlador_1 = require("../controlador/usuariosControlador");
class UsuarioRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/nivel', usuariosControlador_1.usuarioControlador.listarNivel);
        this.router.get('/sucursal', usuariosControlador_1.usuarioControlador.listarSucursal);
        this.router.get('/', usuariosControlador_1.usuarioControlador.listar);
        this.router.get('/:id', usuariosControlador_1.usuarioControlador.listarUno);
        this.router.post('/', usuariosControlador_1.usuarioControlador.crear);
        this.router.put('/:id', usuariosControlador_1.usuarioControlador.actualiar);
    }
}
const usuarioRutas = new UsuarioRutas();
exports.default = usuarioRutas.router;
