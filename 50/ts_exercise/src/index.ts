type Nome = string;

function saluta(nome: Nome): string {
    return `Ciao, ${nome}!`;
}

const nome: Nome = "Gabriele";

console.log(saluta(nome));
