import db from "../config/config.js";

export async function getAllProducts() {
    const [rows] = await db.execute("SELECT * FROM produto");
    return rows;
}

export async function createProduct(titulo, descricao, preco) {
    await db.execute(
        "INSERT INTO produto (titulo, descricao, preco) VALUES (?, ?, ?)",
        [titulo, descricao, preco]
    );
}

export async function deleteProduct(id) {
    await db.execute("DELETE FROM produto WHERE id = ?", [id]);
}

export async function updateProduct(id, titulo, descricao, preco) {
    await db.execute(
        "UPDATE produto SET titulo=?, descricao=?, preco=? WHERE id=?",
        [titulo, descricao, preco, id]
    );
}
