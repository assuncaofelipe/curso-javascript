
// Arrow Function
let arrowFunCalc = (x1, x2, operator) => {
    // template string
    // eval faz com que uma operacao seja feita no string
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = arrowFunCalc(1,2,'*');
console.log(resultado);