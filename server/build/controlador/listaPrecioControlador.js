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
class ListaPrecio {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield base_datos_1.default.query('SELECT * FROM vproductos');
            res.json(productos);
        });
    }
    recuperarCodigo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigomaximo = yield base_datos_1.default.query('SELECT MAX(CodigoProducto) as codigo FROM productos');
            JSON.stringify(codigomaximo);
            const codigo = codigomaximo[0].codigo;
            res.json(codigo + 1);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield base_datos_1.default.query('SELECT * FROM  vlistaprecio WHERE CodigoProducto=?', [id]);
            if (productos.length > 0) {
                return res.json(productos);
            }
            else {
                const { id } = req.params;
                const productos = yield base_datos_1.default.query('SELECT * FROM  vproductolista WHERE CodigoProducto=?', [id]);
                if (productos.length > 0) {
                    return res.json(productos);
                    console.log(productos);
                }
            }
            res.status(404).json({ text: 'El producto no existe' });
        });
    }
    listarUnProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield base_datos_1.default.query('SELECT * FROM  vproductos WHERE CodigoProducto=?', [id]);
            if (productos.length > 0) {
                return res.json(productos);
                console.log(productos);
            }
            res.status(404).json({ text: 'El producto no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoDeposito = req.body.codigoDeposito;
            const CodigoProducto = req.body.CodigoProducto;
            const Descripcion = req.body.Descripcion;
            const Precio = req.body.Precio;
            const Porcentaje = req.body.Porcentaje;
            const PrecioCompra = req.body.PrecioCompra;
            const Cuotas = req.body.Cuotas;
            const lista = { codigoDeposito, CodigoProducto, Descripcion, Precio, Porcentaje, PrecioCompra, Cuotas }; // datos de productos
            console.log(lista);
            try {
                yield base_datos_1.default.query("START TRANSACTION"); // se inica la transaccion
                yield base_datos_1.default.query('INSERT INTO listaprecios  SET ?', lista); // se inserta los datos en la tabla productos
                yield base_datos_1.default.query("COMMIT"); // se confirma la transaccion
                res.json({ message: "el producto fue guardado" });
            }
            catch (error) {
                yield base_datos_1.default.query("ROLLBACK");
                console.log("ocurrio un error: " + error);
                throw error;
            }
        });
    }
}
exports.listaPrecioControlador = new ListaPrecio();
