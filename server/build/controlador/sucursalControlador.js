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
class SucursalControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sucursal = yield base_datos_1.default.query('SELECT * FROM vsucursal');
            res.json(sucursal);
        });
    }
    listarEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa = yield base_datos_1.default.query('SELECT * FROM empresas');
            res.json(empresa);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const sucursal = yield base_datos_1.default.query('SELECT * FROM vsucursal WHERE codigosucursal=?', [id]);
            if (sucursal.length > 0) {
                return res.json(sucursal[0]);
            }
            res.status(404).json({ text: 'La sucursal no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa = req.body.empresa;
            const codigo = req.body.codigo;
            const nombre = req.body.nombre;
            const telefono = req.body.telefono;
            const id = yield base_datos_1.default.query('SELECT codigo FROM empresas WHERE razonsocial =?', empresa);
            JSON.stringify(id); //CONVIERTE LA CONSULTA A UN JSON
            const codigoempresas = id[0].codigo; //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            const values = { codigo, nombre, telefono, codigoempresas };
            yield base_datos_1.default.query('INSERT INTO sucursal  SET ?', values);
            res.json({ message: "la sucursal fue guardada" });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresa = yield base_datos_1.default.query('DELETE FROM sucursal WHERE codigo=?', [id]);
            res.json({ message: 'La empresa fue eliminado' });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresa = req.body.empresa;
            console.log(empresa);
            const codigo = req.body.codigo;
            const nombre = req.body.nombre;
            const telefono = req.body.telefono;
            const idempresa = yield base_datos_1.default.query('SELECT codigo FROM empresas WHERE razonsocial =?', empresa);
            JSON.stringify(idempresa); //CONVIERTE LA CONSULTA A UN JSON
            const codigoempresas = idempresa[0].codigo; //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            const values = { codigo, nombre, telefono, codigoempresas };
            const sucursal = yield base_datos_1.default.query('UPDATE sucursal SET ? WHERE codigosucursal = ?', [values, id]);
            res.json({ message: 'La empresa fue actualizada' });
        });
    }
}
exports.sucursalControlador = new SucursalControlador();
