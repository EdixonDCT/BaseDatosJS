import conection from "../utils/database.js";

class Categoria {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }
  async create()
  { 
    try {
      const [result] = await conection.query("INSERT INTO categorias(nombre,descripcion) VALUES (?,?)",
        [this.nombre, this, this.descripcion]);
      return{ 
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }
}
  
export default Categoria;