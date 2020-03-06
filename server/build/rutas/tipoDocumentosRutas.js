"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipodocumentosControlador_1 = require("../controlador/tipodocumentosControlador");
class TipoDocumentosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipodocumentosControlador_1.tipodocumentoControlador.listar);
        this.router.get('/:id', tipodocumentosControlador_1.tipodocumentoControlador.listarUno);
        this.router.post('/', tipodocumentosControlador_1.tipodocumentoControlador.crear);
        this.router.delete('/:id', tipodocumentosControlador_1.tipodocumentoControlador.eliminar);
        this.router.put('/:id', tipodocumentosControlador_1.tipodocumentoControlador.actualiar);
    }
}
const tipoDocumentosRutas = new TipoDocumentosRutas();
exports.default = tipoDocumentosRutas.router;
