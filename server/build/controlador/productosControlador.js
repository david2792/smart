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
            const productos = yield base_datos_1.default.query('SELECT * FROM  vproductos WHERE Codigoproducto=?', [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
                console.log(productos);
            }
            res.status(404).json({ text: 'El producto no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = req.body.Categoria;
            console.log(categoria);
            const id = yield base_datos_1.default.query('SELECT CodigoCategoria FROM categorias WHERE Descripcion =?', categoria);
            JSON.stringify(id); //CONVIERTE LA CONSULTA A UN JSON
            //se capturan los codigos
            const marca = req.body.Marca;
            console.log(marca);
            const idmarca = yield base_datos_1.default.query('SELECT CodigoMarca FROM marcas WHERE Descripcion =?', marca);
            JSON.stringify(idmarca);
            ///
            const impuesto = req.body.Impuesto;
            console.log(impuesto);
            const idimpuesto = yield base_datos_1.default.query('SELECT CodigImpuesto FROM tipoimpuesto WHERE Descripcion =?', impuesto);
            JSON.stringify(idimpuesto);
            ///
            const deposito = req.body.Deposito;
            console.log(deposito);
            const iddeposito = yield base_datos_1.default.query('SELECT codigoDeposito FROM depositos WHERE Nombre =?', deposito);
            JSON.stringify(iddeposito);
            // se inicia recuperando los datos de la tabla productos
            const CodigoProducto = req.body.CodigoProducto;
            const CodigoCategoria = id[0].CodigoCategoria;
            const CodigoMarca = idmarca[0].CodigoMarca;
            const CodigoUnidad = '1';
            const CodigoRepresentante = '1';
            const CodigImpuesto = idimpuesto[0].CodigImpuesto;
            const CodigoBarra = req.body.CodigoBarra;
            const Descripcion = req.body.Descripcion;
            const cantidadpaquete = '0';
            const perecedero = '1';
            const peso = '0';
            const estado = '1';
            const productos = { CodigoProducto, CodigoBarra, Descripcion, cantidadpaquete, peso, perecedero, estado,
                CodigoRepresentante, CodigoUnidad, CodigoMarca, CodigoCategoria, CodigImpuesto }; // datos de productos
            console.log(productos);
            // se recupera los datos del detalle
            const codigoDeposito = iddeposito[0].codigoDeposito;
            const StockActual = req.body.StockActual;
            const StockMinimo = req.body.StockMinimo;
            const StockMaximo = 0;
            const PrecioCompra = 0;
            const PrecioVentaMinorista = 0;
            const PrecioVentaMayorista = 0;
            const UtilidadMinima = 0;
            const UtilidadMaxima = 0;
            const stock = { codigoDeposito, CodigoProducto, StockActual, StockMinimo, StockMaximo, PrecioCompra, UtilidadMinima, UtilidadMaxima, PrecioVentaMinorista,
                PrecioVentaMayorista };
            console.log(stock);
            try {
                yield base_datos_1.default.query("START TRANSACTION"); // se inica la transaccion
                yield base_datos_1.default.query('INSERT INTO productos  SET ?', productos); // se inserta los datos en la tabla productos
                yield base_datos_1.default.query('INSERT INTO stock  SET ?', stock); // se inserta los datos en la tabla stock
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
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = req.body.Categoria;
            console.log(categoria);
            const idcat = yield base_datos_1.default.query('SELECT CodigoCategoria FROM categorias WHERE Descripcion =?', categoria);
            JSON.stringify(id); //CONVIERTE LA CONSULTA A UN JSON
            //se capturan los codigos
            const marca = req.body.Marca;
            console.log(marca);
            const idmarca = yield base_datos_1.default.query('SELECT CodigoMarca FROM marcas WHERE Descripcion =?', marca);
            JSON.stringify(idmarca);
            ///
            const impuesto = req.body.Impuesto;
            console.log(impuesto);
            const idimpuesto = yield base_datos_1.default.query('SELECT CodigImpuesto FROM tipoimpuesto WHERE Descripcion =?', impuesto);
            JSON.stringify(idimpuesto);
            ///
            const deposito = req.body.Deposito;
            console.log(deposito);
            const iddeposito = yield base_datos_1.default.query('SELECT codigoDeposito FROM depositos WHERE Nombre =?', deposito);
            JSON.stringify(iddeposito);
            // se inicia recuperando los datos de la tabla productos
            const CodigoProducto = req.body.CodigoProducto;
            const CodigoCategoria = idcat[0].CodigoCategoria;
            const CodigoMarca = idmarca[0].CodigoMarca;
            const CodigoUnidad = '1';
            const CodigoRepresentante = '1';
            const CodigImpuesto = idimpuesto[0].CodigImpuesto;
            const CodigoBarra = req.body.CodigoBarra;
            const Descripcion = req.body.Descripcion;
            const cantidadpaquete = '0';
            const perecedero = '1';
            const peso = '0';
            const estado = '1';
            const productos = { CodigoProducto, CodigoBarra, Descripcion, cantidadpaquete, peso, perecedero, estado,
                CodigoRepresentante, CodigoUnidad, CodigoMarca, CodigoCategoria, CodigImpuesto }; // datos de productos
            console.log(productos);
            // se recupera los datos del detalle
            const codigoDeposito = iddeposito[0].codigoDeposito;
            const StockActual = req.body.StockActual;
            const StockMinimo = req.body.StockMinimo;
            const StockMaximo = 0;
            const PrecioCompra = 0;
            const PrecioVentaMinorista = 0;
            const PrecioVentaMayorista = 0;
            const UtilidadMinima = 0;
            const UtilidadMaxima = 0;
            const stock = { codigoDeposito, CodigoProducto, StockActual, StockMinimo, StockMaximo, PrecioCompra, UtilidadMinima, UtilidadMaxima, PrecioVentaMinorista,
                PrecioVentaMayorista };
            console.log(stock);
            try {
                yield base_datos_1.default.query("START TRANSACTION"); // se inica la transaccion
                yield base_datos_1.default.query('UPDATE productos  SET ? WHERE codigoproducto = ?', [productos, id]); // se inserta los datos en la tabla productos
                yield base_datos_1.default.query('UPDATE  stock  SET ? WHERE codigoproducto = ?', [stock, id]); // se inserta los datos en la tabla stock
                yield base_datos_1.default.query("COMMIT"); // se confirma la transaccion
                res.json({ message: "el producto fue actualizado" });
            }
            catch (error) {
                yield base_datos_1.default.query("ROLLBACK");
                console.log("ocurrio un error: " + error);
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
            const familias = yield base_datos_1.default.query('SELECT * FROM categorias');
            res.json(familias);
        });
    }
    listarDeposito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deposito = yield base_datos_1.default.query('SELECT * FROM depositos');
            res.json(deposito);
        });
    }
    listarImpuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const unidad = yield base_datos_1.default.query('SELECT * FROM tipoimpuesto');
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
