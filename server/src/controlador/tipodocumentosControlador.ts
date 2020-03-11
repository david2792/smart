import {Request, Response} from 'express';
import pool from '../base_datos';

class TipoDocumentoControlador
{
 public async listar (req:Request,res:Response){
    const tipodocumento = await pool.query('SELECT * FROM tiposdocumentos');
    res.json(tipodocumento);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const tipodocumento =  await pool.query('SELECT * FROM tiposdocumentos WHERE codigo=?',[id]);
    if(tipodocumento.length > 0){
      return res.json(tipodocumento[0]);
    }
    res.status(404).json({text:'El tipo de Documento no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
    await pool.query('INSERT INTO tiposdocumentos set ?',[req.body]);
    res.json({message:"Tipos Documentos GUARDADO"});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('DELETE FROM tiposdocumentos WHERE codigo=?',[id]);
    res.json({message:'El tipo documento fue eliminado'});
  }

  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const marcas =  await pool.query('UPDATE tiposdocumentos SET ? WHERE codigo = ?',[req.body,id]);
    res.json({message:'El tipo de Documento fue actualizado'});
  }
}

export const tipodocumentoControlador = new TipoDocumentoControlador();