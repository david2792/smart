import {Request, Response} from 'express';
import pool from '../base_datos';

class ProductoControlador
 {
    public async listar (req:Request,res:Response){
        const productos = await pool.query('SELECT * FROM vproductos');
        res.json(productos);
      }
      
      public async listarUno (req:Request,res:Response):Promise<any>{
        const { id }= req.params;
        const productos =  await pool.query('SELECT * FROM  vproductos WHERE codigoproducto=?',[id]);
        if(productos.length > 0){
          return res.json(productos[0]);
          console.log(productos);
        }
        res.status(404).json({text:'El producto no existe'});
      
      } 
   
  public async crear(req:Request, res:Response):Promise<void>
  {
  //se captura el ultimo codigo
  const codigomaximo= await pool.query('SELECT MAX(codigoproducto) as codigo FROM productos');
  JSON.stringify(codigomaximo);
  const codigo = codigomaximo[0].codigo;
  //console.log(JSON.stringify());
  const categoria= req.body.categoria;
  console.log(categoria);
  const id= await pool.query('SELECT codigo FROM categorias WHERE nombre =?',categoria);
  JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
  //se capturan los codigos
  const marca= req.body.marca;
  console.log(marca);
  const idmarca= await pool.query('SELECT codigo FROM marcas WHERE nombre =?',marca);
  JSON.stringify(idmarca);
  ///
  const medida= req.body.medida;
  console.log(medida);
  const idmedida= await pool.query('SELECT codigo FROM unidadesmedida WHERE nombre =?',medida);
  JSON.stringify(idmedida);
    ///
    const presentacion= req.body.presentacion;
    console.log(medida);
    const idpresentacion= await pool.query('SELECT codigo FROM presentaciones WHERE descripcion =?',presentacion);
    JSON.stringify(idpresentacion);
    ///
    const impuesto= req.body.impuesto;
    console.log(impuesto);
    const idimpuesto= await pool.query('SELECT codigo FROM impuestos WHERE nombre =?',impuesto);
    JSON.stringify(idimpuesto);
  // se inicia recuperando los datos de la tabla productos
  const codigoproducto = codigo+1
  const codigocategoria = id[0].codigo;
   const codigomarca= idmarca[0].codigo;
   const codigounidadmedida = idmedida[0].codigo;
   const codigopresentacion= idpresentacion[0].codigo;
   const codigoimpuesto = idimpuesto[0].codigo;
   //const codigoeposito = req.body.codigodeposito;
   const codigobarra= req.body.codigobarra;
   const descripcion = req.body.descripcion;
   const cantidadpresentacion= req.body.cantidadpresentacion;
   const perecedero = req.body.perecedero
   const imagen = req.body.imagen
   const estado = req.body.estado
   const productos={codigoproducto,codigocategoria,codigomarca,codigounidadmedida,codigopresentacion,
    codigoimpuesto,codigobarra,descripcion,cantidadpresentacion,perecedero,imagen,estado};// datos de productos

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
   const stock = {codigodeposito,codigoproducto,stockactual,stockminimo,stockmaximo,preciocompra,precioventaminorista,
    preciomayorista, limitedescuento,fechacreacion,fechamodificacion,fechaultimaventa}

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
  const categoria= req.body.categoria;
  console.log("dfg"+categoria);
  const idcategoria= await pool.query('SELECT codigo FROM categorias WHERE nombre =?',categoria);
  JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
  //se capturan los codigos
  const marca= req.body.marca;
  console.log(marca);
  const idmarca= await pool.query('SELECT codigo FROM marcas WHERE nombre =?',marca);
  JSON.stringify(idmarca);
  ///
  const medida= req.body.medida;
  console.log(medida);
  const idmedida= await pool.query('SELECT codigo FROM unidadesmedida WHERE nombre =?',medida);
  JSON.stringify(idmedida);
    ///
    const presentacion= req.body.presentacion;
    console.log(medida);
    const idpresentacion= await pool.query('SELECT codigo FROM presentaciones WHERE descripcion =?',presentacion);
    JSON.stringify(idpresentacion);
    ///
    const impuesto= req.body.impuesto;
    console.log(impuesto);
    const idimpuesto= await pool.query('SELECT codigo FROM impuestos WHERE nombre =?',impuesto);
    JSON.stringify(idimpuesto);
  // se inicia recuperando los datos de la tabla productos

  const codigocategoria = idcategoria[0].codigo;
   const codigomarca= idmarca[0].codigo;
   const codigounidadmedida = idmedida[0].codigo;
   const codigopresentacion= idpresentacion[0].codigo;
   const codigoimpuesto = idimpuesto[0].codigo;
   //const codigoeposito = req.body.codigodeposito;
   const codigobarra= req.body.codigobarra;
   const descripcion = req.body.descripcion;
   const cantidadpresentacion= req.body.cantidadpresentacion;
   const perecedero = req.body.perecedero
   const imagen = req.body.imagen
   const estado = req.body.estado
   const productos={codigocategoria,codigomarca,codigounidadmedida,codigopresentacion,
    codigoimpuesto,codigobarra,descripcion,cantidadpresentacion,perecedero,imagen,estado};// datos de productos

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
   const stock = {codigodeposito,stockactual,stockminimo,stockmaximo,preciocompra,precioventaminorista,
    preciomayorista, limitedescuento,fechacreacion,fechamodificacion,fechaultimaventa}

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
    const familias = await pool.query('SELECT * FROM vfamilia');
    res.json(familias);
  }   

  public async listarImpuesto (req:Request,res:Response){
    const unidad = await pool.query('SELECT * FROM impuestos');
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