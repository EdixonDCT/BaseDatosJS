import express from "express";
import CategoriaController from "../controller/categoriaController.js";
import { validarCategoria } from "../midlewares/validarCategoria.js";

const router = express.Router();

router.get("/", CategoriaController.getAllCategoria);

router.post("/",validarCategoria,CategoriaController.createCategoria);

router.put("/:id", CategoriaController.actualizarCategoria);
  
export default router;