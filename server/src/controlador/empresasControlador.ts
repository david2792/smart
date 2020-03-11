import {Request, Response} from 'express';
import pool from '../base_datos';

class EmpresasControlador
{
 public async listar (req:Request,res:Response){
    const empresa = await pool.query('SELECT * FROM empresas');
    res.json(empresa);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const empresa =  await pool.query('SELECT * FROM empresas WHERE codigo=?',[id]);
    if(empresa.length > 0){
      return res.json(empresa[0]);
    }
    res.status(404).json({text:'La empresa no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO empresas set ?',[req.body]);
    res.json({message:"EMPRESA GUARDADA"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const empresa =  await pool.query('DELETE FROM empresas WHERE codigo=?',[id]);
    res.json({message:'La empresa fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const empresa =  await pool.query('UPDATE empresas SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'La empresa fue actualizada'});
  }
}

export const empresaControlador = new EmpresasControlador();