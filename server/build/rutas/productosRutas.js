"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControlador_1 = require("../controlador/productosControlador");
class ProductosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosControlador_1.productoControlador.listar);
        this.router.get('/categoria', productosControlador_1.productoControlador.listarCategoria);
        this.router.get('/marca', productosControlador_1.productoControlador.listarMarcas);
        this.router.get('/unidades', productosControlador_1.productoControlador.listarMedida);
        this.router.get('/presentacion', productosControlador_1.productoControlador.listarPresentacion);
        this.router.get('/impuesto', productosControlador_1.productoControlador.listarImpuesto);
        this.router.get('/:id', productosControlador_1.productoControlador.listarUno);
        this.router.post('/', productosControlador_1.productoControlador.crear);
        //  this.router.delete('/:id',categoriaControlador.eliminar);
        this.router.put('/:id', productosControlador_1.productoControlador.actualizar);
    }
}
const productosRutas = new ProductosRutas();
exports.default = productosRutas.router;
