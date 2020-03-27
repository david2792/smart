import {Request, Response} from 'express';
import pool from '../base_datos';
class ListaPrecio
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
        const productos =  await pool.query('SELECT * FROM  vlistaprecio WHERE CodigoProducto=?',[id]);
        if(productos.length > 0){
          return res.json(productos);
          
        }else{
          const { id }= req.params;
          const productos =  await pool.query('SELECT * FROM  vproductolista WHERE CodigoProducto=?',[id]);
          if(productos.length >0){
            return res.json(productos);
          console.log(productos);
        }
        }
        res.status(404).json({text:'El producto no existe'});
      
      } 

      public async listarUnProducto (req:Request,res:Response):Promise<any>{
        const { id }= req.params;
        const productos =  await pool.query('SELECT * FROM  vproductos WHERE CodigoProducto=?',[id]);
        if(productos.length >0){
          return res.json(productos);
          console.log(productos);
        }
        res.status(404).json({text:'El producto no existe'});
      
      } 

      public async crear(req:Request, res:Response):Promise<void>
      {
      
      const codigoDeposito= req.body.codigoDeposito;
      const CodigoProducto = req.body.CodigoProducto;
      const Descripcion = req.body.Descripcion;
      const Precio = req.body.Precio;
      const Porcentaje = req.body.Porcentaje;
      const PrecioCompra = req.body.PrecioCompra;
      const Cuotas = req.body.Cuotas;
      const lista={codigoDeposito,CodigoProducto,Descripcion,Precio,Porcentaje,PrecioCompra,Cuotas};// datos de productos
    
        console.log(lista);
    
       try {
            await pool.query("START TRANSACTION");// se inica la transaccion
            await pool.query('INSERT INTO listaprecios  SET ?',lista);// se inserta los datos en la tabla productos
            await pool.query("COMMIT");// se confirma la transaccion
            res.json({message:"el producto fue guardado"});
       } catch (error) {
        await pool.query("ROLLBACK");
        console.log("ocurrio un error: "+error);
        throw error
       }
     
        
      }

}
export const listaPrecioControlador = new ListaPrecio();