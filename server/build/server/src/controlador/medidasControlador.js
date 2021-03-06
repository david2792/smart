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
class MedidasControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const unidad = yield base_datos_1.default.query('SELECT * FROM unidadesmedida');
            res.json(unidad);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const unidad = yield base_datos_1.default.query('SELECT * FROM unidadesmedida WHERE codigo=?', [id]);
            if (unidad.length > 0) {
                return res.json(unidad[0]);
                console.log(unidad);
            }
            res.status(404).json({ text: 'La unidad de medida no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield base_datos_1.default.query('INSERT INTO unidadesmedida set ?', [req.body]);
            res.json({ message: "Unidad de medida guardado" });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('DELETE FROM unidadesmedida WHERE codigo=?', [id]);
            res.json({ message: 'La unidad de medida fue eliminado' });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('UPDATE unidadesmedida SET ? WHERE codigo = ?', [req.body, id]);
            res.json({ message: 'La marca fue actualizada' });
        });
    }
}
exports.medidasControlador = new MedidasControlador();
