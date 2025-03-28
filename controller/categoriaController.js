import Categoria from "../models/categoria.js";

class CategoriaController
{
  static getAllCategoria = async (req,res) => 
  {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    res.json(categorias);
  }
}
export default CategoriaController;