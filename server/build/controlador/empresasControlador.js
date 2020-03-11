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
class EmpresasControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa = yield base_datos_1.default.query('SELECT * FROM empresas');
            res.json(empresa);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresa = yield base_datos_1.default.query('SELECT * FROM empresas WHERE codigo=?', [id]);
            if (empresa.length > 0) {
                return res.json(empresa[0]);
            }
            res.status(404).json({ text: 'La empresa no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield base_datos_1.default.query('INSERT INTO empresas set ?', [req.body]);
            res.json({ message: "EMPRESA GUARDADA" });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresa = yield base_datos_1.default.query('DELETE FROM empresas WHERE codigo=?', [id]);
            res.json({ message: 'La empresa fue eliminado' });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresa = yield base_datos_1.default.query('UPDATE empresas SET ? WHERE codigo = ?', [req.body, id]);
            res.json({ message: 'La empresa fue actualizada' });
        });
    }
}
exports.empresaControlador = new EmpresasControlador();
