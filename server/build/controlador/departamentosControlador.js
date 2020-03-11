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
class DepartamentosControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familias = yield base_datos_1.default.query('SELECT * FROM vdepartamentos');
            res.json(familias);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const familias = yield base_datos_1.default.query('SELECT * FROM  vdepartamentos WHERE codigo=?', [id]);
            if (familias.length > 0) {
                return res.json(familias[0]);
                console.log(familias);
            }
            res.status(404).json({ text: 'el departamento no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pais = req.body.pais;
            const nombre = req.body.nombre;
            const id = yield base_datos_1.default.query('SELECT codigo FROM paises WHERE nombre =?', pais);
            JSON.stringify(id); //CONVIERTE LA CONSULTA A UN JSON
            const codigopaises = id[0].codigo; //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            const values = { codigopaises, nombre };
            yield base_datos_1.default.query('INSERT INTO departamentos  SET ?', values);
            res.json({ message: "el departamentoo fue guardada" });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pais = req.body.pais;
            const nombre = req.body.nombre;
            const idpais = yield base_datos_1.default.query('SELECT codigo FROM paises WHERE nombre =?', pais);
            JSON.stringify(idpais); //CONVIERTE LA CONSULTA A UN JSON
            const codigopaises = idpais[0].codigo; //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            const values = { codigopaises, nombre };
            const marcas = yield base_datos_1.default.query('UPDATE paises SET ? WHERE codigo = ?', [values, id]);
            res.json({ message: 'el departamento fue actualizado' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield base_datos_1.default.query('DELETE FROM departamentos WHERE codigo=?', [id]);
            res.json({ message: 'el departamento fue eliminada' });
        });
    }
    listarPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pais = yield base_datos_1.default.query('SELECT * FROM paises');
            res.json(pais);
        });
    }
}
exports.departamentoControlador = new DepartamentosControlador();
