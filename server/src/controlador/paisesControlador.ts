import {Request, Response} from 'express';
import pool from '../base_datos';

class PaisControlador
{
 public async listar (req:Request,res:Response){
    const marcas = await pool.query('SELECT * FROM paises');
    res.json(marcas);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const marcas =  await pool.query('SELECT * FROM paises WHERE codigo=?',[id]);
    if(marcas.length > 0){
      return res.json(marcas[0]);
      console.log(marcas);
    }
    res.status(404).json({text:'El pais no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO paises set ?',[req.body]);
    res.json({message:"PAIS GUARDADO"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM paises WHERE codigo=?',[id]);
    res.json({message:'El pais fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE paises SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'El pais fue actualizada'});
  }
}

export const paisControlador = new PaisControlador();