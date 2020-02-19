import {Request, Response} from 'express';
import pool from '../base_datos';


class DepartamentosControlador
{
 public async listar (req:Request,res:Response){
    const familias = await pool.query('SELECT * FROM vdepartamentos');
    res.json(familias);
  } 

  public async listarUno (req:Request,res:Response):Promise<any>{
    const { id }= req.params;
    const familias =  await pool.query('SELECT * FROM  vdepartamentos WHERE codigo=?',[id]);
    if(familias.length > 0){
      return res.json(familias[0]);
      console.log(familias);
    }
    res.status(404).json({text:'el departamento no existe'});
  
  } 

  public async crear(req:Request, res:Response):Promise<void>
  {
   const pais= req.body.pais;
   const nombre = req.body.nombre;
   const id= await pool.query('SELECT codigo FROM paises WHERE nombre =?',pais);
   JSON.stringify(id);//CONVIERTE LA CONSULTA A UN JSON
   const codigopaises = id[0].codigo;//CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
   const values={codigopaises,nombre};
   await pool.query('INSERT INTO departamentos  SET ?',values);
    res.json({message:"el departamentoo fue guardada"});
  }
 
  public async actualiar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const pais= req.body.pais;
    const nombre = req.body.nombre;
   const idpais= await pool.query('SELECT codigo FROM paises WHERE nombre =?',pais);
   JSON.stringify(idpais);//CONVIERTE LA CONSULTA A UN JSON
   const codigopaises = idpais[0].codigo;//CAPTURA EL VALOR DEL CODIDO FAMILIA DESDE EL DOCUMENTO JSON
    const values={codigopaises,nombre};
    const marcas =  await pool.query('UPDATE paises SET ? WHERE codigo = ?',[values,id]);
    res.json({message:'el departamento fue actualizado'});
  }

  public async eliminar(req:Request, res:Response):Promise<void>
  {
    const { id }= req.params;
    const categoria =  await pool.query('DELETE FROM departamentos WHERE codigo=?',[id]);
    res.json({message:'el departamento fue eliminada'});
  }

   public async listarPais (req:Request,res:Response){
   
    const pais = await pool.query('SELECT * FROM paises');
    res.json(pais); 
  } 
}

export const departamentoControlador = new DepartamentosControlador();