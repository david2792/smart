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
class UusuarioControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield base_datos_1.default.query('SELECT * FROM vusuarios');
            res.json(usuario);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield base_datos_1.default.query('SELECT * FROM  vusuarios WHERE codigo=?', [id]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: 'el usuario no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivel = req.body.nivel;
            const sucursal = req.body.sucursal;
            const id = yield base_datos_1.default.query('SELECT codigo FROM nivelusuario WHERE nombre =?', nivel);
            JSON.stringify(id);
            const codigonivelusuario = id[0].codigo;
            const idsucursal = yield base_datos_1.default.query('SELECT codigo FROM sucursal WHERE nombre =?', sucursal);
            JSON.stringify(idsucursal);
            const codigosucursal = idsucursal[0].codigo;
            const cedula = req.body.cedula;
            const nombre = req.body.nombre;
            const apellido = req.body.apellido;
            const fechanacimiento = req.body.fechanacimiento;
            const direccion = req.body.direccion;
            const telefono = req.body.telefono;
            const email = req.body.email;
            const usuario = req.body.usuario;
            const clave = req.body.clave;
            const values = { codigonivelusuario, codigosucursal, cedula, nombre, apellido, fechanacimiento, direccion, telefono, email, usuario, clave };
            yield base_datos_1.default.query('INSERT INTO usuarios  SET ?', values);
            res.json({ message: "el usuario fue guardado" });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const nivel = req.body.nivel;
            const sucursal = req.body.sucursal;
            const idnivel = yield base_datos_1.default.query('SELECT codigo FROM nivelusuario WHERE nombre =?', nivel);
            JSON.stringify(idnivel);
            const codigonivelusuario = idnivel[0].codigo;
            const idsucursal = yield base_datos_1.default.query('SELECT codigo FROM sucursal WHERE nombre =?', sucursal);
            JSON.stringify(idsucursal);
            const codigosucursal = idsucursal[0].codigo;
            const cedula = req.body.cedula;
            const nombre = req.body.nombre;
            const apellido = req.body.apellido;
            const fechanacimiento = req.body.fechanacimiento;
            const direccion = req.body.direccion;
            const telefono = req.body.telefono;
            const email = req.body.email;
            const usuario = req.body.usuario;
            const clave = req.body.clave;
            const values = { codigonivelusuario, codigosucursal, cedula, nombre, apellido, fechanacimiento, direccion, telefono, email, usuario, clave };
            const marcas = yield base_datos_1.default.query('UPDATE usuarios SET ? WHERE codigo = ?', [values, id]);
            res.json({ message: 'el usuario fue actualizado' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield base_datos_1.default.query('DELETE FROM departamentos WHERE codigo=?', [id]);
            res.json({ message: 'el departamento fue eliminada' });
        });
    }
    listarNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivel = yield base_datos_1.default.query('SELECT * FROM nivelusuario');
            res.json(nivel);
        });
    }
    listarSucursal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sucursal = yield base_datos_1.default.query('SELECT * FROM Sucursal');
            res.json(sucursal);
        });
    }
}
exports.usuarioControlador = new UusuarioControlador();
