import {Request, Response} from 'express';
import pool from '../base_datos';


class CiudadesControlador
{
 public async listar (req:Request,res:Response){
    const familias = await pool.query('SELECT * FROM vciudades');
    res.json(familias);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const familias =  await pool.query('SELECT * FROM  vciudades WHERE codigo=?',[id]);
    if(familias.length > 0){
      return res.json(familias[0]);
      console.log(familias);
    }
    res.status(404).json({text:'ciudad no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
   const departamento= req.body.departamento;
   const nombre = req.body.nombre;
   const id= await pool.query('SELECT codigo FROM departamentos  WHERE nombre =?',departamento);
   JSON.stringify(id);
   const codigodepartamentos = id[0].codigo;
   const values={codigodepartamentos,nombre};
   await pool.query('INSERT INTO ciudades  SET ?',values);
    res.json({message:"la ciudad fue guardada"});
  }
 
  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const departamento= req.body.departamento;
    const nombre = req.body.nombre;
   const iddepartamento= await pool.query('SELECT codigo FROM departamentos WHERE nombre =?',departamento);
   JSON.stringify(iddepartamento);
   const codigodepartamentos = iddepartamento[0].codigo;
    const values={codigodepartamentos,nombre};
    const marcas =  await pool.query('UPDATE ciudades SET ? WHERE codigo = ?',[values,id]);
    res.json({message:'ciudad fue actualizado'});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const categoria =  await pool.query('DELETE FROM ciudades WHERE codigo=?',[id]);
    res.json({message:'ciudad fue eliminada'});
  }

   public async listarDepartamento (req:Request,res:Response){
   
    const departamento = await pool.query('SELECT * FROM departamentos');
    res.json(departamento);
  } 
}

export const ciudadesControlador = new CiudadesControlador();