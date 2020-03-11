import {Request, Response} from 'express';
import pool from '../base_datos';

class CategoriaControlador
{
 public async listar (req:Request,res:Response){
    const familias = await pool.query('SELECT * FROM vfamilia');
    res.json(familias);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const familias =  await pool.query('SELECT * FROM  vfamilia WHERE codigo=?',[id]);
    if(familias.length > 0){
      return res.json(familias[0]);
      console.log(familias);
    }
    res.status(404).json({text:'La categoria no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
   const familia= req.body.familia;
   const nombre = req.body.nombre;
   console.log(familia);
   const id= await pool.query('SELECT codigo FROM familias WHERE nombre =?',familia);
   JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
   const codigofamilia = id[0].codigo;//CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
   // console.log(codigofamilia); NUESTRA EN CONSOLA EL CODIGO DE LA CATEGORIA
   const values={codigofamilia,nombre};
   await pool.query('INSERT INTO categorias  SET ?',values);
    res.json({message:"la categoria fue guardada"});
  }
 
  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const familia= req.body.familia;
    const nombre = req.body.nombre;
   console.log(familia); 
   const idfamilia= await pool.query('SELECT codigo FROM familias WHERE nombre =?',familia);
   JSON.stringify(idfamilia);//CONVIERTE LA CONSULTA A UN JSON
   const codigofamilia = idfamilia[0].codigo;//CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
   console.log(codigofamilia); //NUESTRA EN CONSOLA EL CODIGO DE LA CATEGORIA
    const values={codigofamilia,nombre};
    const marcas =  await pool.query('UPDATE categorias SET ? WHERE codigo = ?',[values,id]);
    res.json({message:'La categoria fue actualizada'});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const categoria =  await pool.query('DELETE FROM categorias WHERE codigo=?',[id]);
    res.json({message:'La categoria fue eliminada'});
  }

   public async listarFamilia (req:Request,res:Response){
   
    const familia = await pool.query('SELECT * FROM familias');
    res.json(familia);
  } 
}

export const categoriaControlador = new CategoriaControlador();