import {Request, Response} from 'express';
import pool from '../../base_datos';

class PresupuestoControlador
{
 public async listar (req:Request,res:Response){
    const marcas = await pool.query('SELECT * FROM vpresupuesto');
    res.json(marcas);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const marcas =  await pool.query('SELECT * FROM vpresupuestos WHERE codigo=?',[id]);
    if(marcas.length > 0){
      return res.json(marcas[0]);
      console.log(marcas);
    }
    res.status(404).json({text:'El pais no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
      // se consulta el codigo del presupuesto

    const numeromaximo= await pool.query('SELECT MAX(numero) as codigo FROM presupuestos');
    JSON.stringify(numeromaximo);
     const codigo = numeromaximo[0].codigo;
    // se consulta por el codigo cliente
    const cliente= req.body.cliente;
    console.log(cliente);
    const idcliente= await pool.query('SELECT codigo FROM clientes WHERE razonsocial =?',cliente);
    JSON.stringify(idcliente);
    // se consulta por el codigo Producto
    const producto= req.body.detallespresupuestos.producto;
    // console.log(producto);
    // const idproducto= await pool.query('SELECT codigoproducto FROM vproductos WHERE descripcion =?',producto);
    // JSON.stringify(idproducto);
    // se capturan los datos del presupuesto
    const numero = codigo+1
    const codigocliente = idcliente[0].codigo;
    const fecha = req.body.fecha;
    const estado = req.body.estado;
    const presupuestos = {numero,fecha,estado,codigocliente}
   
    //detalle de presupuesto
    const codigoproducto = producto
    const numeropresupuesto =numero;
    const precio = req.body.detallespresupuestos.precio;
    const codigoimpuesto = req.body.detallespresupuestos.impuesto;
    const cantidad = req.body.detallespresupuestos.cantidad;
    const detallespresupuestos=[{codigoproducto,numeropresupuesto,cantidad,precio,codigoimpuesto}]

    console.log(presupuestos);
    console.log(detallespresupuestos);
    try {
        await pool.query("START TRANSACTION");// se inica la transaccion
        await pool.query('INSERT INTO presupuestos SET ?',presupuestos);// se inserta los datos en la tabla productos
        await pool.query('INSERT INTO detallespresupuestos  SET ?',[detallespresupuestos]);// se inserta los datos en la tabla stock
        
       
        await pool.query("COMMIT");// se confirma la transaccion
        res.json({message:"el producto fue guardado"});
   } catch (error) {
    await pool.query("ROLLBACK");
    console.log("ocurrio un error: "+error);
    throw error
   }
  }


  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE paises SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'El pais fue actualizada'});
  }

  public async listarCliente (req:Request,res:Response){
   
    const clientes = await pool.query('SELECT razonsocial FROM clientes');
    res.json(clientes);
  } 

  public async listarProducto (req:Request,res:Response){
   
    const familia = await pool.query('SELECT descripcion FROM productos');
    res.json(familia);
  } 
}

export const presupuestoControlador = new PresupuestoControlador();