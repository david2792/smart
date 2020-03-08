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
const base_datos_1 = __importDefault(require("../../base_datos"));
class PresupuestoControlador {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marcas = yield base_datos_1.default.query('SELECT * FROM vpresupuesto');
            res.json(marcas);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('SELECT * FROM vpresupuestos WHERE codigo=?', [id]);
            if (marcas.length > 0) {
                return res.json(marcas[0]);
                console.log(marcas);
            }
            res.status(404).json({ text: 'El pais no existe' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // se consulta el codigo del presupuesto
            const numeromaximo = yield base_datos_1.default.query('SELECT MAX(numero) as codigo FROM presupuestos');
            JSON.stringify(numeromaximo);
            const codigo = numeromaximo[0].codigo;
            // se consulta por el codigo cliente
            const cliente = req.body.cliente;
            console.log(cliente);
            const idcliente = yield base_datos_1.default.query('SELECT codigo FROM clientes WHERE razonsocial =?', cliente);
            JSON.stringify(idcliente);
            // se consulta por el codigo Producto
            const producto = req.body.detallespresupuestos.producto;
            // console.log(producto);
            // const idproducto= await pool.query('SELECT codigoproducto FROM vproductos WHERE descripcion =?',producto);
            // JSON.stringify(idproducto);
            // se capturan los datos del presupuesto
            const numero = codigo + 1;
            const codigocliente = idcliente[0].codigo;
            const fecha = req.body.fecha;
            const estado = req.body.estado;
            const presupuestos = { numero, fecha, estado, codigocliente };
            //detalle de presupuesto
            const codigoproducto = producto;
            const numeropresupuesto = numero;
            const precio = req.body.detallespresupuestos.precio;
            const codigoimpuesto = req.body.detallespresupuestos.impuesto;
            const cantidad = req.body.detallespresupuestos.cantidad;
            const detallespresupuestos = [{ codigoproducto, numeropresupuesto, cantidad, precio, codigoimpuesto }];
            console.log(presupuestos);
            console.log(detallespresupuestos);
            try {
                yield base_datos_1.default.query("START TRANSACTION"); // se inica la transaccion
                yield base_datos_1.default.query('INSERT INTO presupuestos SET ?', presupuestos); // se inserta los datos en la tabla productos
                yield base_datos_1.default.query('INSERT INTO detallespresupuestos  SET ?', [detallespresupuestos]); // se inserta los datos en la tabla stock
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
    actualiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const marcas = yield base_datos_1.default.query('UPDATE paises SET ? WHERE codigo = ?', [req.body, id]);
            res.json({ message: 'El pais fue actualizada' });
        });
    }
    listarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield base_datos_1.default.query('SELECT razonsocial FROM clientes');
            res.json(clientes);
        });
    }
    listarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const familia = yield base_datos_1.default.query('SELECT descripcion FROM productos');
            res.json(familia);
        });
    }
}
exports.presupuestoControlador = new PresupuestoControlador();
