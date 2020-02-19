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
class CiudadesControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familias = yield base_datos_1.default.query('SELECT * FROM vciudades');
            res.json(familias);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const familias = yield base_datos_1.default.query('SELECT * FROM  vciudades WHERE codigo=?', [id]);
            if (familias.length > 0) {
                return res.json(familias[0]);
                console.log(familias);
            }
            res.status(404).json({ text: 'ciudad no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const departamento = req.body.departamento;
            const nombre = req.body.nombre;
            const id = yield base_datos_1.default.query('SELECT codigo FROM departamentos  WHERE nombre =?', departamento);
            JSON.stringify(id);
            const codigodepartamentos = id[0].codigo;
            const values = { codigodepartamentos, nombre };
            yield base_datos_1.default.query('INSERT INTO ciudades  SET ?', values);
            res.json({ message: "la ciudad fue guardada" });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const departamento = req.body.departamento;
            const nombre = req.body.nombre;
            const iddepartamento = yield base_datos_1.default.query('SELECT codigo FROM departamentos WHERE nombre =?', departamento);
            JSON.stringify(iddepartamento);
            const codigodepartamentos = iddepartamento[0].codigo;
            const values = { codigodepartamentos, nombre };
            const marcas = yield base_datos_1.default.query('UPDATE ciudades SET ? WHERE codigo = ?', [values, id]);
            res.json({ message: 'ciudad fue actualizado' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield base_datos_1.default.query('DELETE FROM ciudades WHERE codigo=?', [id]);
            res.json({ message: 'ciudad fue eliminada' });
        });
    }
    listarDepartamento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const departamento = yield base_datos_1.default.query('SELECT * FROM departamentos');
            res.json(departamento);
        });
    }
}
exports.ciudadesControlador = new CiudadesControlador();
