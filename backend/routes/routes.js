import express from "express";
import {
    listarProdutos,
    criarProduto,
    excluirProduto,
    atualizarProduto
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", listarProdutos);
router.post("/", criarProduto);
router.delete("/:id", excluirProduto);
router.put("/:id", atualizarProduto);

export default router;
