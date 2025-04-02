import conection from "../utils/database.js";

class Categoria {
  // constructor(nombre, descripcion) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }
  async create(nombre, descripcion)
  { 
    try {
      const [result] = await conection.query("INSERT INTO categorias(nombre,descripcion) VALUES (?,?)",
        [nombre,descripcion]); 
      return{ 
        id: result.id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }
  async update(nombre,descripcion,id)
  {
    try {
      console.log("Desde la clase",nombre,descripcion,id);
      const [result] = await conection.query('UPDATE categorias SET nombre = ?,descripcion = ? WHERE id = ?',
        [nombre,descripcion, id]);
      if (result.affectBows === 0) {
        throw new Error("Categoria no encontarada");
      }
      return {
        id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }
}
  
export default Categoria;