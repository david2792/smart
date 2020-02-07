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
class CategoriaControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familias = yield base_datos_1.default.query('SELECT * FROM vfamilia');
            res.json(familias);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const familias = yield base_datos_1.default.query('SELECT * FROM  vfamilia WHERE codigo=?', [id]);
            if (familias.length > 0) {
                return res.json(familias[0]);
                console.log(familias);
            }
            res.status(404).json({ text: 'La categoria no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familia = req.body.familia;
            const nombre = req.body.nombre;
            console.log(familia);
            const id = yield base_datos_1.default.query('SELECT codigo FROM familias WHERE nombre =?', familia);
            JSON.stringify(id); //CONVIERTE LA CONSULTA A UN JSON
            const codigofamilia = id[0].codigo; //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            // console.log(codigofamilia); NUESTRA EN CONSOLA EL CODIGO DE LA CATEGORIA
            const values = { codigofamilia, nombre };
            yield base_datos_1.default.query('INSERT INTO categorias  SET ?', values);
            res.json({ message: "la categoria fue guardada" });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const familia = req.body.familia;
            const nombre = req.body.nombre;
            console.log(familia);
            const idfamilia = yield base_datos_1.default.query('SELECT codigo FROM familias WHERE nombre =?', familia);
            JSON.stringify(idfamilia); //CONVIERTE LA CONSULTA A UN JSON
            const codigofamilia = idfamilia[0].codigo; //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            console.log(codigofamilia); //NUESTRA EN CONSOLA EL CODIGO DE LA CATEGORIA
            const values = { codigofamilia, nombre };
            const marcas = yield base_datos_1.default.query('UPDATE categorias SET ? WHERE codigo = ?', [values, id]);
            res.json({ message: 'La categoria fue actualizada' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield base_datos_1.default.query('DELETE FROM categorias WHERE codigo=?', [id]);
            res.json({ message: 'La categoria fue eliminada' });
        });
    }
    listarFamilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familia = yield base_datos_1.default.query('SELECT * FROM familias');
            res.json(familia);
        });
    }
}
exports.categoriaControlador = new CategoriaControlador();
