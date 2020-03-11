import {Request, Response} from 'express';
import pool from '../base_datos';

class NivelControlador
{
 public async listar (req:Request,res:Response){
    const marcas = await pool.query('SELECT * FROM nivelusuario');
    res.json(marcas);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const marcas =  await pool.query('SELECT * FROM nivelusuario WHERE codigo=?',[id]);
    if(marcas.length > 0){
      return res.json(marcas[0]);
      console.log(marcas);
    }
    res.status(404).json({text:'La nivelusuario no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO nivelusuario set ?',[req.body]);
    res.json({message:"nivelusuario GUARDADO"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM nivelusuario WHERE codigo=?',[id]);
    res.json({message:'La nivelusuario fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE nivelusuario SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'nivelusuario fue actualizada'});
  }
}

export const nivelControlador = new NivelControlador();