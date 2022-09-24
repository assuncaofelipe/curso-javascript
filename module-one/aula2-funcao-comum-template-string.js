// Função comum com Template String
function somaTemplateString(x1, x2, operator) {
    // template string
    // eval faz com que uma operacao seja feita no string
    return eval(`${x1} ${operator} ${x2}`);
}

let result = somaTemplateString(2, 2, '+');

console.log(result)