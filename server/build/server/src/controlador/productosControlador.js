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
class ProductoControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield base_datos_1.default.query('SELECT * FROM vproductos');
            res.json(productos);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield base_datos_1.default.query('SELECT * FROM  vproductos WHERE codigoproducto=?', [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
                console.log(productos);
            }
            res.status(404).json({ text: 'El producto no existe' });
        });
    }
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigobarra } = req.params;
            const marcas = yield base_datos_1.default.query('UPDATE productos SET ? WHERE codigoproducto = ?', [req.body, codigobarra]);
            res.json({ message: 'El producto fue actualizado' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se captura el ultimo codigo
            console.log('hola');
            const codigomaximo = yield base_datos_1.default.query('SELECT MAX(codigoproducto) as codigo FROM productos');
            JSON.stringify(codigomaximo);
            const codigo = codigomaximo[0].codigo;
            //console.log(JSON.stringify());
            const categoria = req.body.categoria;
            console.log(categoria);
            const id = yield base_datos_1.default.query('SELECT codigo FROM categorias WHERE nombre =?', categoria);
            JSON.stringify(id); //CONVIERTE LA CONSULTA A UN JSON
            //CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
            // console.log(codigofamilia); NUESTRA EN CONSOLA EL CODIGO DE LA CATEGORIA
            // se inicia recuperando los datos de la tabla productos
            const codigoproducto = codigo + 1;
            const codigocategoria = 1;
            const codigomarca = req.body.codigomarca;
            const codigounidadmedida = req.body.codigounidadmedida;
            const codigopresentacion = req.body.codigopresentacion;
            const codigoimpuesto = req.body.codigoimpuesto;
            //const codigoeposito = req.body.codigodeposito;
            const codigobarra = req.body.codigobarra;
            const descripcion = req.body.descripcion;
            const cantidadpresentacion = req.body.cantidadpresentacion;
            const perecedero = req.body.perecedero;
            const imagen = req.body.imagen;
            const estado = req.body.estado;
            const productos = { codigoproducto, codigocategoria, codigomarca, codigounidadmedida, codigopresentacion,
                codigoimpuesto, codigobarra, descripcion, cantidadpresentacion, perecedero, imagen, estado }; // datos de productos
            // se recupera los datos del detalle
            const codigodeposito = req.body.codigodeposito;
            const stockactual = req.body.stockactual;
            const stockminimo = req.body.stockminimo;
            const stockmaximo = req.body.stockmaximo;
            const preciocompra = req.body.preciocompra;
            const precioventaminorista = req.body.precioventaminorista;
            const preciomayorista = req.body.preciomayorista;
            const limitedescuento = req.body.limitedescuento;
            const fechacreacion = req.body.fechacreacion;
            const fechamodificacion = req.body.fechamodificacion;
            const fechaultimaventa = req.body.fechaultimaventa;
            const stock = { codigodeposito, codigoproducto, stockactual, stockminimo, stockmaximo, preciocompra, precioventaminorista,
                preciomayorista, limitedescuento, fechacreacion, fechamodificacion, fechaultimaventa };
            try {
                yield base_datos_1.default.query("START TRANSACTION"); // se inica la transaccion
                yield base_datos_1.default.query('INSERT INTO productos  SET ?', productos); // se inserta los datos en la tabla productos
                yield base_datos_1.default.query('INSERT INTO stock  SET ?', stock); // se inserta los datos en la tabla stock
                yield base_datos_1.default.query("COMMIT"); // se confirma la transaccion
                res.json({ message: "el producto fue guardado" });
            }
            catch (error) {
                yield base_datos_1.default.query("ROLLBACK");
                console.log("ocurrio un error >" + error);
                throw error;
            }
        });
    }
    listarFamilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familia = yield base_datos_1.default.query('SELECT * FROM familias');
            res.json(familia);
        });
    }
    listarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familias = yield base_datos_1.default.query('SELECT * FROM vfamilia');
            res.json(familias);
        });
    }
    listarImpuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const unidad = yield base_datos_1.default.query('SELECT * FROM impuestos');
            res.json(unidad);
        });
    }
    listarMarcas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marcas = yield base_datos_1.default.query('SELECT * FROM marcas');
            res.json(marcas);
        });
    }
    listarMedida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const unidad = yield base_datos_1.default.query('SELECT * FROM unidadesmedida');
            res.json(unidad);
        });
    }
    listarPresentacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const presentaciones = yield base_datos_1.default.query('SELECT * FROM presentaciones');
            res.json(presentaciones);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('DELETE FROM productos WHERE codigoproducto=?', [id]);
            res.json({ message: 'La el producto fue eliminado' });
        });
    }
}
exports.productoControlador = new ProductoControlador();
