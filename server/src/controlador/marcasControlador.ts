import {Request, Response} from 'express';
import pool from '../base_datos';

class MarcasControlador
{
 public async listar (req:Request,res:Response){
    const marcas = await pool.query('SELECT * FROM marcas');
    res.json(marcas);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const marcas =  await pool.query('SELECT * FROM marcas WHERE codigo=?',[id]);
    if(marcas.length > 0){
      return res.json(marcas[0]);
      console.log(marcas);
    }
    res.status(404).json({text:'La marca no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO marcas set ?',[req.body]);
    res.json({message:"JUEGO GUARDADO"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM marcas WHERE codigo=?',[id]);
    res.json({message:'La marca fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE marcas SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'La marca fue actualizada'});
  }
}

export const marcasControlador = new MarcasControlador();