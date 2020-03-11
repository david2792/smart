"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_datos_1 = __importDefault(require("../base_datos"));
class NivelControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marcas = yield base_datos_1.default.query('SELECT * FROM nivelusuario');
            res.json(marcas);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('SELECT * FROM nivelusuario WHERE codigo=?', [id]);
            if (marcas.length > 0) {
                return res.json(marcas[0]);
                console.log(marcas);
            }
            res.status(404).json({ text: 'La nivelusuario no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield base_datos_1.default.query('INSERT INTO nivelusuario set ?', [req.body]);
            res.json({ message: "nivelusuario GUARDADO" });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('DELETE FROM nivelusuario WHERE codigo=?', [id]);
            res.json({ message: 'La nivelusuario fue eliminado' });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('UPDATE nivelusuario SET ? WHERE codigo = ?', [req.body, id]);
            res.json({ message: 'nivelusuario fue actualizada' });
        });
    }
}
exports.nivelControlador = new NivelControlador();
