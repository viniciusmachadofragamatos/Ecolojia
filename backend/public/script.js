const API = "/api/produtos";

async function carregarProdutos() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("produtos");
    container.innerHTML = "";

    data.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <h3>${p.titulo}</h3>
            <p>${p.descricao}</p>
            <p><b>R$ ${p.preco}</b></p>
            <button onclick="deletarProduto(${p.id})">Excluir</button>
            <button onclick="editarProduto(${p.id}, '${p.titulo}', '${p.descricao}', ${p.preco})">Editar</button>
        </div>`;
    });
}

async function criarProduto() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descricao, preco })
    });

    carregarProdutos();
}

async function deletarProduto(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    carregarProdutos();
}

async function editarProduto(id, titulo, descricao, preco) {
    const novoTitulo = prompt("Novo título:", titulo);
    const novaDescricao = prompt("Nova descrição:", descricao);
    const novoPreco = prompt("Novo preço:", preco);

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            titulo: novoTitulo,
            descricao: novaDescricao,
            preco: novoPreco
        })
    });

    carregarProdutos();
}

carregarProdutos();
