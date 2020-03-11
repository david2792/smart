import {Request, Response} from 'express';
import pool from '../base_datos';


class UusuarioControlador
{
 public async listar (req:Request,res:Response){
    const usuario = await pool.query('SELECT * FROM vusuarios');
    res.json(usuario);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const usuario =  await pool.query('SELECT * FROM  vusuarios WHERE codigo=?',[id]);
    if(usuario.length > 0){
      return res.json(usuario[0]);
    }
    res.status(404).json({text:'el usuario no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
   const nivel= req.body.nivel;
   const sucursal = req.body.sucursal;
   const id= await pool.query('SELECT codigo FROM nivelusuario WHERE nombre =?',nivel);
   JSON.stringify(id);
   const codigonivelusuario= id[0].codigo;
   const idsucursal= await pool.query('SELECT codigo FROM sucursal WHERE nombre =?',sucursal);
   JSON.stringify(idsucursal);
   const codigosucursal= idsucursal[0].codigo;
   const cedula = req.body.cedula;
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const fechanacimiento = req.body.fechanacimiento;
   const direccion =  req.body.direccion;
   const telefono =  req.body.telefono;
   const email =  req.body.email;
   const usuario = req.body.usuario;
   const clave =  req.body.clave;
   const values={codigonivelusuario,codigosucursal,cedula,nombre,apellido,fechanacimiento,direccion,telefono,email,usuario,clave};
   await pool.query('INSERT INTO usuarios  SET ?',values);
    res.json({message:"el usuario fue guardado"});
  }
 
  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const nivel= req.body.nivel;
   const sucursal = req.body.sucursal;
   const idnivel= await pool.query('SELECT codigo FROM nivelusuario WHERE nombre =?',nivel);
   JSON.stringify(idnivel);
   const codigonivelusuario= idnivel[0].codigo;
   const idsucursal= await pool.query('SELECT codigo FROM sucursal WHERE nombre =?',sucursal);
   JSON.stringify(idsucursal);
   const codigosucursal= idsucursal[0].codigo;
   const cedula = req.body.cedula;
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const fechanacimiento = req.body.fechanacimiento;
   const direccion =  req.body.direccion;
   const telefono =  req.body.telefono;
   const email =  req.body.email;
   const usuario = req.body.usuario;
   const clave =  req.body.clave;
   const values={codigonivelusuario,codigosucursal,cedula,nombre,apellido,fechanacimiento,direccion,telefono,email,usuario,clave};
    const marcas =  await pool.query('UPDATE usuarios SET ? WHERE codigo = ?',[values,id]);
    res.json({message:'el usuario fue actualizado'});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const categoria =  await pool.query('DELETE FROM departamentos WHERE codigo=?',[id]);
    res.json({message:'el departamento fue eliminada'});
  }

   public async listarNivel (req:Request,res:Response){
   
    const nivel = await pool.query('SELECT * FROM nivelusuario');
    res.json(nivel); 
  } 
  public async listarSucursal (req:Request,res:Response){
   
    const sucursal = await pool.query('SELECT * FROM Sucursal');
    res.json(sucursal); 
  } 
}

export const usuarioControlador = new UusuarioControlador();