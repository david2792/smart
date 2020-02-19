import {Request, Response} from 'express';
import pool from '../base_datos';


class ClienteControlador
{
 public async listar (req:Request,res:Response){
    const usuario = await pool.query('SELECT * FROM vclientes');
    res.json(usuario);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const usuario =  await pool.query('SELECT * FROM  vclientes WHERE codigo=?',[id]);
    if(usuario.length > 0){
      return res.json(usuario[0]);
    }
    res.status(404).json({text:'el cliente no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
   const ciudad= req.body.ciudad;
   const id= await pool.query('SELECT codigo FROM ciudades WHERE nombre =?',ciudad);
   JSON.stringify(id);
   const codigociudad= id[0].codigo;
   const cedula = req.body.cedula;
   const ruc = req.body.ruc;
   const razonsocial = req.body.razonsocial;
   const fechanacimiento = req.body.fechanacimiento;
   const direccion =  req.body.direccion;
   const telefono =  req.body.telefono;
   const values={cedula,ruc,razonsocial,fechanacimiento,direccion,telefono,codigociudad};
   await pool.query('INSERT INTO clientes  SET ?',values);
    res.json({message:"el cliente  fue guardado"});
  }
 
  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const ciudad= req.body.ciudad;
   const idciudad= await pool.query('SELECT codigo FROM ciudades WHERE nombre =?',ciudad);
   JSON.stringify(idciudad);
   const codigociudad= idciudad[0].codigo;
   const cedula = req.body.cedula;
   const ruc = req.body.ruc;
   const razonsocial = req.body.razonsocial;
   const fechanacimiento = req.body.fechanacimiento;
   const direccion =  req.body.direccion;
   const telefono =  req.body.telefono;
   const values={cedula,ruc,razonsocial,fechanacimiento,direccion,telefono,codigociudad};
    const marcas =  await pool.query('UPDATE clientes SET ? WHERE codigo = ?',[values,id]);
    res.json({message:'el cliente fue actualizado'});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const categoria =  await pool.query('DELETE FROM departamentos WHERE codigo=?',[id]);
    res.json({message:'el departamento fue eliminada'});
  }

   public async listarCiudad (req:Request,res:Response){
   
    const ciudad = await pool.query('SELECT * FROM ciudades');
    res.json(ciudad); 
  } 
}

export const clienteControlador = new ClienteControlador();