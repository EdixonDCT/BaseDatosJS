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
        [this.nombre, this.descripcion]); 
      return{ 
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }
  async update(id)
  {
    try {
      console.log("Desde la clase",this.nombre,this.descripcion,id);
      const [result] = await conection.query('UPDATE categorias SET nombre = ?,descripcion = ? WHERE id = ?',
        [this.nombre, this.descripcion, id]);
      if (result.affectBows === 0) {
        throw new Error("Categoria no encontarada");
      }
      return {
        id,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }
}
  
export default Categoria;