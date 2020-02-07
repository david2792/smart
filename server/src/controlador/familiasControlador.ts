import {Request, Response} from 'express';
import pool from '../base_datos';

class FamiliaControlador
{
 public async listar (req:Request,res:Response){
    const familias = await pool.query('SELECT * FROM familias');
    res.json(familias);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const familias =  await pool.query('SELECT * FROM familias WHERE codigo=?',[id]);
    if(familias.length > 0){
      return res.json(familias[0]);
      console.log(familias);
    }
    res.status(404).json({text:'La familias no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO familias set ?',[req.body]);
    res.json({message:"la familias fue guardado"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM familias WHERE codigo=?',[id]);
    res.json({message:'La familia fue eliminada'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE familias SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'La familia fue actualizada'});
  }
}

export const familiaControlador = new FamiliaControlador();