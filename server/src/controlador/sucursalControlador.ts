import {Request, Response} from 'express';
import pool from '../base_datos';

class SucursalControlador
{
 public async listar (req:Request,res:Response){
    const sucursal = await pool.query('SELECT * FROM vsucursal');
    res.json(sucursal);
  } 
  public async listarEmpresa (req:Request,res:Response){
    const empresa = await pool.query('SELECT * FROM empresas');
    res.json(empresa);
  } 
  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const sucursal =  await pool.query('SELECT * FROM vsucursal WHERE codigosucursal=?',[id]);
    if(sucursal.length > 0){
      return res.json(sucursal[0]);
    }
    res.status(404).json({text:'La sucursal no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    const empresa= req.body.empresa;
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const id= await pool.query('SELECT codigo FROM empresas WHERE razonsocial =?',empresa);
    JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
    const codigoempresas = id[0].codigo;//CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
    const values={codigo,nombre,telefono,codigoempresas};
    await pool.query('INSERT INTO sucursal  SET ?',values);
    res.json({message:"la sucursal fue guardada"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const empresa =  await pool.query('DELETE FROM sucursal WHERE codigo=?',[id]);
    res.json({message:'La empresa fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    
    const { id }= req.params;
    const empresa= req.body.empresa;
    console.log(empresa)
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const idempresa= await pool.query('SELECT codigo FROM empresas WHERE razonsocial =?',empresa);
    JSON.stringify(idempresa);//CONVIERTE LA CONSULTA A UN JSON
    
    const codigoempresas = idempresa[0].codigo;//CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
    const values={codigo,nombre,telefono,codigoempresas};
    const sucursal =  await pool.query('UPDATE sucursal SET ? WHERE codigosucursal = ?',[values,id]);
    res.json({message:'La sucursal fue actualizada'});
  }
}

export const sucursalControlador = new SucursalControlador();