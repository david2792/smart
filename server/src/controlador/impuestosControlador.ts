import {Request, Response} from 'express';
import pool from '../base_datos';

class ImpuestoControlador
{
 public async listar (req:Request,res:Response){
    const unidad = await pool.query('SELECT * FROM impuestos');
    res.json(unidad);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const unidad =  await pool.query('SELECT * FROM impuestos WHERE codigo=?',[id]);
    if(unidad.length > 0){
      return res.json(unidad[0]);
      console.log(unidad);
    }
    res.status(404).json({text:'El impuesto no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO impuestos set ?',[req.body]);
    res.json({message:"El impuesto fue guardado"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM impuestos WHERE codigo=?',[id]);
    res.json({message:'El impuesto fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE impuestos SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'La marca fue actualizada'});
  }
}

export const impuestoControlador = new ImpuestoControlador();