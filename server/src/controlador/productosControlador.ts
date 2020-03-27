import {Request, Response} from 'express';
import pool from '../base_datos';

class ProductoControlador
 {
    public async listar (req:Request,res:Response){
        const productos = await pool.query('SELECT * FROM vproductos');
        res.json(productos);
      }
      
    public async recuperarCodigo(req:Request,res:Response):Promise<any>{
      const codigomaximo= await pool.query('SELECT MAX(CodigoProducto) as codigo FROM productos');
      JSON.stringify(codigomaximo);
      const codigo = codigomaximo[0].codigo;
      res.json(codigo+1)
      
    }
      public async listarUno (req:Request,res:Response):Promise<any>{
        const { id }= req.params;
        const productos =  await pool.query('SELECT * FROM  vproductos WHERE Codigoproducto=?',[id]);
        if(productos.length > 0){
          return res.json(productos[0]);
          console.log(productos);
        }
        res.status(404).json({text:'El producto no existe'});
      
      } 
   
  public async crear(req:Request, res:Response):Promise<void>
  {
  const categoria= req.body.Categoria;
  console.log(categoria);
  const id= await pool.query('SELECT CodigoCategoria FROM categorias WHERE Descripcion =?',categoria);
  JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
  //se capturan los codigos
  const marca= req.body.Marca;
  console.log(marca);
  const idmarca= await pool.query('SELECT CodigoMarca FROM marcas WHERE Descripcion =?',marca);
  JSON.stringify(idmarca);
  ///
    const impuesto= req.body.Impuesto;
    console.log(impuesto);
    const idimpuesto= await pool.query('SELECT CodigImpuesto FROM tipoimpuesto WHERE Descripcion =?',impuesto);
    JSON.stringify(idimpuesto);
      ///
      const deposito= req.body.Deposito;
      console.log(deposito);
      const iddeposito= await pool.query('SELECT codigoDeposito FROM depositos WHERE Nombre =?',deposito);
      JSON.stringify(iddeposito);
  // se inicia recuperando los datos de la tabla productos
  const CodigoProducto = req.body.CodigoProducto;
  const CodigoCategoria = id[0].CodigoCategoria;
   const CodigoMarca= idmarca[0].CodigoMarca;
   const CodigoUnidad ='1';
   const CodigoRepresentante= '1';
   const CodigImpuesto = idimpuesto[0].CodigImpuesto;
   const CodigoBarra= req.body.CodigoBarra;
   const Descripcion = req.body.Descripcion;
   const cantidadpaquete= '0';
   const perecedero ='1';
   const peso ='0';
   const estado = '1';
   const productos={CodigoProducto,CodigoBarra,Descripcion,cantidadpaquete,peso,perecedero,estado,
    CodigoRepresentante,CodigoUnidad,CodigoMarca,CodigoCategoria,CodigImpuesto};// datos de productos

    console.log(productos);

// se recupera los datos del detalle
   const codigoDeposito = iddeposito[0].codigoDeposito;
   const StockActual = req.body.StockActual;
   const StockMinimo = req.body.StockMinimo;
   const StockMaximo = 0;
   const PrecioCompra =0;
   const PrecioVentaMinorista =0;
   const PrecioVentaMayorista =0;
   const UtilidadMinima = 0;
   const UtilidadMaxima = 0;
   const stock = {codigoDeposito,CodigoProducto,StockActual,StockMinimo,StockMaximo,PrecioCompra,UtilidadMinima,UtilidadMaxima,PrecioVentaMinorista,
    PrecioVentaMayorista}
console.log(stock)
   try {
        await pool.query("START TRANSACTION");// se inica la transaccion
        await pool.query('INSERT INTO productos  SET ?',productos);// se inserta los datos en la tabla productos
        await pool.query('INSERT INTO stock  SET ?',stock);// se inserta los datos en la tabla stock
        await pool.query("COMMIT");// se confirma la transaccion
        res.json({message:"el producto fue guardado"});
   } catch (error) {
    await pool.query("ROLLBACK");
    console.log("ocurrio un error: "+error);
    throw error
   }
 
    
  }
  public async actualizar(req:Request, res:Response):Promise<void>
  {
  const { id }= req.params;
  const categoria= req.body.Categoria;
  console.log(categoria);
  const idcat= await pool.query('SELECT CodigoCategoria FROM categorias WHERE Descripcion =?',categoria);
  JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
  //se capturan los codigos
  const marca= req.body.Marca;
  console.log(marca);
  const idmarca= await pool.query('SELECT CodigoMarca FROM marcas WHERE Descripcion =?',marca);
  JSON.stringify(idmarca);
  ///
    const impuesto= req.body.Impuesto;
    console.log(impuesto);
    const idimpuesto= await pool.query('SELECT CodigImpuesto FROM tipoimpuesto WHERE Descripcion =?',impuesto);
    JSON.stringify(idimpuesto);
          ///
      const deposito= req.body.Deposito;
      console.log(deposito);
      const iddeposito= await pool.query('SELECT codigoDeposito FROM depositos WHERE Nombre =?',deposito);
      JSON.stringify(iddeposito);
  // se inicia recuperando los datos de la tabla productos

  const CodigoProducto = req.body.CodigoProducto;
  const CodigoCategoria = idcat[0].CodigoCategoria;
   const CodigoMarca= idmarca[0].CodigoMarca;
   const CodigoUnidad ='1';
   const CodigoRepresentante= '1';
   const CodigImpuesto = idimpuesto[0].CodigImpuesto;
   const CodigoBarra= req.body.CodigoBarra;
   const Descripcion = req.body.Descripcion;
   const cantidadpaquete= '0';
   const perecedero ='1';
   const peso ='0';
   const estado = '1';
   const productos={CodigoProducto,CodigoBarra,Descripcion,cantidadpaquete,peso,perecedero,estado,
    CodigoRepresentante,CodigoUnidad,CodigoMarca,CodigoCategoria,CodigImpuesto};// datos de productos

    console.log(productos);
// se recupera los datos del detalle
    const codigoDeposito = iddeposito[0].codigoDeposito;
    const StockActual = req.body.StockActual;
    const StockMinimo = req.body.StockMinimo;
    const StockMaximo = 0;
    const PrecioCompra =0;
    const PrecioVentaMinorista =0;
    const PrecioVentaMayorista =0;
    const UtilidadMinima = 0;
    const UtilidadMaxima = 0;
    const stock = {codigoDeposito,CodigoProducto,StockActual,StockMinimo,StockMaximo,PrecioCompra,UtilidadMinima,UtilidadMaxima,PrecioVentaMinorista,
    PrecioVentaMayorista}
    console.log(stock)
   try {
        await pool.query("START TRANSACTION");// se inica la transaccion
        await pool.query('UPDATE productos  SET ? WHERE codigoproducto = ?',[productos,id]);// se inserta los datos en la tabla productos
        await pool.query('UPDATE  stock  SET ? WHERE codigoproducto = ?',[stock,id]);// se inserta los datos en la tabla stock
        await pool.query("COMMIT");// se confirma la transaccion
        res.json({message:"el producto fue actualizado"});
   } catch (error) {
    await pool.query("ROLLBACK");
    console.log("ocurrio un error: "+error);
    throw error
   }
 
    
  }
  public async listarFamilia (req:Request,res:Response){
   
    const familia = await pool.query('SELECT * FROM familias');
    res.json(familia);
  } 
  
  public async listarCategoria (req:Request,res:Response){
    const familias = await pool.query('SELECT * FROM categorias');
    res.json(familias);
  }   
  public async listarDeposito (req:Request,res:Response){
    const deposito = await pool.query('SELECT * FROM depositos');
    res.json(deposito);
  } 
  public async listarImpuesto (req:Request,res:Response){
    const unidad = await pool.query('SELECT * FROM tipoimpuesto');
    res.json(unidad);
  } 

  public async listarMarcas (req:Request,res:Response){
    const marcas = await pool.query('SELECT * FROM marcas');
    res.json(marcas);
  } 

  public async listarMedida (req:Request,res:Response){
    const unidad = await pool.query('SELECT * FROM unidadesmedida');
    res.json(unidad);
  }

  public async listarPresentacion (req:Request,res:Response){
    const presentaciones = await pool.query('SELECT * FROM presentaciones');
    res.json(presentaciones);
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM productos WHERE codigoproducto=?',[id]);
    res.json({message:'La el producto fue eliminado'});
  }
}
export const productoControlador = new ProductoControlador();