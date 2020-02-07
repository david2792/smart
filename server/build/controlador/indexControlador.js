"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControlador {
    index(req, res) {
        res.json({ tex: '/api/ ' });
    }
}
exports.indexControlador = new IndexControlador();
