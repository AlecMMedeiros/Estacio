
// Organizing the data for the recipes
const receitas = [
  {
    titulo: "Bolo de Chocolate",
    imagem: "images/bolo_chocolate.png",
    preparo: "Misture todos os ingredientes e asse por 30 minutos.",
    ingredientes: ["2 xícaras de farinha", "1 xícara de chocolate em pó", "3 ovos"]
  },
  {
    titulo: "Salada Caesar",
    imagem: "images/salada_caesar.png",
    preparo: "Misture todos os ingredientes e tempere a gosto.",
    ingredientes: ["Alface", "Croutons", "Queijo parmesão", "Molho Caesar"]
  }
];

function getListaIngredientes(receita) {
  return '<ul>' + receita.ingredientes.map(item => '<li>' + item + '</li>').join('') + '</ul>';
}

function getCard(receita) {
  return `
    <div class="card" style="width: 250px;">
      <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
      <div class="card-body">
        <h5 class="card-title">${receita.titulo}</h5>
        <div class="card-text">
          ${getListaIngredientes(receita)}
          <hr>
          ${receita.preparo}
        </div>
      </div>
    </div>
  `;
}

function preencheCatalogo() {
  let pnlCatalogo = document.getElementById('pnlCatalogo');
  pnlCatalogo.innerHTML = receitas.map(getCard).join('');
}

window.onload = preencheCatalogo;
