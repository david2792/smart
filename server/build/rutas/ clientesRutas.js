"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesControlador_1 = require("../controlador/clientesControlador");
class ClientesRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/ciudad', clientesControlador_1.clienteControlador.listarCiudad);
        this.router.get('/', clientesControlador_1.clienteControlador.listar);
        this.router.get('/:id', clientesControlador_1.clienteControlador.listarUno);
        this.router.post('/', clientesControlador_1.clienteControlador.crear);
        this.router.put('/:id', clientesControlador_1.clienteControlador.actualiar);
    }
}
const clienteRutas = new ClientesRutas();
exports.default = clienteRutas.router;
