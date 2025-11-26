import {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct
} from "../models/models.js";

export async function listarProdutos(req, res) {
    const produtos = await getAllProducts();
    res.json(produtos);
}

export async function criarProduto(req, res) {
    const { titulo, descricao, preco } = req.body;
    await createProduct(titulo, descricao, preco);
    res.json({ message: "Produto criado!" });
}

export async function excluirProduto(req, res) {
    const { id } = req.params;
    await deleteProduct(id);
    res.json({ message: "Produto excluído!" });
}

export async function atualizarProduto(req, res) {
    const { id } = req.params;
    const { titulo, descricao, preco } = req.body;
    await updateProduct(id, titulo, descricao, preco);
    res.json({ message: "Produto atualizado!" });
}
